import { gql } from "@apollo/client";

export const GET_ALL_CURRENCIES = gql`
  query getAllCurrencies {
    countries {
      currencies
    }
  }
`;
