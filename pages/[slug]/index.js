import React from 'react';
import MainLayout from "@/components/Layout/MainLayout";
import PageContainer from '@/components/BlogArticle/BlogArticlePageContainer';
import { withStyles } from '@mui/styles';
import theme from '@/src/theme';
import apollo from '@/apollo';
import { gql } from "@apollo/client";
import CircularProgressUi from '@/components/Ui/CircularProgressUi';
import { GET_PAGE } from '@/graphql/Pages';
import { formatSeoObject } from '@/formatter/helpers';
import { formatPagesObject } from '@/formatter/Pages';

const useStyles = theme => ({
  containerClass:{
    padding: 0,
    paddingRight:0
  }
});

export async function getServerSideProps({ query, resolvedUrl }) {

  //fetch article
  const res  = await apollo.query({
    query:GET_PAGE,
    fetchPolicy: 'no-cache',
    variables:{ filters: {
      slug:{
        eq:query.slug
      }
    }}
  })
  const article = res.data.pages.data.length > 0 ? res.data.pages.data[0] : null;
  
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
      seo:formatSeoObject(formatPagesObject(article),`${query.slug}`)  
    }
  }
};


class BlogArticlePage extends React.Component {

  render() {
  
    const { model, providers } = this.props;

    return (
        <MainLayout 
          seo={this.props.seo} 
        >          
          {/* pass initial categories received from getServerSideProps */}
          {model && providers ? <PageContainer article={model} providers={providers} /> : <CircularProgressUi />}

        </MainLayout>
    );
  }
}

export default withStyles(useStyles, {defaultTheme: theme})(BlogArticlePage)
