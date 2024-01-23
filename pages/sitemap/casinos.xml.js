import { renderToStaticMarkup } from "react-dom/server";
import apollo from '@/apollo';
import { GET_CASINOS } from '@/graphql/Casinos';
import { GET_ARTICLES } from '@/graphql/Articles';

const SitemapIndex = () => null;

const Sitemap = ({casinoFields}) => {
  /*
   * NOTE: <?xml ?> is optional preamble from the spec,
   *  UTF-8 is the default
   *  version 1.0 is the default
   */
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {casinoFields?.map((casinoField, index) => {
        return (
          <url key={index}>
            <loc>{casinoField?.loc}</loc>
            <lastmod>{casinoField?.lastmod}</lastmod>
          </url>
        );
      })}
    </urlset>
  );
};

export const getServerSideProps = async ({ res }) => {
//   const pages = // TODO: fetch your pages
//   const origin = // TODO: place your origin

  // Fetching All Casinos 
  const casinoRecords  = await apollo.query({
    query: GET_CASINOS,
    fetchPolicy: 'no-cache',
    variables:{ 
      pagination:{
        page: 1,
        pageSize: 300 // arbitrary limit
      }
    }
  });
  const casinos = casinoRecords.data.casinos.data;
 
  // Storing data for sitemap generation
  const casinoFields = [];
  
  casinos.map(casino => {
   
    let casinoSiteMap = {
      loc : `https://hycasino.com/${casino?.attributes?.slug}/review/`,
      lastmod: new Date().toISOString(),
      title: casino?.attributes?.slug,
      meta_title: casino?.attributes?.meta_title,
      meta_description:  casino?.attributes?.meta_description, 
      web_url: casino?.attributes?.web_url,
      owner: casino?.attributes?.owner,
    }
    casinoFields.push(casinoSiteMap)
  });


  res.setHeader("Content-Type", "text/xml");
  res.write(renderToStaticMarkup(<Sitemap casinoFields={casinoFields} />));
  res.end();

  return {
    props: {},
  };
};


const getCasinoSitemap = async () => {
  // Fetching All Casinos 
  const casinoRecords  = await apollo.query({
    query: GET_CASINOS,
    fetchPolicy: 'no-cache',
    variables:{ 
      pagination:{
        page: 1,
        pageSize: 300 // arbitrary limit
      }
    }
  });
  const casinos = casinoRecords.data.casinos.data;
 
  // Storing data for sitemap generation
  const casinoFields = [];
  
  casinos.map(casino => {
   
    let casinoSiteMap = {
      loc : `https://hycasino.com/${casino?.attributes?.slug}/review/`,
      lastmod: new Date().toISOString(),
      title: casino?.attributes?.slug,
      meta_title: casino?.attributes?.meta_title,
      meta_description:  casino?.attributes?.meta_description, 
      web_url: casino?.attributes?.web_url,
      owner: casino?.attributes?.owner,
    }
    casinoFields.push(casinoSiteMap)
  });

  

  return casinoFields;
}

const getBlogSitemap = async () => {
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

    return blogFields;
}

export default SitemapIndex;
