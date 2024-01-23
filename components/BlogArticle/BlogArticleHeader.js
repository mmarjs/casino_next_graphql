import React from "react";
import { Grid } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { makeStyles } from "@mui/styles";
import TitleUi from "@/components/Ui/TitleUi";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: "#49787B",
    // padding: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: theme.spacing(1),
    minHeight: "150px",
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // paddingTop: theme.spacing(5),
    // paddingBottom: theme.spacing(5),
    overflow: "hidden",
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(to bottom, transparent, #000)",
      zIndex: 5,
    },
  },
  dateContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    zIndex: 10,
    color: "gray",
  },
  date: {
    marginLeft: "10px",
  },
  labels: {
    zIndex: 10,
    display: "flex",
  },
  label: {
    fontSize: "12px",
    margin: 0,
    background: "#C3073F",
    // display: "inline-block",
    padding: "3px 10px",
    borderRadius: "500px",
  },
}));
export default function BlogArticleHeader({ title, headerImage, date, categories }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const parsedDate = new Date(date);
  const publishDate = `${parsedDate.toLocaleString("en-US", { day: "2-digit", month: "long", year: "numeric" })}`;

  return (
    <Grid
      className={classes.content}
      item
      xs={12}
      style={{
        background: `url(${headerImage ? headerImage.url : null})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.labels}>
        {categories.length > 0 &&
          categories.map((categorie, idx) => (
            <p key={idx} className={classes.label} style={{ marginLeft: `${idx !== 0 ? "10px" : "0px"}` }}>
              {categorie.name}
            </p>
          ))}
      </div>
      <TitleUi
        title={title}
        titleProps={{
          component: "h1",
          variant: isMobile ? "h3" : "h1",
          textAlign: "left",
          fontSize: 32,
          fontWeight: 600,
          zIndex: 10,
        }}
        alignItems="flex-start"
      />
      <div className={classes.dateContainer}>
        <QueryBuilderIcon style={{ fontSize: "15px" }} />
        <date className={classes.date}>{publishDate}</date>
      </div>
    </Grid>
  );
}
