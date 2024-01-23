import React from 'react';
import MainLayout from "@/components/Layout/MainLayout";
import HomePageContainer from '@/components/Home/HomePageContainer';
import {withStyles} from '@mui/styles';
import theme from '@/src/theme';
import apollo from '@/apollo';
import {GET_CASINOS} from '@/graphql/Casinos';
import getConfig from 'next/config'
import {motion} from "framer-motion";
import FreeSlotsPageContainer from "@/components/Slot/FreeSlotsPageContainer";
import {gql} from "@apollo/client";
import {GET_GAMES} from "@/graphql/Games";

const {publicRuntimeConfig} = getConfig()

const useStyles = theme => ({
    containerClass: {
        padding: 0,
        paddingRight: 0
    }
});

export async function getStaticProps({query, resolvedUrl}) {

    //fetch casinos
    const res = await apollo.query({
        query: GET_CASINOS,
        fetchPolicy: 'no-cache',
        variables: {
            pagination: {
                page: 1,
                pageSize: publicRuntimeConfig.casinos_page_size
            }
        }
    })
    const casinos = res.data.casinos.data;

    //fetch providers
    const res2 = await apollo.query({
        query: gql`query fetchProviders{
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
    const gamesRes = await apollo.query({
        query: GET_GAMES,
        fetchPolicy: 'no-cache',
        variables: {
            pagination: {
                page: 1,
                pageSize: publicRuntimeConfig.games_page_size
            },
        }
    })
    const games = gamesRes.data.games.data;

    return {
        revalidate: 2,
        props: {
            providers: providers,
            games: games,
            gamesPagination: gamesRes.data.games.meta.pagination,
            casinos: casinos,
            casinosPagination: res.data.casinos.meta.pagination,
            seo: {
                title: "HyCasino | Choosing The Best Online Casinos",
                description: "HyCasino brings together all the best online casino bonuses and promises you casino expertise and news about gambling, NFTs, crypto",
                canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
                open_graph: {
                    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
                    title: "HyCasino | Choosing The Best Online Casinos",
                    description: "HyCasino brings together all the best online casino bonuses and promises you casino expertise and news about gambling, NFTs, crypto",
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_DEFAULT_META_IMAGE}`,
                            width: 1000,
                            height: 1000,
                            alt: "HyCasino | Choosing The Best Online Casinos",
                        },
                    ],
                    site_name: process.env.NEXT_PUBLIC_SITE_NAME,
                }
            }
        }
    }
}

class HomePage extends React.Component {


    render() {

        const {casinos, casinosPagination, providers, games, gamesPagination} = this.props;

        return (
            <MainLayout
                seo={this.props.seo}
            >

                {/* pass initial categories received from getServerSideProps */}
                <HomePageContainer
                    casinos={casinos}
                    casinosPagination={casinosPagination}
                    providers={providers}
                    games={games}
                    gamesPagination={gamesPagination}
                />

            </MainLayout>
        );
    }
}

export default withStyles(useStyles, {defaultTheme: theme})(HomePage)
