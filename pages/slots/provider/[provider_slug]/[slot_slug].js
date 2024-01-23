import React from 'react';
import MainLayout from "@/components/Layout/MainLayout";
import PageContainer from '@/components/SlotDetail/SlotDetailPageContainer';
import { withStyles } from '@mui/styles';
import theme from '@/src/theme';
import apollo from '@/apollo';
import { gql } from "@apollo/client";
import CircularProgressUi from '@/components/Ui/CircularProgressUi';
import { GET_GAMES } from '@/graphql/Games';
import { GET_ARTICLE } from '@/graphql/Articles';
import { formatGamesObject } from '@/formatter/Games';
import { formatSeoObject } from '@/formatter/helpers';

const useStyles = theme => ({
  containerClass:{
    padding: 0,
    paddingRight:0
  }
});

export async function getServerSideProps({ query, resolvedUrl }) {

      //fetch article
      const gameData  = await apollo.query({
        query:GET_GAMES,
        fetchPolicy: 'no-cache',
        variables:{ filters: {
          slug:{
            eq:query.slot_slug
          }
        }}
      })
      const game = gameData.data.games.data.length > 0 ? gameData.data.games.data[0] : null;

    //fetch article
    const providerData  = await apollo.query({
      query:gql`query getBlog($filters: ProviderFiltersInput) {
        providers(filters:$filters) {
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
                    width
                    height
                  }
                }
              }
              games {
                data{
                  id
                  attributes {
                    name
                    slug
                    logo {
                      data {
                        attributes {
                          url
                          width
                          height
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
      fetchPolicy: 'no-cache',
      variables:{ filters: {
        slug:{
          eq:query.provider_slug
        }
      }}
    })
    const provider = providerData.data.providers.data.length > 0 ? providerData.data.providers.data[0] : null;

  //fetch article
  const res  = await apollo.query({
    query:GET_ARTICLE,
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
      model:{...article.attributes, id:article.id},
      provider:provider,
      game:game,
      seo:formatSeoObject(formatGamesObject(game),`slots/provider/${query.provider_slug}/${query.slot_slug}`)
    }
  }
};


class SlotPage extends React.Component {

  render() {
  
    const { model, provider, game } = this.props;

    return (
        <MainLayout 
          seo={this.props.seo} 
          breadcrumbs={[
            {
              title:"Free Slots",
              href:"/slots",
              as:"/slots"
            },
            {
              title:provider?provider.attributes.name:"Loading...",
              href:provider?`/slots/provider/${provider.attributes.slug}`:"/",
              as:provider?`/slots/provider/${provider.attributes.slug}`:"/",
            },
            {
              title:game?game.attributes.name:"Loading...",
              active:true
            }
          ]}
        >          
          {/* pass initial categories received from getServerSideProps */}
          {model && provider ? <PageContainer 
            article={model} 
            provider={provider}
            game={game}
          /> 
          : <CircularProgressUi />}

        </MainLayout>
    );
  }
}

export default withStyles(useStyles, {defaultTheme: theme})(SlotPage)
