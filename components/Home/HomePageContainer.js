import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import CasinoHome from "@/components/Casino/CasinoHome";
import CollageContainer from "@/components/Collage/CollageContainer";
import HomeHeader from "./HomeHeader";
import HomeAbout from "./HomeAbout";
import HomeInfo from "./HomeInfo";
import HomeFaqs from "./HomeFaqs";
import TitleUi from "@/components/Ui/TitleUi";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SectionContainer from "@/components/Ui/SectionContainer";
import CasinoBonusCard from "@/components/Casino/CasinoBonusCard";
import { formatCasinosArray } from "@/formatter/Casinos";
import HomeCTA from "@/components/Home/HomeCTA";
import { motion } from "framer-motion";
import FreeSlotsContainer from "@/components/Slot/FreeSlotsContainer";
import CollageImage from "@/public/collage/hycasino-collage.jpeg";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    backgroundImage: `url("/home/homes.jpeg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 759px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("lg")]: {
      backgroundImage: `unset`,
    },
  },
}));
export default function HomeContainer({
  casinos,
  casinosPagination,
  providers,
  games,
  gamesPagination,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [casinosList, setCasinosList] = useState([]);

  useEffect(() => {
    setCasinosList(formatCasinosArray(casinos));
  }, [casinos]);

  const collage = [
    {
      id: "1",
      url: CollageImage,
      width: 645,
      height: 432,
    },
    {
      id: "2",
      url: CollageImage,
      width: 314,
      height: 209,
    },
    {
      id: "3",
      url: CollageImage,
      width: 314,
      height: 210,
    },
    {
      id: "4",
      url: CollageImage,
      width: 314,
      height: 210,
    },
    {
      id: "5",
      url: CollageImage,
      width: 314,
      height: 210,
    },
  ];

  return (
    <>
      <SectionContainer>
        <motion.div exit={{ y: 500 }} initial={{ y: 500 }} animate={{ y: 0 }}>
          <HomeHeader />
        </motion.div>
      </SectionContainer>

      <SectionContainer enableCardGutter>
        <Grid item xs={12}>
          <motion.div
            exit={{ y: 1000 }}
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
          >
            <Grid container spacing={8}>
              {casinosList.map((item, index) => {
                return index < 3 ? (
                  <Grid overflow="hidden" key={item.id} item xs={12} md={4}>
                    <CasinoBonusCard
                      logoProps={{ ...item.flag }}
                      href={item.web_url}
                      bonuses={item.bonuses}
                      background={item.background_bg}
                      promoImage={item.promo_image}
                    />
                  </Grid>
                ) : (
                  <></>
                );
              })}
            </Grid>
          </motion.div>
        </Grid>
      </SectionContainer>

      <SectionContainer enableCardGutter disableCardGutterTop>
        <Grid item xs={12}>
          <TitleUi
            title="Our Best Casinos Selection"
            summary="The best online casino bonuses, selected by our team"
          />
        </Grid>
      </SectionContainer>

      <CasinoHome casinos={casinos} casinosPagination={casinosPagination} />

      <SectionContainer>
        <HomeCTA />
      </SectionContainer>

      <FreeSlotsContainer
        providers={providers}
        games={games}
        gamesPagination={gamesPagination}
      />

      <SectionContainer enableCardGutter disableCardGutterTop>
        <Grid mb={6} item xs={12}>
          <TitleUi
            title="Recent Blog Posts"
            summary="The best articles on all the latest casino news and tricks casino with crypto, NFT, and more"
          />
        </Grid>
        <CollageContainer data={collage} />
      </SectionContainer>
      <Box className={classes.aboutContainer}>
        <SectionContainer enableCardGutter>
          <Grid mb={6} item xs={12}>
            <HomeAbout />
          </Grid>
        </SectionContainer>
      </Box>
      <SectionContainer enableCardGutter>
        <Grid mb={6} item xs={12}>
          <HomeInfo />
        </Grid>
      </SectionContainer>
      <SectionContainer>
        <Grid mb={6} item xs={12}>
          <TitleUi
            title="FAQs"
            summary="Got questions about online casinos? We invite you to explore the answers to some of our most common questions."
          />
        </Grid>
        <HomeFaqs />
      </SectionContainer>
    </>
  );
}
