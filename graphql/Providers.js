import { gql } from '@apollo/client';

export const GET_PROVIDERS = gql`query fetchProviders{
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
          meta_title
          meta_description
          meta_image {
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
  }`;