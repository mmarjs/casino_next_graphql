import { renderToStaticMarkup } from "react-dom/server";
import apollo from '@/apollo';
import { gql } from "@apollo/client";


const ProvidersSitemapIndex = () => null;

const ProvidersSitemap = ({providerFields}) => {

  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {providerFields?.map((providerField, index) => {
        return (
          <url key={index}>
            <loc>{providerField?.loc}</loc>
          </url>
        );
      })}
    </urlset>
  );
};

export const getServerSideProps = async ({ res }) => {
// Fetching All Slots 
const providerResults  = await apollo.query({
    query:gql`query fetchProviders{
      providers {
        data {
          id
          attributes {
            name
            summary
            slug
            web_url
            total_free_slots
            logo {
              data {
                attributes {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }`,
    fetchPolicy: 'no-cache',
  })
  const providers = providerResults.data.providers.data;
 
  // Storing data for sitemap generation
  let providerFields = [];
  
  providers.map(provider => {
   
    let providerSiteMap = {
      loc : `https://hycasino.com/slots/provider/${provider?.attributes?.slug}/`,
      name: provider?.attributes?.name,
      summary: provider?.attributes?.summary,
      web_url: provider?.attributes?.web_url,
      total_free_slots: provider?.attributes?.total_free_slots,
    }
    providerFields.push(providerSiteMap)
  });


  res.setHeader("Content-Type", "text/xml");
  res.write(renderToStaticMarkup(<ProvidersSitemap providerFields={providerFields} />));
  res.end();

  return {
    props: {},
  };
};




export default ProvidersSitemapIndex;
