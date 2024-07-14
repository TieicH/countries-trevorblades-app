import { gql } from "@apollo/client";

export const GET_ALL_CONTINENTS = gql`
  query getAllContinents {
    continents {
      code
      name
    }
  }
`;
