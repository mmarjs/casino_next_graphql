import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import CasinoBonusCard from "@/components/Casino/CasinoBonusCard";
import CasinoHeader from "@/components/Casino/CasinoHeader";
import TitleUi from "@/components/Ui/TitleUi";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SectionContainer from "@/components/Ui/SectionContainer";
import BlogArticle from "@/components/BlogArticle/BlogArticle";
import { formatCasinosArray } from "@/formatter/Casinos";
import CasinoListSection from "./CasinoListSection";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import BlogCarousel from "@/components/Blog/BlogCarousel";

const useStyles = makeStyles((theme) => ({}));
export default function CasinoListContainer({
  article,
  casinos,
  casinosPagination,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [casinosList, setCasinosList] = useState([]);

  useEffect(() => {
    setCasinosList(formatCasinosArray(casinos));
  }, [casinos]);

  return (
    <>
      <SectionContainer>
        <Grid mb={6} item xs={12}>
          <TitleUi
            title="Our Best Casinos Of The Month"
            summary={"The best online casino bonuses, selected by our team"}
          />
        </Grid>
        <CasinoHeader />
      </SectionContainer>

      <SectionContainer>
        <Grid item xs={12}>
          <TitleUi
            title="Discover the Best Casino Bonuses"
            titleProps={{ component: "h3", variant: "h3", textAlign: "left" }}
            summary="Get exclusive bonus offers for your favorite casinos and slot machines"
            summaryProps={{ component: "h4", variant: "h4", textAlign: "left" }}
            alignItems="flex-start"
          />
        </Grid>
      </SectionContainer>

      {/* <Grid item xs={12} sm={6} md={12}>
        <CasinoFilters
          totalCasinos={casinos.length}
          // filterCasinos={filterCasinos}
        />
      </Grid> */}

      <CasinoListSection
        casinos={casinos}
        casinosPagination={casinosPagination}
      />

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
