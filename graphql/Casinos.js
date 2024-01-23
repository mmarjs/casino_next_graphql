import { gql } from "@apollo/client";

export const GET_CASINOS = gql`
  query getBlog($filters: CasinoFiltersInput, $pagination: PaginationArg) {
    casinos(filters: $filters, pagination: $pagination) {
      data {
        id
        attributes {
          Tags {
            casino_tag
          }
          title
          total_free_spins
          slug
          web_url
          min_wager
          min_deposit
          owner
          licenses
          creation_date
          textbonus1
          valuebonus1
          sumbonus1
          valuebonus2
          sumbonus2
          features {
            title
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
          promo_image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          background_image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          bonuses {
            data {
              attributes {
                bonus_of_the_month
                max_percent
                bonusmonth1
                bonusmonth2
                upto
                type
              }
            }
          }
          flag {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          review {
            data {
              attributes {
                rating {
                  support
                  bonus
                  website
                  methods_of_payments
                  game_provider
                }
                overall_rating
              }
            }
          }
          payment_methods {
            data {
              id
              attributes {
                name
                logo {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
          languages {
            data {
              attributes {
                name
                logo {
                  data {
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
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
      meta {
        pagination {
          pageCount
          page
          pageSize
        }
      }
    }
  }
`;
