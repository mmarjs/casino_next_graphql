import { renderToStaticMarkup } from "react-dom/server";
import apollo from '@/apollo';
import { GET_GAMES } from '@/graphql/Games';

const SlotsSitemapIndex = () => null;

const SlotsSitemap = ({slotFields}) => {

  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {slotFields?.map((slotField, index) => {
        return (
          <url key={index}>
            <loc>{slotField?.loc}</loc>
            <lastmod>{slotField?.creation_date}</lastmod>
          </url>
        );
      })}
    </urlset>
  );
};

export const getServerSideProps = async ({ res }) => {
  // Fetching All Slots
  const gamesRes  = await apollo.query({
    query:GET_GAMES,
    fetchPolicy: 'no-cache',
    variables:{
      pagination:{
        page:1,
        pageSize: 100000 //arbirtray limit
      }
    }
  })
  const slots = gamesRes.data.games.data;
  console.log("SLOTS", slots)
  // Storing data for sitemap generation
  const slotFields = [];
  
  slots.map(slot => {
    let providerSlug = slot?.attributes?.providers?.data[0]?.attributes?.slug;
    console.log("META TITLE", slot?.attributes.meta_title)
    let slotsSiteMap = {
      loc : `https://hycasino.com/slots/provider/${providerSlug}/${slot?.attributes?.slug}`,
      name: slot?.attributes?.name,
      meta_description: slot?.attributes?.meta_description,
      volatility: slot?.attributes?.volatility,
      rtp: slot?.attributes?.rtp,
      creation_date: slot?.attributes?.creation_date
    }
    slotFields.push(slotsSiteMap)
  });

  res.setHeader("Content-Type", "text/xml");
  res.write(renderToStaticMarkup(<SlotsSitemap slotFields={slotFields} />));
  res.end();

  return {
    props: {},
  };
};




export default SlotsSitemapIndex;
