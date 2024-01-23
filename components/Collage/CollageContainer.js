import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import CollageCard from "./CollageCard";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "@/graphql/Articles";
import { formatArticlesArray } from "@/formatter/Articles";
import BlogCard from "@/components/Blog/BlogCard";
import FeaturedBlogCard from "@/components/Blog/FeaturedBlogCard";
import Box from "@mui/material/Box";
import ButtonUi from "@/components/Ui/ButtonUi";

export default function CollageContainer(props) {
  const [articlesList, setArticlesList] = useState([]);

  //GET_ARTICLES GRAPHQL
  const { loading, error, data } = useQuery(GET_ARTICLES, {
    fetchPolicy: "no-cache",
    variables: {
      pagination: {
        page: 1,
        pageSize: 5,
      },
    },
  });

  if (!loading && !error) {
    if (articlesList.length === 0) {
      let articles = formatArticlesArray(data.articles.data);
      setArticlesList(articles);
    }
  }

  return (
    <Grid mb={6} item xs={12}>
      <Grid container>
        {articlesList[0] && articlesList[0].featured_image && (
          <Grid item xs={12} md={6}>
            <CollageCard
              title={articlesList[0].title}
              url={articlesList[0].featured_image.url}
              width={articlesList[0].featured_image.width}
              height={articlesList[0].featured_image.height}
              slug={articlesList[0].slug}
            />
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Grid container>
            {articlesList[1] && articlesList[1].featured_image && (
              <Grid item xs={6} md={5.9}>
                <CollageCard
                  title={articlesList[1].title}
                  url={articlesList[1].featured_image.url}
                  width={articlesList[1].featured_image.width}
                  height={articlesList[1].featured_image.height}
                  slug={articlesList[1].slug}
                />
              </Grid>
            )}
            {articlesList[2] && articlesList[2].featured_image && (
              <Grid item xs={6} md={5.9}>
                <CollageCard
                  title={articlesList[2].title}
                  url={articlesList[2].featured_image.url}
                  width={articlesList[2].featured_image.width}
                  height={articlesList[2].featured_image.height}
                  slug={articlesList[2].slug}
                />
              </Grid>
            )}
            {articlesList[3] && articlesList[3].featured_image && (
              <Grid item xs={6} md={5.9}>
                <CollageCard
                  title={articlesList[3].title}
                  url={articlesList[3].featured_image.url}
                  width={articlesList[3].featured_image.width}
                  height={articlesList[3].featured_image.height}
                  slug={articlesList[3].slug}
                />
              </Grid>
            )}
            {articlesList[4] && articlesList[4].featured_image && (
              <Grid item xs={6} md={5.9}>
                <CollageCard
                  title={articlesList[4].title}
                  url={articlesList[4].featured_image.url}
                  width={articlesList[4].featured_image.width}
                  height={articlesList[4].featured_image.height}
                  slug={articlesList[4].slug}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid mt={4} item xs={12}>
        <Box display="flex" justifyContent="center">
          <Box display="flex" flexDirection="column" width={220}>
            <ButtonUi
              component="a"
              href="/blog"
              title="See More"
              color="primary"
              variant="contained"
              size="medium"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
