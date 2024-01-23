import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`query getCategories($filters: CategoryFiltersInput, $pagination: PaginationArg) {
    categories(filters:$filters, pagination:$pagination) {
      data {
        id
        attributes {
          name
          type
          slug
          content_body
          banner {
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
      meta{
        pagination{
          pageCount
          page
          pageSize
        }
      }
    }
}`


export const GET_ARTICLE = gql`query getBlog($filters: ArticleFiltersInput) {
    articles(filters:$filters, pagination:{page:1, pageSize:1}) {
      data {
        id
        attributes {
          title
          summary
          slug
          content_body
          published_on
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
}`
