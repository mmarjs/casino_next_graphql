import React from 'react';
import MainLayout from "@/components/Layout/MainLayout";
import PageContainer from '@/components/Blog/BlogPageContainer';
import { withStyles } from '@mui/styles';
import theme from '@/src/theme';
import apollo from '@/apollo';
import { gql } from "@apollo/client";
import { GET_ARTICLES } from '@/graphql/Articles';
import getConfig from 'next/config'
import { GET_CATEGORIES } from '@/graphql/Categories';

const { publicRuntimeConfig } = getConfig()

const useStyles = theme => ({
  containerClass:{
    padding: 0,
    paddingRight:0
  }
});

export async function getServerSideProps({ query, resolvedUrl }) {

  let category=null;
  if(query.category){
    //fetch article
    const catRes  = await apollo.query({
      query:GET_CATEGORIES,
      fetchPolicy: 'no-cache',
      variables:{ 
        pagination:{
          page:1,
          pageSize:1
        },
        filters:{
          slug:{
            eq:query.category
          }
        }
      }
    })
    category = catRes.data.categories.data.length > 0 ? catRes.data.categories.data[0] : null;
  }

  //fetch article
  const res  = await apollo.query({
    query:gql`query getBlog($filters: ArticleFiltersInput) {
      articles(filters:$filters) {
        data {
          id
          attributes {
            title
            summary
            slug
            content_body
            published_on
            category_ids {
              data {
                attributes {
                  name
                  type
                  slug
                }
              }
            }
          }
        }
      }
    }`,
    fetchPolicy: 'no-cache',
    variables:{ filters: {
      featured:{
        eq:true
      }
    }}
  })
  const article = res.data.articles.data.length > 0 ? res.data.articles.data[0] : null;


  let filters = {};
  if(query.search){
    filters.title = {
        contains: query.search
    };
  }
  if(query.category){
    filters.category_ids = {
      slug: {
        eq:query.category
      }
    };
  }

  //fetch article
  const res2  = await apollo.query({
    query:GET_ARTICLES,
    fetchPolicy: 'no-cache',
    variables:{ 
      pagination:{
        page:1,
        pageSize:publicRuntimeConfig.blog_page_size
      },
      filters:filters
    }
  })
  const articles = res2.data.articles.data
  
  return {
    props: {
      article:{...article.attributes, id:article.id},
      articles: articles,
      articlesPagination:res2.data.articles.meta.pagination,
      category: category,
      seo:{
        title: "Blog | Choosing The Best Online Casinos",
        description: "HyCasino brings together all the best online casino bonuses and promises you casino expertise and news about gambling, NFTs, crypto",
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        open_graph: {
          canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
          title: "Blog | Choosing The Best Online Casinos",
          description: "HyCasino brings together all the best online casino bonuses and promises you casino expertise and news about gambling, NFTs, crypto",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_DEFAULT_META_IMAGE}`,
              width: 1000,
              height: 1000,
              alt: process.env.NEXT_PUBLIC_DEFAULT_META_TITLE,
            },
          ],
          site_name: process.env.NEXT_PUBLIC_SITE_NAME,
        }
      }
    }
  }
};


class BlogPage extends React.Component {

  constructor(){
    super();
    this.state = {
      breadcrumbs: [
        {
          title:"Blog",
          active:true
        }
      ],
    }
  }

  componentDidMount() {

    if(this.props.category){
      let brd = [
        {
          title:"Blog",
          href:"/blog",
          as:"/blog"
        },
        {
          title:this.props.category.attributes.name,
          active:true
        }
      ];

      this.setState({breadcrumbs: brd});

    }
  }

  render() {
  
    const { articles, article, articlesPagination, category } = this.props;
    const { breadcrumbs } = this.state;

    return (
        <MainLayout 
          seo={this.props.seo} 
          breadcrumbs={breadcrumbs}
        >          
          {/* pass initial categories received from getServerSideProps */}
          <PageContainer 
            article={article} 
            articles={articles} 
            articlesPagination={articlesPagination} 
            categoryData={category}
          />

        </MainLayout>
    );
  }
}

export default withStyles(useStyles, {defaultTheme: theme})(BlogPage)
