import React from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";
import ButtonUi from "@/components/Ui/ButtonUi";
import Rating from "@mui/material/Rating";
import { FaStar } from "react-icons/fa";
import { IoCheckmarkCircle, IoChevronForwardOutline } from "react-icons/io5";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

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
    paddingLeft: 0,
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

export default function CasinoInfoBar(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const classes = useStyles();
  const {
    contentClass,
    cardClass,
    logoProps,
    title,
    bonuses,
    rating,
    features,
    id,
    minWager,
    freeSpins,
    slug,
    bonus1,
    value1,
    value2,
    sum1,
    hideReviewButton,
    sum2,
    domain,
  } = props;

  const cardanimate = {
    visible: { scale: 1.02, opacity: 1 },
    hidden: { scale: 1 },
  };

  return (
    <motion.div initial="hidden" whileHover="visible">
      <Grid
        container
        className={clsx(classes.card, cardClass && cardClass)}
        display="flex"
        flexDirection="column"
        maxWidth="100%"
      >
        <motion.div variants={cardanimate}>
          <Grid
            item
            xs={12}
            className={clsx(classes.content, contentClass && contentClass)}
            display="flex"
            pt={2}
            pb={2}
            flex={1}
            alignItems="center"
            width="120%"
          >
            <Grid container display="flex" alignItems="center">
              <Grid
                className={classes.item}
                item
                xs={12}
                md
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Box
                  pl={2}
                  zIndex={1}
                  justifyContent="center"
                  display="flex"
                  flexDirection="column"
                >
                  <Box
                    height={80}
                    width={140}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {logoProps && (
                      <Image
                        src={logoProps.url}
                        className={classes.logoBox}
                        width={145}
                        height={85}
                      />
                    )}
                  </Box>
                </Box>
                <Box
                  pl={2}
                  pr={2}
                  justifyContent="center"
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    mb={0.5}
                    fontWeight={500}
                    fontSize={"18px"}
                    lineHeight={"24px"}
                    variant="h3"
                    component="h3"
                  >
                    {title}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={rating}
                    readOnly
                    emptyIcon={<FaStar fontSize={16} />}
                    icon={<FaStar fontSize={16} />}
                    size="small"
                    IconContainerComponent={(props) => (
                      <Box width={22} {...props} />
                    )}
                  />
                </Box>
              </Grid>
              <Grid
                className={classes.item}
                item
                xs={12}
                md
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Box
                  flex={1}
                  pl={2}
                  pr={2}
                  justifyContent="center"
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    textAlign="center"
                    fontWeight={500}
                    variant="h5"
                    component="h5"
                    noWrap
                  >
                    {bonus1}
                  </Typography>
                  <Typography
                    textAlign="center"
                    fontWeight={700}
                    variant="h3"
                    component="h3"
                  >
                    {value1}
                  </Typography>
                  <Typography
                    color="text.mute"
                    textAlign="center"
                    fontSize={12}
                    fontWeight={500}
                    variant="h6"
                    component="h6"
                    noWrap={isDesktop}
                  >
                    {sum1}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  ml={1}
                  mr={1}
                  width={4}
                  height={50}
                  className={classes.separator}
                />

                <Box
                  flex={1}
                  pl={2}
                  pr={2}
                  justifyContent="center"
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    textAlign="center"
                    fontWeight={500}
                    variant="h5"
                    component="h5"
                  >
                    Bonus
                  </Typography>
                  <Typography
                    textAlign="center"
                    fontWeight={700}
                    variant="h3"
                    component="h3"
                  >
                    +{value2}%
                  </Typography>
                  <Typography
                    color="text.mute"
                    textAlign="center"
                    fontSize={12}
                    fontWeight={500}
                    variant="h6"
                    component="h6"
                    noWrap={isDesktop}
                  >
                    Up to {sum2}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  ml={1}
                  mr={1}
                  width={4}
                  height={50}
                  className={classes.separator}
                />

                <Box
                  flex={1}
                  pl={2}
                  pr={2}
                  justifyContent="center"
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    textAlign="center"
                    fontWeight={500}
                    variant="h5"
                    component="h5"
                  >
                    Wager
                  </Typography>
                  <Typography
                    textAlign="center"
                    fontWeight={700}
                    variant="h3"
                    component="h3"
                  >
                    x{minWager}
                  </Typography>
                  <Typography
                    color="text.mute"
                    textAlign="center"
                    fontSize={12}
                    fontWeight={500}
                    variant="h6"
                    component="h6"
                  >
                    Minimum
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  ml={1}
                  mr={1}
                  width={4}
                  height={50}
                  className={clsx(
                    classes.separator,
                    classes.separatorHideMobile
                  )}
                />
              </Grid>
              <Grid
                className={classes.item}
                item
                xs={12}
                md
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Box
                  flexShrink="unset"
                  pl={2}
                  pr={2}
                  justifyContent="center"
                  display="flex"
                  flexDirection="column"
                >
                  {features?.length > 0 &&
                    features.map((item, index) => {
                      return (
                        <Box
                          key={`features-box-${index}`}
                          display="flex"
                          alignItems="flex-start"
                        >
                          <Typography
                            pl={1}
                            key={`casino-bar-feature-${id}-${index}`}
                            fontSize={12}
                            lineHeight={1.5}
                            fontWeight={500}
                            variant="h5"
                            component="h5"
                          >
                            <IoCheckmarkCircle className={classes.checkmark} />{" "}
                            {item.title}
                          </Typography>
                        </Box>
                      );
                    })}
                </Box>
              </Grid>
              <Grid
                className={classes.item}
                item
                xs={12}
                md={2}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box pl={0} pr={0} display="flex" flexDirection="column">
                  <a href={domain} target="_blank" rel="nofollow noreferrer">
                    <ButtonUi
                      title="Claim Bonus"
                      color="primary"
                      variant="contained"
                      size="small"
                      rounded
                      fullWidth
                      className={classes.btn}
                    />
                  </a>
                  {
                    <a
                      href={`/casinos/${slug}/review`}
                      className={classes.reviewLink}
                    >
                      <Typography
                        color="primary.snow"
                        pr={1}
                        fontSize={12}
                        lineHeight={1.8}
                        fontWeight={500}
                      >
                        Read our review &gt;&gt;
                      </Typography>
                    </a>
                  }
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Grid>
    </motion.div>
  );
}
