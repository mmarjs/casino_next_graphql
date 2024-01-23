import React from 'react';
import MainLayout from "@/components/Layout/MainLayout";
import FreeSlotsPageContainer from '@/components/Slot/FreeSlotsPageContainer';
import theme from '@/src/theme';
import apollo from '@/apollo';
import { gql } from "@apollo/client";
import { GET_GAMES } from '@/graphql/Games';

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export async function getStaticProps({ query, resolvedUrl }) {

  //fetch providers
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
                  height
                  width
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

  //fetch games
  const gamesRes  = await apollo.query({
    query:GET_GAMES,
    fetchPolicy: 'no-cache',
    variables:{
      pagination:{
        page:1,
        pageSize:publicRuntimeConfig.games_page_size
      }
    }
  })
  const games = gamesRes.data.games.data;

  return {
    props: {
      providers:providers,
      games:games,
      gamesPagination:gamesRes.data.games.meta.pagination,
      seo:{
        title: "Free Slots | Choosing The Best Online Casinos ",
        description: "HyCasino brings together all the best online casino bonuses and promises you casino expertise and news about gambling, NFTs, crypto",
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/slots`,
        open_graph: {
          canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/slots`,
          title: "Free Slots | Choosing The Best Online Casinos ",
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


class FreeSlotPage extends React.Component {

  render() {
  
    const { providers, games, gamesPagination} = this.props;

    return (
        <MainLayout 
          seo={this.props.seo} 
        >          
          {/* pass initial categories received from getServerSideProps */}
          <FreeSlotsPageContainer 
            providers={providers}
            games={games}
            gamesPagination={gamesPagination}
          />

        </MainLayout>
    );
  }
}

export default FreeSlotPage
