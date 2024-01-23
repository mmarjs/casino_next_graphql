import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import TitleUi from '@/components/Ui/TitleUi';
import SectionContainer from '@/components/Ui/SectionContainer';
import PartnerList from '@/components/Partner/PartnerList';
import CasinoOffersList from '@/components/Casino/CasinoOffersList';
import BlogCarousel from '@/components/Blog/BlogCarousel';
import { formatReviewsObject } from '@/formatter/Reviews';
import ReviewCarousel from './ReviewCarousel';
import ReviewDetailsCard from './ReviewDetailsCard';
import { formatArticlesObject } from '@/formatter/Articles';
import BlogArticle from '@/components/BlogArticle/BlogArticle';
import Box from '@mui/material/Box';
import Image from 'next/image';
import {FeaturedSlotList} from "@/components/FeaturedSlots/FeaturedSlotList";

export default function ReviewDetailPageContainer({review, article, entity}) {

    const [reviewData, setReviewData] = useState(null);
    const [articleData, setArticleData] = useState(null);


    useEffect(()=>{
        setReviewData(formatReviewsObject(review))
    },[review])

    useEffect(()=>{
        setArticleData(formatArticlesObject(article))
    },[article])

    useEffect(()=>{
        console.log("reviewData",reviewData)
    },[reviewData])


    return (
        <>
        <SectionContainer sectionProps={{mb:3,mt:0}}>
            <Grid item xs={12}>
                <Box position="relative" display="flex" justifyContent="center" flexDirection="column" width="100%">
                    <Image src="/providers/header.png" width={4056} height={582}/>
                    <Box pl={6} position="absolute" display="flex">
                        {entity==="provider"?
                        <TitleUi 
                            title={`${reviewData?reviewData.provider.name:null}`}
                            titleProps={{component:"h1", variant:"h1", fontSize:30,textAlign:"left"}}
                            alignItems="flex-start"
                        />:<TitleUi 
                            title={`${reviewData?reviewData.casino.title:null}`}
                            titleProps={{component:"h1", variant:"h1", fontSize:30,textAlign:"left"}}
                            alignItems="flex-start"
                        />}
                    </Box>
                </Box>
            </Grid>
        </SectionContainer>
        <SectionContainer enableCardGutter sectionProps={{mt:0, justifyContent:"flex-start"}}>
           <Grid item xs={12} sm={12} md={8} lg={9}>
               
               {reviewData && reviewData.photos && reviewData.photos.length > 0 &&
               <Grid container mb={1.5}>
                <ReviewCarousel items={reviewData.photos} />
               </Grid>}

               
               {reviewData && <BlogArticle 
                  contentBody={reviewData.content_body} 
                  title={`${reviewData?reviewData.provider.name:null} Review`}
                />}
           </Grid>
           <Grid item xs={12} sm={12} md={4} lg={3}>
               <FeaturedSlotList slots={reviewData?.featured_slots || []}/>
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
