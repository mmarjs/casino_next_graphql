import { gql } from '@apollo/client';

export const GET_GAMES = gql`query fetchGames($filters: GameFiltersInput, $pagination: PaginationArg) {
    games(filters:$filters, sort:"creation_date:desc", pagination:$pagination) {
      data {
        id
        attributes {
            name
            summary
            slug
            volatility
            rtp
            max_multi
            creation_date
            play_url
            content_body
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
            logo {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
            banner {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
            providers {
              data {
                id
                attributes {
                  name
                  slug
                  total_free_slots
                }
              }
            }
            featured_slots {
                top_border_color
                button_label
                link
                image {
                    data {
                        attributes {
                            url
                            width
                            height
                        }
                    }
                }
                special_offer_label
                special_offer_enabled
                bonuses {
                    label
                    value
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
