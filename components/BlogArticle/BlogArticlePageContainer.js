import React from "react";
import Grid from "@mui/material/Grid";
import BlogCarousel from "@/components/Blog/BlogCarousel";
import TitleUi from "@/components/Ui/TitleUi";
import SectionContainer from "@/components/Ui/SectionContainer";
import FeaturedBlogCarousel from "@/components/Blog/FeaturedBlogCarousel";
import BlogArticleHeader from "./BlogArticleHeader";
import BlogArticle from "./BlogArticle";
import PartnerList from "@/components/Partner/PartnerList";
import CasinoOffersList from "@/components/Casino/CasinoOffersList";
import { formatArticlesObject } from "@/formatter/Articles";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { FeaturedSlotList } from "@/components/FeaturedSlots/FeaturedSlotList";

const useStyles = makeStyles((theme) => ({
  sticky: {
    position: "fixed",
    right: 270,
    maxWidth: 300,
  },
}));

export default function BlogArticlePageContainer({ article, providers }) {
  const classes = useStyles();

  const [articleData, setArticleData] = React.useState(null);

  console.log(articleData);

  React.useEffect(() => {
    setArticleData(formatArticlesObject(article));
  }, [article]);

  return (
    <>
      {/*  {articleData &&
       <SectionContainer sectionProps={{mt:-2}}>
           <BlogArticleHeader title={articleData.title} headerImage={articleData.header_image}  />
       </SectionContainer>}*/}

      <SectionContainer enableCardGutter sectionProps={{ mt: -2, justifyContent: "flex-start" }}>
        {articleData && (
          <Grid item xs={12} sm={12} md={8} lg={9}>
            {/* <BlogArticleHeader title={articleData.title} headerImage={articleData.header_image} /> */}
            <BlogArticleHeader
              title={articleData.title}
              headerImage={articleData.featured_image}
              date={articleData.published_on}
              categories={articleData.categories}
            />
            <BlogArticle contentBody={articleData.content_body} title={articleData.title} />
          </Grid>
        )}
        {articleData && (
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <FeaturedSlotList slots={articleData.featured_slots} />
            {/*<PartnerList items={providers}/>*/}
            {/*<CasinoOffersList/>*/}
          </Grid>
        )}
      </SectionContainer>

      <SectionContainer sectionProps={{ mb: 0 }}>
        <Grid item xs={12}>
          <TitleUi
            title="Must-see items"
            titleProps={{ component: "h3", variant: "h3", textAlign: "left" }}
            alignItems="flex-start"
          />
        </Grid>
      </SectionContainer>

      <SectionContainer enableCardGutter sectionProps={{ mb: 0 }}>
        <FeaturedBlogCarousel />
      </SectionContainer>

      <SectionContainer>
        <Grid item xs={12}>
          <TitleUi
            title="Latest Articles"
            titleProps={{ component: "h3", variant: "h3", textAlign: "left" }}
            summary="Check out the latest articles from HyCasino below. You can find different topics such as slots, poker, blackjack, crypto and NFT. Everything about the casino is at your fingertips. All you have to do is read our posts."
            summaryProps={{ component: "p", variant: "p", textAlign: "left" }}
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
