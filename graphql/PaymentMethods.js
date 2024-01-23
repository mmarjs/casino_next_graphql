import { gql } from '@apollo/client';

export const GET_PAYMENT_METHODS = gql`query fetchGames($filters: PaymentMethodFiltersInput, $pagination: PaginationArg) {
    paymentMethods(filters:$filters, pagination:$pagination) {
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
}`