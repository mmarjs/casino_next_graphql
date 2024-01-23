import { renderToStaticMarkup } from "react-dom/server";
import apollo from '@/apollo';
import { GET_ARTICLES } from '@/graphql/Articles';

const BlogsSitemapIndex = () => null;

const BlogsSitemap = ({blogFields}) => {

  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {blogFields?.map((blogField, index) => {
        return (
          <url key={index}>
            <loc>{blogField?.loc}</loc>
            <lastmod>{blogField?.published_on}</lastmod>
          </url>
        );
      })}
    </urlset>
  );
};

export const getServerSideProps = async ({ res }) => {
  // Fetching All Blogs
  const blogResults  = await apollo.query({
    query: GET_ARTICLES,
    fetchPolicy: 'no-cache',
    variables:{ 
      pagination:{
        page:1,
        pageSize: 100000 // arbitrary limit
      }
    }
  })
  const articles = blogResults.data.articles.data;
 
  // Storing data for sitemap generation
  const blogFields = [];
  
  articles.map(article => {
   
    let articlesiteMap = {
      loc : `https://hycasino.com/blog/${article?.attributes?.slug}/`,
      published_on: article?.attributes.published_on,
      title: article?.attributes?.slug,
      summary: article?.attributes?.summary
    }
    blogFields.push(articlesiteMap)
  });


  res.setHeader("Content-Type", "text/xml");
  res.write(renderToStaticMarkup(<BlogsSitemap blogFields={blogFields} />));
  res.end();

  return {
    props: {},
  };
};




export default BlogsSitemapIndex;
