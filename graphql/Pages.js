import { gql } from "@apollo/client";

export const GET_PAGE = gql`
  query getPage($filters: PageFiltersInput) {
    pages(filters: $filters, pagination: { page: 1, pageSize: 1 }) {
      data {
        id
        attributes {
          title
          summary
          slug
          content_body
          published_on
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
          category_ids {
            data {
              attributes {
                name
                type
                slug
              }
            }
          }
          featured_image {
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
  }
`;
