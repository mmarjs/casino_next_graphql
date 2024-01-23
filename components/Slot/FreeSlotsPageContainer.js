import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import SlotCard from './SlotCard';
import TitleUi from '@/components/Ui/TitleUi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SectionContainer from '@/components/Ui/SectionContainer';
import ButtonUi from '@/components/Ui/ButtonUi';
import SlotProvidersCarousel from '@/components/SlotProvider/SlotProvidersCarousel';
import SearchSlots from './SearchSlots';
import { formatGamesArray } from '@/formatter/Games';
import { formatProvidersArray } from '@/formatter/Providers';
import { GET_GAMES } from '@/graphql/Games';
import apollo from '@/apollo';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme) => ({

    slotItem: {
        width: "20%",
        [theme.breakpoints.down('md')]: {
            width: "33.33%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    }
}));
export default function FreeSlotsPageContainer({ providers, games, gamesPagination }) {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [providersList, setProvidersList] = useState([])
    const [slotsList, setSlotsList] = useState([])
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        setProvidersList(formatProvidersArray(providers))
    }, [providers])

    useEffect(() => {
        setSlotsList(formatGamesArray(games))
    }, [games])

    useEffect(() => {
        setPageCount(parseInt(gamesPagination.pageCount))
    }, [gamesPagination])


    useEffect(() => {
        if (search) {
            loadMoreData(1)
        }
    }, [search])

    const handleSearch = (q) => {
        setSearch(q)
    }


    const loadMoreData = async (jumpToPage) => {

        setLoadingMore(true);

        let filters = {};
        if (search) {
            filters.name = {
                contains: search
            };
        }

        //GET_CASINOS GRAPHQL 
        const res2 = await apollo.query({
            query: GET_GAMES,
            fetchPolicy: 'no-cache',
            variables: {
                pagination: {
                    page: jumpToPage ? jumpToPage : parseInt(page + 1),
                    pageSize: publicRuntimeConfig.games_page_size
                },
                filters: filters
            }
        })

        if (res2.data.games.data.length > 0) {
            setPage(res2.data.games.meta.pagination.page)
            if (res2.data.games.meta.pagination.page === 1) {
                setSlotsList([...formatGamesArray(res2.data.games.data)]);
                setPageCount(parseInt(res2.data.games.meta.pagination.pageCount))
            } else {
                setSlotsList([...slotsList, ...formatGamesArray(res2.data.games.data)]);
            }

        } else {
            setPage(0)
            setPageCount(0)
        }
        setLoadingMore(false)
    }

    console.log('slotsList', slotsList[0])

    return (
        <>
            <SectionContainer enableCardGutter>
                <Grid mb={6} item xs={12}>
                    <TitleUi
                        title="Free Slots Machines"
                        summary="Come and try our wide range of free slots and get our expert opinion on games from top providers such as Pragmatic Play and Play'n Go."
                    />
                </Grid>
                <SlotProvidersCarousel items={providersList} />
            </SectionContainer>

            <SectionContainer>
                <Grid item xs={12}>
                    <TitleUi
                        title="The Best Slots Available Online And For Free"
                        titleProps={{ component: "h3", variant: "h3", textAlign: "left" }}
                        summary="HyCasino has put together the best slot machine for you. Hundreds of games are available and can be tried for free. From the most atypical to the most classic, you will find your game. A variety of combinations and bonuses, each more colossal than the last. 😏"
                        summaryProps={{ component: "p", variant: "p", textAlign: "left" }}
                        alignItems="flex-start"
                    />
                </Grid>
                <Grid mt={3} item xs={12} sm={12} md={6}>
                    <Box display="flex">
                        <SearchSlots isMobile={isMobile} handleSearch={(q) => handleSearch(q)} />
                    </Box>
                </Grid>
                {/*<Grid mt={3} item xs={12} sm={12} md={6}>
                    <Box display="flex">
                        <SearchSlots isMobile={isMobile} handleSearch={(q) => handleSearch(q)}/>
                    </Box>
                </Grid>*/}
            </SectionContainer>

            <SectionContainer enableCardGutter>
                <Grid item xs={12}>
                    <Grid container>
                        {slotsList.map((item, index) => {
                            return <Grid key={`slot-list-item-${index}`} item md={2} xs={6} className={classes.slotItem}>
                                <SlotCard
                                    logoProps={{ ...item.logo }}
                                    provider={item.providers.length > 0 ? item.providers[0] : null}
                                    title={item.name}
                                    slug={item.slug}
                                />
                            </Grid>
                        })}
                    </Grid>
                </Grid>
                {page !== pageCount &&
                    <Grid mt={4} item xs={12}>
                        <Box display="flex" justifyContent="center">
                            <Box display="flex" flexDirection="column" width={220}>
                                <ButtonUi
                                    title="See More"
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    handleClick={() => loadMoreData()}
                                    loading={loadingMore}
                                    disabled={loadingMore}
                                />
                            </Box>
                        </Box>
                    </Grid>}
            </SectionContainer>

        </>
    );
}
