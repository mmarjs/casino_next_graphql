import React from 'react';
import MainLayout from "@/components/Layout/MainLayout";
import PageContainer from '@/components/BlogArticle/BlogArticlePageContainer';
import { withStyles } from '@mui/styles';
import theme from '@/src/theme';
import apollo from '@/apollo';
import { gql } from "@apollo/client";
import CircularProgressUi from '@/components/Ui/CircularProgressUi';
import { GET_ARTICLE } from '@/graphql/Articles';
import { formatSeoObject } from '@/formatter/helpers';
import { formatArticlesObject } from '@/formatter/Articles';

const useStyles = theme => ({
  containerClass:{
    padding: 0,
    paddingRight:0
  }
});

export async function getServerSideProps({ query, resolvedUrl }) {

  //fetch article
  const res  = await apollo.query({
    query:GET_ARTICLE,
    fetchPolicy: 'no-cache',
    variables:{ filters: {
      slug:{
        eq:query.slug
      }
    }}
  })
  const article = res.data.articles.data.length > 0 ? res.data.articles.data[0] : null;
  
  //fetch providers
    //fetch article
    const res2  = await apollo.query({
      query:gql`query fetchProviders{
        providers {
          data {
            id
            attributes {
              name
              summary
              slug
              web_url
              total_free_slots
              logo {
                data {
                  attributes {
                    url
                    previewUrl
                  }
                }
              }
            }
          }
        }
      }`,
      fetchPolicy: 'no-cache',
    })
    const providers = res2.data.providers.data;
  
  return {
    props: {
      model:article,
      providers: providers,
      seo:formatSeoObject(formatArticlesObject(article),`blog/${query.slug}`)      
    }
  }
};


class BlogArticlePage extends React.Component {

  render() {
  
    const { model, providers } = this.props;

    return (
        <MainLayout 
          seo={this.props.seo} 
          breadcrumbs={[
            {
              title:"Blog",
              href:"/blog",
              as:"/blog"
            },
            {
              title:model?formatArticlesObject(model).title:"Loading...",
              active:true
            }
          ]}
        >          
          {/* pass initial categories received from getServerSideProps */}
          {model && providers ? <PageContainer article={model} providers={providers} /> : <CircularProgressUi />}

        </MainLayout>
    );
  }
}

export default withStyles(useStyles, {defaultTheme: theme})(BlogArticlePage)
