import { gql } from '@apollo/client';

export const GET_REVIEWS = gql`query getReviews($filters: ReviewFiltersInput) {
    reviews(filters:$filters) {
      data {
        id
        attributes {
          entity
          summary
          content_body
          pros{
            position
            text
          }
          cons{
            position
            text
          }
          overall_rating
          photos {
            data {
              attributes {
                url
                height
                width
              }
            }
          }
          rating{
            support
            bonus
            website
            methods_of_payments
            game_provider
          }
          provider {
            data {
              attributes {
                name
                slug
                banners {
                  data {
                    attributes {
                      url
                      width
                      height
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
          casino {
            data {
              attributes {
                title
                slug
                meta_title
                meta_description
                min_wager
                min_deposit
                textbonus1
                valuebonus1
                sumbonus1
                valuebonus2
                sumbonus2
                owner
                licenses
                creation_date
                features {
                  title
                }
                logo{
                  data{
                      attributes{
                          url
                          width
                          height
                      }
                  }
                }
                meta_image {
                  data {
                    attributes {
                      url
                      height
                      width
                    }
                  }
                }
                bonuses{
                  data{
                  attributes{
                      bonus_of_the_month
                      max_percent
                      upto
                      type
                  }
                  }
                }
                payment_methods {
                  data{
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
              }
            }
          }
        }
      }
    }
}`
