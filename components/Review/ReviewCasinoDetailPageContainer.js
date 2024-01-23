import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import TitleUi from '@/components/Ui/TitleUi';
import SectionContainer from '@/components/Ui/SectionContainer';
import PartnerList from '@/components/Partner/PartnerList';
import CasinoOffersList from '@/components/Casino/CasinoOffersList';
import CasinoPaymentMethodsCard from '@/components/Casino/CasinoPaymentMethodsCard';
import { formatReviewsObject } from '@/formatter/Reviews';
import ReviewCarousel from './ReviewCarousel';
import ReviewDetailsCard from './ReviewDetailsCard';
import { formatArticlesObject } from '@/formatter/Articles';
import BlogArticle from '@/components/BlogArticle/BlogArticle';
import Box from '@mui/material/Box';
import Image from 'next/image';
import CasinoInfoBar from '@/components/Casino/CasinoInfoBar';
import ReviewRatingsCard from './ReviewRatingsCard';
import CasinoLanguagesCard from '@/components/Casino/CasinoLanguagesCard';
import CasinoSummaryCard from '@/components/Casino/CasinoSummaryCard';
import CasinoPaymentMethodsGridCard from '@/components/Casino/CasinoPaymentMethodsGridCard';
import ReviewCryptoAcceptedCard from './ReviewCryptoAcceptedCard';
import { getObjectFromArrayByKeyValue} from '@/src/helpers';
import {FeaturedSlotList} from "@/components/FeaturedSlots/FeaturedSlotList";
import BlogCarousel from '@/components/Blog/BlogCarousel';

export default function ReviewCasinoDetailPageContainer({review, article, entity}) {

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
                            titleProps={{component:"h3", variant:"h3",textAlign:"left"}}
                            alignItems="flex-start"
                        />:<TitleUi 
                            title={`${reviewData?reviewData.casino.title:null}`}
                            titleProps={{component:"h3", variant:"h3",textAlign:"left"}}
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

               {reviewData &&
                <Grid mb={1.5} container>
                    <Grid item xs={12} sm={6} md={6}>
                        <CasinoLanguagesCard items={reviewData.casino.languages} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <CasinoPaymentMethodsGridCard items={reviewData.casino.payment_methods} />
                    </Grid>
                </Grid>}

                {reviewData &&
               <Grid mb={1.5} container>
                    <ReviewDetailsCard 
                        entityName={entity==="provider"?reviewData.provider.name:reviewData.casino.title}
                        pros={reviewData.pros}
                        cons={reviewData.cons}
                        summary={reviewData.summary}
                    />
               </Grid>} 

                {reviewData && <BlogArticle 
                    contentBody={reviewData.content_body} 
                />}

           </Grid>
           
           {reviewData &&
           <Grid item xs={12} sm={12} md={4} lg={3}>
               
                {getObjectFromArrayByKeyValue(reviewData.casino.payment_methods,"name","Crypto") &&
               <ReviewCryptoAcceptedCard />}

               <CasinoSummaryCard  
                    title={`Information about ${reviewData?reviewData.casino.title:null}`}
                    rating={reviewData.average_rating}
                    minDeposit={reviewData.casino.min_deposit}
                    owner={reviewData.casino.owner}
                    licenses={reviewData.casino.licenses}
                    creationDate={reviewData.casino.creation_date}
               />

              
               
               <ReviewRatingsCard title={`${reviewData?reviewData.casino.title:null} Review`} rating={reviewData.rating} />

               <FeaturedSlotList slots={reviewData?.featured_slots || []}/>
               {/*<PartnerList />*/}

               {/* <CasinoOffersList />*/}
           </Grid>}

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



