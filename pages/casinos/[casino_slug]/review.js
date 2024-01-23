import React from 'react';
import MainLayout from "@/components/Layout/MainLayout";
import PageContainer from '@/components/Review/ReviewCasinoDetailPageContainer';
import { withStyles } from '@mui/styles';
import theme from '@/src/theme';
import apollo from '@/apollo';
import { GET_REVIEWS } from '@/graphql/Reviews';
import { GET_ARTICLE } from '@/graphql/Articles';
import { formatReviewsObject } from '@/formatter/Reviews';
import { formatSeoObject } from '@/formatter/helpers';

const useStyles = theme => ({
  containerClass:{
    padding: 0,
    paddingRight:0
  }
});

export async function getServerSideProps({ query, resolvedUrl }) {

  //fetch article
  const res  = await apollo.query({
    query:GET_REVIEWS,
    fetchPolicy: 'no-cache',
    variables:{ filters: {
        casino:{
            slug:{
                eq:query.casino_slug
            }
        }
    }}
  })
  const review = res.data.reviews.data.length > 0 ? res.data.reviews.data[0] : null;


  //fetch article
  const res2  = await apollo.query({
    query:GET_ARTICLE,
    fetchPolicy: 'no-cache',
    variables:{ filters: {
      featured:{
        eq:true
      }
    }}
  })
  const article = res2.data.articles.data.length > 0 ? res2.data.articles.data[0] : null;
    
  return {
    props: {
      review:review,
      article: article,
      seo:formatSeoObject(formatReviewsObject(review).casino,`casinos/${query.casino_slug}/review`)
    }
  }
};


class ProviderReviewPage extends React.Component {

  render() {
  
    const { review, article } = this.props;

    return (
        <MainLayout 
          seo={this.props.seo} 
          breadcrumbs={[
            {
              title:"Casinos",
              href:"/casinos",
              as:"/casinos"
            },
            {
              title:`${review?formatReviewsObject(review).casino.title:"Loading..."} Review `,
              active:true
            }
          ]}
        >          

            {review && <PageContainer entity="casino" review={review} article={article} />}

        </MainLayout>
    );
  }
}

export default withStyles(useStyles, {defaultTheme: theme})(ProviderReviewPage)
