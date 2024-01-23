import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import clsx from "clsx";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";
import ButtonUi from "@/components/Ui/ButtonUi";
import { motion } from "framer-motion";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "none",
    marginTop: theme.spacing(2),
    paddingBottom: 0,
  },
  content: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 15,
    justifyContent: "center",
    position: "relative",
    backgroundSize: "contain",
    paddingBottom: 20,
    paddingTop: theme.spacing(2),
  },
  logoBox: {
    backgroundColor: theme.palette.primary.snow,
    position: "absolute",
    top: theme.spacing(-3),
    left: theme.spacing(4),
    borderRadius: 8,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  info: {
    height: 30,
    backgroundColor: theme.palette.primary.snow,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  percentText: {
    textShadow: "2px 3px 4px rgba(0, 0, 0, 0.5)",
  },
  uptoText: {
    textShadow: "2px 3px 4px rgba(0, 0, 0, 0.5)",
  },
  btn: {
    color: theme.palette.secondary.angelic,
    fontSize: theme.typography.pxToRem(14),
  },
  promo: {
    maxWidth: "100%",
  },
}));

export default function CasinoBonusCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const {
    contentClass,
    disablePadding,
    cardClass,
    logoProps,
    bonuses,
    background,
    promoImage,
    href,
  } = props;

  const image = {
    visible: { y: 20 },
    hidden: { y: 0 },
  };

  const cardanimate = {
    visible: { scale: 1.1 },
    hidden: { scale: 1 },
  };

  return (
    <motion.div initial="hidden" whileHover="visible">
      <Box
        className={clsx(classes.card, cardClass && cardClass)}
        display="flex"
        flexDirection="column"
        maxWidth="100%"
      >
        <Box
          className={clsx(classes.content, contentClass && contentClass)}
          display="flex"
          flexDirection="column"
          p={disablePadding ? 0 : 3}
          pl={1}
          pr={1}
          style={{
            background: `url(${background}) 0% 0% repeat, ${theme.palette.secondary.light}`,
            backgroundSize: "cover",
          }}
        >
          <Box className={classes.logoBox} position="absolute" display="flex">
            <motion.div variants={cardanimate}>
              <Box minHeight={45} width={90} pl={2} pr={2} display="flex">
                <Image
                  src={logoProps.url}
                  width={logoProps.width}
                  height={logoProps.height}
                />
              </Box>
            </motion.div>
          </Box>

          <Box
            flex={1}
            pl={1.5}
            position="relative"
            mt={2}
            display="flex"
            flexDirection="column"
            className={classes.spinAndBonusBar}
          >
            {bonuses.map((item, index) => {
              return (
                <Box
                  mb={0}
                  key={`bonus-item-in-${index}`}
                  flex={1}
                  pl={1.35}
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    className={classes.percentText}
                    color="inherit"
                    fontWeight={800}
                    textAlign="left"
                    fontSize={30}
                  >
                    {item.bonusmonth1}
                  </Typography>
                  <Typography
                    className={classes.uptoText}
                    color="inherit"
                    fontWeight={600}
                    textAlign="left"
                    variant="h5"
                  >
                    {item.bonusmonth2}
                  </Typography>
                </Box>
              );
            })}
            <Box mt={1.0} display="flex">
              <a href={href} target="_blank" rel="nofollow noreferrer">
                <ButtonUi
                  title="Claim Bonus"
                  color="white"
                  variant="contained"
                  size="small"
                  className={classes.btn}
                  rounded
                />
              </a>
            </Box>
          </Box>

          {promoImage && (
            <Box
              flex={1.5}
              maxWidth="60%"
              alignItems="flex-end"
              justifyContent="flex-end"
              display="flex"
              position="absolute"
              right={0}
              bottom={-10}
            >
              <motion.div variants={image}>
                <Image
                  draggable={false}
                  src={promoImage.url}
                  width={promoImage.width}
                  height={promoImage.height}
                  className={classes.promo}
                />
              </motion.div>
            </Box>
          )}
        </Box>
        <Box className={classes.info} display="none"></Box>
      </Box>
    </motion.div>
  );
}
