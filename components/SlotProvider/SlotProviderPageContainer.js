import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import SlotCard from '@/components/Slot/SlotCard';
import TitleUi from '@/components/Ui/TitleUi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SectionContainer from '@/components/Ui/SectionContainer';
import ButtonUi from '@/components/Ui/ButtonUi';
import SlotProvidersCarousel from './SlotProvidersCarousel';
import Image from 'next/image';
import { formatProvidersArray, formatProvidersObject } from '@/formatter/Providers';
import { formatGamesArray } from '@/formatter/Games';
import Typography from '@mui/material/Typography';
import {GET_GAMES} from '@/graphql/Games';
import apollo from '@/apollo';
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

const useStyles = makeStyles((theme) => ({
    providerSectionClass:{
        background:"url(/providers/header.png) 0% 0% no-repeat",
        backgroundSize: "100%",
        height:300
    },
    slotItem:{
        width:"20%",
        [theme.breakpoints.down('md')]: {
            width:"33.33%",
        },
        [theme.breakpoints.down('sm')]: {
            width:"100%",
        }
    }
}));
export default function SlotProviderPageContainer({provider, games, providers, gamesPagination}) {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [providerData, setProviderData] = useState(null);
    const [providersList, setProvidersList] = useState([]);
    const [slotsList, setSlotsList] = useState([])
    const [search, setSearch] = useState(null);
    const [providerGamesList, setProviderGamesList] = useState([])
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(()=>{
        setProvidersList(formatProvidersArray(providers))
    },[providers])

    useEffect(()=>{
        setProviderData(formatProvidersObject(provider))
    },[provider])

    useEffect(()=>{
        if(providerData){
            //console.log("providerData.games",providerData.games.data)
            setProviderGamesList(formatGamesArray(providerData.games.data))
        }
    },[providerData])

    useEffect(()=>{
        if(providersList){
            console.log("providersList",providersList)
        }
    },[providersList])

    useEffect(()=>{
        setSlotsList(formatGamesArray(games))
    },[games])

    useEffect(() => {
        setPageCount(parseInt(gamesPagination.pageCount))
    }, [gamesPagination])

    const handleSearch = (q) => {
        setSearch(q)
    }



    const loadMoreData = async (jumpToPage) => {

        setLoadingMore(true);

        let filters = {};

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

    return (
        <>
        <SectionContainer sectionProps={{mb:0,mt:0}}>
            <Grid item xs={12}>
                <Box position="relative" display="flex" justifyContent="center" flexDirection="column" width="100%">
                    <Image src="/providers/header.png" width={4056} height={582}/>
                    <Box pl={6} position="absolute" display="flex">
                        <TitleUi 
                            title={`${providerData?providerData.name:null}`}
                            titleProps={{component:"h1", variant:"h1", fontSize:30, textAlign:"left"}}
                            alignItems="flex-start"
                        />
                    </Box>
                </Box>
            </Grid>
        </SectionContainer>
        <SectionContainer>
            <Grid item xs={12}>
                <TitleUi 
                    title={`Discover the provider ${providerData?providerData.name:null}`}
                    titleProps={{component:"h3", variant:"h3",textAlign:"left"}}
                    summary={`The HyCasino team presents its favorite ${providerData?providerData.name:null} slots. Check out the HyCasino team's ranking of favorite Pragmatic Play slots. Start playing for free by choosing the slot machine of your choice below.`}
                    summaryProps={{component:"p", variant:"p", textAlign:"left"}}
                    alignItems="flex-start"
                />
            </Grid>
            <Grid mt={3} item xs={12} sm={12} md={6}>
                <Box display="flex">
                    {providerData &&
                    <ButtonUi 
                        title={`Read our ${providerData?providerData.name:null} review`}
                        color="primary"
                        variant="contained"
                        component="a"
                        href={`/slots/provider/${providerData.slug}/review`}
                        as={`/slots/provider/${providerData.slug}/review`}
                    />}
                </Box>
            </Grid>
        </SectionContainer>

        <SectionContainer enableCardGutter>
            <Grid item xs={12}>
                <Grid container>
                    {providerGamesList.length > 0 ? providerGamesList.map((item,index)=>{
                        return <Grid key={`slot-list-item-${index}`} item md={2} xs={6} className={classes.slotItem}>
                            <SlotCard 
                                logoProps={{...item.logo}}
                                provider={providerData}
                                title={item.name}
                                slug={item.slug}
                            />
                        </Grid>
                    }):<Grid item xs={12}>
                        <Typography textAlign="center">No slots available</Typography>
                    </Grid>}
                </Grid>
            </Grid>
        </SectionContainer>

        <SectionContainer>
            <Grid item xs={12}>
                <TitleUi 
                    title="The Best Slots Available Online And For Free"
                    titleProps={{component:"h3", variant:"h3",textAlign:"left"}}
                    summary="HyCasino has put together the best slot machine for you. Hundreds of games are available and can be tried for free. From the most atypical to the most classic, you will find your game. A variety of combinations and bonuses, each more colossal than the last. 😏"
                    summaryProps={{component:"p", variant:"p", textAlign:"left"}}
                    alignItems="flex-start"
                />
            </Grid>
        </SectionContainer>

        <SectionContainer enableCardGutter>
            <Grid item xs={12}>
                <Grid container>
                    {slotsList.length > 0 ? slotsList.map((item,index)=>{
                        return <Grid key={`slot-list-item-${index}`} item md={2} xs={6} className={classes.slotItem}>
                            <SlotCard 
                                logoProps={{...item.logo}}
                                provider={item.providers.length > 0 ? item.providers[0] : null}
                                title={item.name}
                                slug={item.slug}
                            />
                        </Grid>
                    }):<Grid item xs={12}>
                        <Typography textAlign="center">No slots available</Typography>
                    </Grid>}
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

        <SectionContainer>
            <Grid item xs={12}>
                <TitleUi 
                    title={`Discover the provider ${providerData?providerData.name:null}`}
                    titleProps={{component:"h3", variant:"h3",textAlign:"left"}}
                    summary={`The HyCasino team presents its favorite ${providerData?providerData.name:null} slots. Check out the HyCasino team's ranking of favorite Pragmatic Play slots. Start playing for free by choosing the slot machine of your choice below.`}
                    summaryProps={{component:"p", variant:"p", textAlign:"left"}}
                    alignItems="flex-start"
                />
            </Grid>
        </SectionContainer>

        {providersList.length > 0 &&
        <SectionContainer enableCardGutter>
            <SlotProvidersCarousel items={providersList} />
        </SectionContainer>}

        </>
    );
}
