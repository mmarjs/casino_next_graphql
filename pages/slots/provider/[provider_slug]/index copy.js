import React from 'react';
import MainLayout from "@/components/Layout/MainLayout";
import PageContainer from '@/components/SlotProvider/SlotProviderPageContainer';
import { withStyles } from '@mui/styles';
import theme from '@/src/theme';
import apollo from '@/apollo';
import { gql } from "@apollo/client";
import { GET_PROVIDERS } from '@/graphql/Providers';
import { formatProvidersObject } from '@/formatter/Providers';
import { formatSeoObject } from '@/formatter/helpers';

const useStyles = theme => ({
  containerClass:{
    padding: 0,
    paddingRight:0
  }
});

export async function getServerSideProps({ query, resolvedUrl }) {

  //fetch providers
  const providersList  = await apollo.query({
    query:GET_PROVIDERS,
    fetchPolicy: 'no-cache',
  })
  const providers = providersList.data.providers.data;

    //fetch provider
    const providerData  = await apollo.query({
      query:gql`query getProvider($filters: ProviderFiltersInput) {
        providers(filters:$filters) {
          data {
            id
            attributes {
              name
              summary
              slug
              web_url
              total_free_slots
              meta_title
              meta_description
              meta_image {
                data {
                  attributes {
                    url
                    height
                    width
                  }
                }
              }
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

  //fetch games
  const gamesList  = await apollo.query({
    query:gql`query fetchGames{
      games {
        data {
          id
          attributes {
            name
            summary
            slug
            volatility
            rtp
            max_multi
            creation_date
            logo {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
            providers {
              data {
                id
                attributes {
                  name
                  slug
                  total_free_slots
                }
              }
            }
          }
        }
      }
    }`,
    fetchPolicy: 'no-cache',
  })
  const games = gamesList.data.games.data;  
  
  return {
    props: {
      provider:provider,
      providers: providers,
      games:games,
      seo:formatSeoObject(formatProvidersObject(provider),`slots/provider/${query.provider_slug}`)
    }
  }
};


class FreeSlotProvidersPage extends React.Component {

  render() {
  
    const { classes, provider, games, providers} = this.props;

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
                title:this.props.provider.attributes.name,
                active:true
              }
          ]}
        >          
          {/* pass initial categories received from getServerSideProps */}
          <PageContainer 
            provider={provider} 
            games={games} 
            providers={providers}
          />

        </MainLayout>
    );
  }
}

export default withStyles(useStyles, {defaultTheme: theme})(FreeSlotProvidersPage)
