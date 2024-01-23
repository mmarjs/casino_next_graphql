import React, { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonUi from "@/components/Ui/ButtonUi";
import SectionContainer from "@/components/Ui/SectionContainer";
import CasinoInfoBar from "@/components/Casino/CasinoInfoBar";
import apollo from "@/apollo";
import { GET_CASINOS } from "@/graphql/Casinos";
import { formatCasinosArray, formatCasinosObject } from "@/formatter/Casinos";
import getConfig from "next/config";

import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Image from "next/image";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { FaStar } from "react-icons/fa";
import { IoCheckmarkCircle, IoChevronForwardOutline } from "react-icons/io5";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "none",
    padding: theme.spacing(0),
    paddingBlock: theme.spacing(0.5),
    marginBottom: theme.spacing(3),
  },
  content: {
    backgroundColor: theme.palette.secondary.darkTeal,
    borderRadius: 15,
    paddingLeft: 5,
  },
  logoBox: {
    borderRadius: 13,
    marginTop: 0,
  },
  spinAndBonusBar: {
    borderRadius: 15,
  },
  sab: {
    padding: theme.spacing(2),
  },
  sabSpin: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.snow,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  sabBonus: {
    backgroundColor: theme.palette.secondary.teal,
    color: theme.palette.primary.snow,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  btn: {
    fontSize: theme.typography.pxToRem(15),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  reviewBtn: {
    fontSize: theme.typography.pxToRem(12),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  separator: {
    backgroundColor: theme.palette.primary.snow,
    borderRadius: 5,
  },
  checkmark: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(0.5),
  },
  reviewLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: theme.palette.primary.main,
    textDecoration: "none",
    marginTop: theme.spacing(0.7),
    marginLeft: theme.spacing(2.7),
  },
  item: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
  separatorHideMobile: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  reviewBtnBox: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function CasinoListSection({
  casinos,
  casinosPagination,
  casinosNumber,
  totalCasinos,
}) {
  const [page, setPage] = useState(2);
  const [pageCount, setPageCount] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [casinosList, setCasinosList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [depBonusLength, setDepBonusLength] = useState("");
  const [noDepBonusLength, setNoDepBonusLength] = useState(0);
  const [cashBackLength, setCashBackLength] = useState(0);
  const [freeSpinsLength, setFreeSpinsLength] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const classes = useStyles();

  const calculateLength = useCallback(() => {
    let depBonus = [],
      noDepBonus = [],
      cashBack = [],
      freeSpins = [];

    return casinosList?.map((casino) => {
      const filteredItems = casino.Tags.filter((tag) => {
        if (tag.casino_tag === "Deposit_Bonus") {
          depBonus = [...depBonus, casino];
          setDepBonusLength(depBonus.length);
        } else if (tag.casino_tag === "Cashback") {
          cashBack = [...cashBack, casino];
          setCashBackLength(cashBack.length);
        } else if (tag.casino_tag === "Free_Spins") {
          freeSpins = [...freeSpins, casino];
          setFreeSpinsLength(freeSpins.length);
        } else if (tag.casino_tag === "No_Deposit_Bonus") {
          noDepBonus = [...noDepBonus, casino];
          setNoDepBonusLength(noDepBonus.length);
        }
      });
    });
  });
  useEffect(() => {
    calculateLength();
  }, [calculateLength]);

  const filterCasinos = (filterTag) => {
    let filteredCasinos = [];
    setFilteredList(filteredCasinos);
    return casinosList?.map((casino) => {
      const filteredItems = casino.Tags.filter((tag) => {
        if (tag.casino_tag === filterTag) {
          filteredCasinos = [...filteredCasinos, casino];
          setFilteredList(filteredCasinos);
        }
      });
    });
  };

  const cardanimate = {
    visible: { scale: 1.02, opacity: 1 },
    hidden: { scale: 1 },
  };

  useEffect(() => {
    setCasinosList(formatCasinosArray(casinos));
    setFilteredList(formatCasinosArray(casinos));
  }, [casinos]);

  useEffect(() => {
    setPageCount(parseInt(casinosPagination.pageCount));
  }, [casinosPagination]);

  const loadMoreArticles = async (jumpToPage) => {
    setLoadingMore(true);
    //GET_CASINOS GRAPHQL
    const res2 = await apollo.query({
      query: GET_CASINOS,
      //fetchPolicy: 'no-cache',
      variables: {
        pagination: {
          page: jumpToPage ? jumpToPage : parseInt(page + 1),
          pageSize: publicRuntimeConfig.casinos_page_size,
        },
      },
    });

    if (res2) {
      setPage(res2.data.casinos.meta.pagination.page);
      setCasinosList([
        ...casinosList,
        ...formatCasinosArray(res2.data.casinos.data),
      ]);
      setFilteredList([
        ...filteredList,
        ...formatCasinosArray(res2.data.casinos.data),
      ]);
    }
    setLoadingMore(false);
  };

  return (
    <SectionContainer enableCardGutter>
      <Grid
        container
        className={clsx(classes.card)}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        maxWidth="100%"
      >
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          pt={3}
          pb={3}
          flex={1}
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Box
            className={clsx(classes.content)}
            flex={1}
            p={2}
            m={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            onClick={() => setFilteredList(formatCasinosArray(casinos))}
            style={{ cursor: "pointer" }}
          >
            <Typography
              pl={1}
              textAlign="center"
              fontWeight={600}
              variant="h4"
              component="h4"
              noWrap
            >
              All ({filteredList.length})
            </Typography>
          </Box>
          <Box
            display="flex"
            ml={2}
            mr={2}
            width={2}
            height={30}
            className={classes.separator}
          />

          <Box
            flex={1}
            p={2}
            m={1}
            className={clsx(classes.content)}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            onClick={() => filterCasinos("Deposit_Bonus")}
            style={{ cursor: "pointer" }}
          >
            <Typography
              pl={1}
              textAlign="center"
              fontWeight={600}
              variant="h4"
              component="h4"
              noWrap
            >
              Deposit Bonus ({depBonusLength ? depBonusLength : 0})
            </Typography>
          </Box>
          <Box
            display="flex"
            ml={2}
            mr={2}
            width={2}
            height={30}
            className={classes.separator}
          />

          <Box
            flex={1}
            p={2}
            m={1}
            className={clsx(classes.content)}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            onClick={() => filterCasinos("No_Deposit_Bonus")}
            style={{ cursor: "pointer" }}
          >
            <Typography
              pl={1}
              textAlign="center"
              fontWeight={600}
              variant="h4"
              component="h4"
              noWrap
            >
              No Deposit Bonus ({noDepBonusLength})
            </Typography>
          </Box>
          <Box
            display="flex"
            ml={2}
            mr={2}
            width={2}
            height={30}
            className={classes.separator}
          />

          <Box
            flex={1}
            p={2}
            m={1}
            className={clsx(classes.content)}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            onClick={() => filterCasinos("Free_Spins")}
            style={{ cursor: "pointer" }}
          >
            <Typography
              pl={1}
              textAlign="center"
              fontWeight={600}
              variant="h4"
              component="h4"
              noWrap
            >
              Free Spins ({freeSpinsLength})
            </Typography>
          </Box>
          <Box
            display="flex"
            ml={2}
            mr={2}
            width={2}
            height={30}
            className={classes.separator}
          />

          <Box
            flex={1}
            p={2}
            m={1}
            className={clsx(classes.content)}
            justifyContent="center"
            display="flex"
            flexDirection="column"
            onClick={() => filterCasinos("Cashback")}
            style={{ cursor: "pointer" }}
          >
            <Typography
              pl={1}
              textAlign="center"
              fontWeight={600}
              variant="h4"
              component="h4"
            >
              Cashback({cashBackLength})
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <div id="casinos">
          <Grid container>
            {filteredList?.map((item) => {
              return (
                <Grid
                  key={`CasinoInfoBar-item-${item?.id}`}
                  item
                  xs={12}
                  sm={6}
                  md={12}
                >
                  <CasinoInfoBar
                    logoProps={{ ...item?.logo }}
                    title={item?.title}
                    //welcomeBonus={getObjectFromArrayByKeyValue(item.bonuses,"type","welcome")}
                    bonuses={item?.bonuses}
                    rating={item?.average_rating}
                    freeSpins={item?.total_free_spins}
                    domain={item?.web_url}
                    features={item?.features}
                    id={item?.id}
                    minWager={item?.min_wager}
                    slug={item?.slug}
                    bonus1={item?.textbonus1}
                    value1={item?.valuebonus1}
                    sum1={item?.sumbonus1}
                    value2={item?.valuebonus2}
                    sum2={item?.sumbonus2}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Grid>
      <Grid mt={4} item xs={12}>
        <Box display="flex" justifyContent="center">
          <Box display="flex" flexDirection="column" width={220}>
            <ButtonUi
              title="See More"
              color="primary"
              variant="contained"
              size="large"
              handleClick={() => loadMoreArticles()}
              loading={loadingMore}
              disabled={loadingMore}
            />
          </Box>
        </Box>
      </Grid>
      {/*{page !== pageCount &&
            <Grid mt={4} item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Box display="flex" flexDirection="column" width={220}>
                        <ButtonUi
                            title="See more"
                            color="primary"
                            variant="contained"
                            size="large"
                            handleClick={() => loadMoreArticles()}
                            loading={loadingMore}
                            disabled={loadingMore}
                        />
                    </Box>
                </Box>
            </Grid>}*/}
    </SectionContainer>
  );
}
