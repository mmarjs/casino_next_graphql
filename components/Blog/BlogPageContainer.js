import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TitleUi from "@/components/Ui/TitleUi";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SectionContainer from "@/components/Ui/SectionContainer";
import ButtonUi from "@/components/Ui/ButtonUi";
import CategoryCarousel from "@/components/Category/CategoryCarousel";
import BlogSearch from "./BlogSearch";
import FeaturedBlogCard from "./FeaturedBlogCard";
import BlogArticle from "@/components/BlogArticle/BlogArticle";
import { formatArticlesArray } from "@/formatter/Articles";
import { formatCategoriesObject } from "@/formatter/Categories";
import { GET_ARTICLES } from "@/graphql/Articles";
import apollo from "@/apollo";
import getConfig from "next/config";
import { Typography } from "@mui/material";
import BlogArticleHeader from "@/components/BlogArticle/BlogArticleHeader";
import BlogArticleCategoryHeader from "@/components/BlogArticle/BlogArticleCategoryHeader";

const { publicRuntimeConfig } = getConfig();

export default function BlogPageContainer({ article, articles, articlesPagination, categoryData }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [articlesList, setArticlesList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [search, setSearch] = useState(null);
  const [categoryObj, setCategoryObj] = useState(null);
  const router = useRouter();

  const { category } = router.query;

  useEffect(() => {
    setArticlesList(formatArticlesArray(articles));
  }, [articles]);

  useEffect(() => {
    if (categoryData) {
      setCategoryObj(formatCategoriesObject(categoryData));
    }
  }, [categoryData]);

  useEffect(() => {
    setPageCount(parseInt(articlesPagination.pageCount));
  }, [articlesPagination]);

  useEffect(() => {
    loadMoreData(1, search);
  }, [search]);

  const handleSearch = (q) => {
    setSearch(q);
  };

  const loadMoreData = async (jumpToPage) => {
    setLoadingMore(true);
    let filters = {};
    if (search) {
      filters.title = {
        contains: search,
      };
    }
    if (router.query.category) {
      filters.category_ids = {
        slug: {
          eq: router.query.category,
        },
      };
    }
    //GET_ARTICLES GRAPHQL
    const res2 = await apollo.query({
      query: GET_ARTICLES,
      fetchPolicy: "no-cache",
      variables: {
        pagination: {
          page: jumpToPage ? jumpToPage : parseInt(page + 1),
          pageSize: publicRuntimeConfig.blog_page_size,
        },
        filters: filters,
      },
    });
    if (res2.data.articles.data.length > 0) {
      setPage(res2.data.articles.meta.pagination.page);
      if (res2.data.articles.meta.pagination.page === 1) {
        setArticlesList([...formatArticlesArray(res2.data.articles.data)]);
        setPageCount(parseInt(res2.data.articles.meta.pagination.pageCount));
      } else {
        setArticlesList([...articlesList, ...formatArticlesArray(res2.data.articles.data)]);
      }
    } else {
      setPage(0);
      setArticlesList([]);
      setPageCount(0);
    }
    setLoadingMore(false);
  };

  const categoriesComponent = () => (
    <>
      <SectionContainer sectionProps={{ mb: 0 }}>
        <Grid item xs={12}>
          <TitleUi
            title="Categories"
            titleProps={{ component: "h3", variant: "h3", textAlign: "left" }}
            alignItems="flex-start"
          />
        </Grid>
      </SectionContainer>

      <SectionContainer enableCardGutter>
        <CategoryCarousel />
      </SectionContainer>
    </>
  );

  const articleComponent = () => (
    <>
      <SectionContainer enableCardGutter>
        <BlogArticle contentBody={categoryObj ? categoryObj.content_body : "Loading..."} />
      </SectionContainer>
    </>
  );

  return (
    <>
      {!category ? (
        <SectionContainer sectionProps={{ mt: 0, mb: 0 }}>
          <Grid item xs={12}>
            <TitleUi title="Online casino blog" />
          </Grid>
        </SectionContainer>
      ) : (
        <SectionContainer sectionProps={{ mt: 0, mb: 0 }}>
          <BlogArticleCategoryHeader title={categoryObj ? categoryObj.name : "Loading..."} />
        </SectionContainer>
      )}

      {!category && categoriesComponent()}

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
        <Grid mt={3} item xs={12} sm={12} md={6}>
          <Box display="flex">
            <BlogSearch isMobile={isMobile} handleSearch={handleSearch} />
          </Box>
        </Grid>
      </SectionContainer>

      <SectionContainer enableCardGutter>
        <Grid item xs={12}>
          <Grid container>
            {articlesList.length > 0 ? (
              articlesList.map((item, index) => {
                return (
                  <Grid key={`blog-list-item-${index}`} item xs={12} sm={6} md={4}>
                    <FeaturedBlogCard
                      banner={item.featured_image}
                      title={item.title}
                      summary={item.summary}
                      slug={item.slug}
                      categories={item.categories}
                    />
                  </Grid>
                );
              })
            ) : (
              <Grid p={1.5} item xs={12}>
                <Typography>No articles found</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        {page !== pageCount && (
          <Grid mt={4} item xs={12}>
            <Box display="flex" justifyContent="center">
              <Box display="flex" flexDirection="column" width={220}>
                <ButtonUi
                  title="See More"
                  color="primary"
                  variant="contained"
                  size="large"
                  handleClick={() => loadMoreData()}
                  loading={loadingMore}
                  disabled={loadingMore}
                />
              </Box>
            </Box>
          </Grid>
        )}
      </SectionContainer>

      {category && categoriesComponent()}

      {category && article && articleComponent()}
    </>
  );
}
