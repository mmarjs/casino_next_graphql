import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TitleUi from '@/components/Ui/TitleUi';
import SectionContainer from '@/components/Ui/SectionContainer';
import BlogArticle from '@/components/BlogArticle/BlogArticle';
import PartnerList from '@/components/Partner/PartnerList';
import CasinoOffersList from '@/components/Casino/CasinoOffersList';
import BlogCarousel from '@/components/Blog/BlogCarousel';
import { formatGamesArray } from '@/formatter/Games';
import { formatProvidersObject } from '@/formatter/Providers';
import { formatGamesObject } from '@/formatter/Games';
import SlotCard from '@/components/Slot/SlotCard';
import Typography from '@mui/material/Typography';
import CardUi from '@/components/Ui/CardUi';
import SlotInfoCard from './SlotInfoCard';
import SlotStartPlayCard from './SlotStartPlayCard';
import moment from 'moment-timezone';
import AccordianUi from '@/components/Ui/AccordianUi';
import {FeaturedSlotList} from "@/components/FeaturedSlots/FeaturedSlotList";

export default function SlotDetailPageContainer({article, provider, game}) {

    const faqsList = [{
        id:"1",
        title:"💰 What is the Volatility of a Slot Machine ?",
        summary:"The volatility of a slot machine refers to how frequently you win and lose money at the game, based on your average number of bets over time. While each spin of the reels in a slot machine has its own chance of winning or losing, over the long term you’ll either win more than you lose or vice versa. A low volatility slot machine will win less often than it loses, while a high volatility slot machine will do the opposite; lose more often than it wins over the long term."
    },{
        id:"2",
        title:"⭐️ What is the Return to Player (RTP) in a Slot Machine ?",
        summary:"What’s the difference between RTP and payback percentage? While the terms are sometimes used interchangeably, they’re actually different ways of calculating the same thing. In the gaming industry, Return to Player (RTP) refers to how much a slot machine will pay back on average to players in comparison to how much they wager while playing. For example, if you spent $1 and played 100 rounds with an RTP of 95%, you would expect to win $95 after 100 rounds of play."
    },{
        id:"5",
        title:"📱 Is It Possible To Play The Slot Machine On My Phone ?",
        summary:"Yes this is possible, most of the slot machine providers are optimized to play on phones and any other devices."
    }]

    const [providerData, setProviderData] = useState(null);
    const [gameData, setGameData] = useState(null);
    const [providerGamesList, setProviderGamesList] = useState([])

    useEffect(()=>{
        console.log("game",game)
        setGameData(formatGamesObject(game))
    },[game])

    useEffect(()=>{
        console.log("gameData",gameData)
    },[gameData])

    useEffect(()=>{
        setProviderData(formatProvidersObject(provider))
    },[provider])

    useEffect(()=>{
        if(providerData){
            //console.log("providerData.games",providerData.games.data)
            setProviderGamesList(formatGamesArray(providerData.games.data))
        }
    },[providerData])
    
    return (
        <>
       <SectionContainer enableCardGutter sectionProps={{mt:0, justifyContent:"flex-start"}}>
           <Grid item xs={12} sm={12} md={8} lg={9}>
                {gameData && providerData && 
                <SlotStartPlayCard 
                    title={gameData.name} 
                    logoProps={gameData.banner}
                    providerName={providerData.name}
                    playUrl={gameData.play_url}
                />}


                <CardUi disablePadding>

                
                    <TitleUi 
                        title={`Discover more slot machines from  ${providerData?providerData.name:null}`}
                        titleProps={{component:"h3", variant:"h3",textAlign:"left"}}
                        alignItems="flex-start"
                    />
                    <Grid mt={2} container>
                        <Grid ml={0.5} item xs={12}>
                            <Grid container>
                                {providerGamesList.length > 0 ? providerGamesList.map((item,index)=>{
                                    return index < 4 ? <Grid key={`slot-list-item-${index}`} item xs={6} sm={6} md={3}>
                                        <SlotCard 
                                            logoProps={{...item.logo}}
                                            provider={providerData}
                                            title={item.name}
                                            slug={item.slug}
                                        />
                                    </Grid> :<></>
                                }):<Grid item xs={12}>
                                    <Typography textAlign="center">No slots available</Typography>
                                </Grid>}
                            </Grid>
                        </Grid>
                    </Grid>
               </CardUi>
               
               {gameData && <BlogArticle 
                    contentBody={gameData.content_body} 
                    title={gameData.name}
                />}

                <Grid item xs={12} md={12}>
                    <Box flexDirection="column" display="flex">
                        <AccordianUi items={faqsList} />
                    </Box>  
                </Grid>
           </Grid>

           
           <Grid item xs={12} sm={12} md={4} lg={3}>
                {gameData && providerData &&
                <SlotInfoCard 
                    title={gameData.name}
                    items={[{
                        label:"Volatility",
                        value: gameData.volatility
                    },{
                        label:"Max Multi",
                        value: gameData.max_multi
                    },{
                        label:"RTP",
                        value: gameData.rtp
                    },{
                        label:"Creation Date",
                        value: moment(gameData.creation_date).format("MMM DD YYYY")
                    },{
                        label:"Provider",
                        value: providerData.name
                    }]}
                />}
                <FeaturedSlotList slots={gameData?.featured_slots|| []}/>
                {/*<PartnerList />*/}
                {/*<CasinoOffersList />*/}
           </Grid>
       </SectionContainer>

       

        <SectionContainer>
            <Grid item xs={12}>
                <TitleUi 
                    title="Latest Articles"
                    titleProps={{component:"h3", variant:"h3",textAlign:"left"}}
                    summary="Check out the latest articles from HyCasino below. You can find different topics such as slots, poker, blackjack, crypto and NFT. Everything about the casino is at your fingertips. All you have to do is read our posts."
                    summaryProps={{component:"p", variant:"p", textAlign:"left"}}
                    alignItems="flex-start"
                />
            </Grid>
        </SectionContainer>

        <SectionContainer enableCardGutter>
            <BlogCarousel />
        </SectionContainer>

        </>
    );
}
