import { gql } from '@apollo/client';

export const GET_FEATURED_SLOT_CARD = gql`query fetchFeaturedSlotCard{
    featuredSlotCard {
        data {
            id
            attributes {
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
}`;