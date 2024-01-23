import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "none",
    borderRadius: 10,
  },
  cardContent: {
    borderRadius: 10,
    border: `1px solid ${theme.palette.border.main}`,
    paddingBottom: theme.spacing(2),
  },
  title: {},
  imgClass: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    maxWidth: "100%",
  },
  chip: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.snow,
  },
  machineText: {
    fontSize: theme.typography.pxToRem(12),
  },
  link: {
    textDecoration: "none",
  },
}));

export default function BlogCard(props) {
  const classes = useStyles();
  const { title, summary, bannerProps, slug } = props;

  const cardanimate = {
    visible: { scale: 1.02, opacity: 1 },
    hidden: { scale: 1 },
  };

  const textanimate = {
    visible: { scale: 1.05, opacity: 1, x: 5 },
    hidden: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div initial="hidden" whileHover="visible">
      <Box display="flex" p={1.5}>
        <motion.div variants={cardanimate}>
          <Box width="100%" className={classes.card} display="flex">
            <Box
              width="100%"
              flexDirection="column"
              className={classes.cardContent}
              display="flex"
            >
              <a href={`/blog/${slug}`}>
                <Box
                  mb={1}
                  flexDirection="column"
                  width="100%"
                  height="100%"
                  flex={1}
                  display="flex"
                >
                  {bannerProps ? (
                    <Image
                      width={bannerProps.width}
                      height={bannerProps.height}
                      src={bannerProps.url}
                      blurDataURL="/slot-machine/placeholder.jpg"
                      className={classes.imgClass}
                      layout="responsive"
                    />
                  ) : (
                    <Image
                      width={750}
                      height={379}
                      src={"/slot-machine/placeholder.jpg"}
                      blurDataURL="/slot-machine/placeholder.jpg"
                      className={classes.imgClass}
                    />
                  )}
                </Box>
              </a>

              <Box
                pl={2}
                pr={2}
                alignItems="flex-start"
                display="flex"
                flexDirection="column"
              >
                <a href={`/blog/${slug}`} className={classes.link}>
                  <Box mt={1} mb={1} flex={1} display="flex">
                    <Typography
                      textAlign="left"
                      className={classes.title}
                      fontWeight={500}
                      variant="h5"
                      component="h5"
                    >
                      {title}
                    </Typography>
                  </Box>
                </a>
                <Box flex={1} display="flex">
                  <Typography
                    textAlign="left"
                    className={classes.summary}
                    fontSize={12}
                    variant="p"
                    component="p"
                  >
                    {summary}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
}
