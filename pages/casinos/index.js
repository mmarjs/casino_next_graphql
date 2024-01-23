import React from 'react';
import MainLayout from "@/components/Layout/MainLayout";
import CasinoPageContainer from '@/components/Casino/CasinoPageContainer';
import BlogCarousel from '@/components/Blog/BlogCarousel';

import { withStyles } from '@mui/styles';
import theme from '@/src/theme';

import apollo from '@/apollo';
import { gql } from "@apollo/client";
import { GET_CASINOS } from '@/graphql/Casinos';

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const useStyles = theme => ({
  containerClass:{
    padding: 0,
    paddingRight:0
  }
});

export async function getStaticProps({ query, resolvedUrl }) {

    //fetch casinos
    const res2  = await apollo.query({
      query:GET_CASINOS,
      fetchPolicy: 'no-cache',
      variables:{ 
        pagination:{
          page:1,
          pageSize:10
        }
      }
    })
    const casinos = res2.data.casinos.data;

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
  
  return {
    props: {
      casinos:casinos,
      article:{...article.attributes, id:article.id},
      casinosPagination:res2.data.casinos.meta.pagination,
      seo:{
        title: "Casinos | Choosing The Best Online Casinos ",
        description: "HyCasino brings together all the best online casino bonuses and promises you casino expertise and news about gambling, NFTs, crypto",
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/casinos`,
        open_graph: {
          canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/casinos`,
          title: "Casinos | Choosing The Best Online Casinos ",
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


class HomePage extends React.Component {

  render() {
  
    const { classes, article, casinos, casinosPagination } = this.props;

    return (
        <MainLayout 
          seo={this.props.seo} 

        >          
          {/* pass initial categories received from getServerSideProps */}
          <CasinoPageContainer article={article} casinos={casinos} casinosPagination={casinosPagination} />

        </MainLayout>
    );
  }
}

export default withStyles(useStyles, {defaultTheme: theme})(HomePage)
