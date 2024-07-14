import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query getContries(
    $name: StringQueryOperatorInput
    $currency: StringQueryOperatorInput
    $continent: StringQueryOperatorInput
  ) {
    countries(
      filter: { name: $name, currency: $currency, continent: $continent }
    ) {
      code
      name
      currencies
      emoji
      continent {
        name
      }
      languages {
        name
      }
      capital
    }
  }
`;

export const GET_COUNTRY = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      code
      name
      currencies
      emoji
      continent {
        name
      }
      languages {
        name
        native
      }
      capital
    }
  }
`;
