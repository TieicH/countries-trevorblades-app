import { ApolloError } from "@apollo/client";
import { GET_ALL_CONTINENTS } from "../queries/continents";
import { GET_COUNTRIES, GET_COUNTRY } from "../queries/countries";
import { GET_ALL_CURRENCIES } from "../queries/currencies";
import { GraphQLError } from "graphql";

export const getCountryByCodeMock = [
  {
    request: {
      query: GET_COUNTRY,
      variables: {
        code: "AF",
      },
    },
    result: {
      data: {
        country: {
          code: "AF",
          name: "Afghanistan",
          currencies: ["AFN"],
          emoji: "🇦🇫",
          continent: {
            name: "Asia",
            __typename: "Continent",
          },
          languages: [
            {
              name: "Pashto",
              __typename: "Language",
            },
            {
              name: "Uzbek",
              __typename: "Language",
            },
            {
              name: "Turkmen",
              __typename: "Language",
            },
          ],
          capital: "Kabul",
          __typename: "Country",
        },
      },
    },
  },
];

export const getCountryByCodeErrorMock = [
  {
    request: {
      query: GET_COUNTRY,
      variables: {
        code: "AF",
      },
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError("Error getting country by code")],
    }),
  },
];

export const baseGetCountriesMock = [
  {
    request: {
      query: GET_COUNTRIES,
      variables: {
        name: { regex: "" },
        currency: { regex: "" },
        continent: { regex: "" },
      },
    },
    result: {
      data: {
        countries: [
          {
            code: "PE",
            name: "Peru",
            currencies: ["PEN"],
            emoji: "🇵🇪",
            continent: {
              name: "South America",
              __typename: "Continent",
            },
            languages: [
              {
                name: "Spanish",
                __typename: "Language",
              },
            ],
            capital: "Lima",
            __typename: "Country",
          },
          {
            code: "CA",
            name: "Canada",
            currencies: ["CAD"],
            emoji: "🇨🇦",
            continent: {
              name: "North America",
              __typename: "Continent",
            },
            languages: [
              {
                name: "English",
                __typename: "Language",
              },
              {
                name: "French",
                __typename: "Language",
              },
            ],
            capital: "Ottawa",
            __typename: "Country",
          },
          {
            code: "US",
            name: "United States",
            currencies: ["USD", "USN", "USS"],
            emoji: "🇺🇸",
            continent: {
              name: "North America",
              __typename: "Continent",
            },
            languages: [
              {
                name: "English",
                __typename: "Language",
              },
            ],
            capital: "Washington D.C.",
            __typename: "Country",
          },
        ],
      },
    },
  },
];

export const getAllContinentsMock = [
  {
    request: {
      query: GET_ALL_CONTINENTS,
      variables: {},
    },
    result: {
      data: {
        continents: [
          {
            code: "AF",
            name: "Africa",
            __typename: "Continent",
          },
          {
            code: "AN",
            name: "Antarctica",
            __typename: "Continent",
          },
          {
            code: "AS",
            name: "Asia",
            __typename: "Continent",
          },
          {
            code: "EU",
            name: "Europe",
            __typename: "Continent",
          },
          {
            code: "NA",
            name: "North America",
            __typename: "Continent",
          },
          {
            code: "OC",
            name: "Oceania",
            __typename: "Continent",
          },
          {
            code: "SA",
            name: "South America",
            __typename: "Continent",
          },
        ],
      },
    },
  },
];

export const getAllCurrenciesMock = [
  {
    request: {
      query: GET_ALL_CURRENCIES,
      variables: {},
    },
    result: {
      data: {
        countries: [
          {
            currencies: ["CAD"],
            __typename: "Country",
          },
          {
            currencies: ["USD"],
            __typename: "Country",
          },
          {
            currencies: ["EUR"],
            __typename: "Country",
          },
          {
            currencies: ["EUR"],
            __typename: "Country",
          },
          {
            currencies: ["PEN"],
            __typename: "Country",
          },
        ],
      },
    },
  },
];

export const graphqlMockResponses = [
  {
    request: {
      query: GET_COUNTRIES,
      variables: {
        name: { regex: "Peru" },
        currency: { regex: "" },
        continent: { regex: "" },
      },
    },
    result: {
      data: {
        countries: [
          {
            code: "PE",
            name: "Peru",
            currencies: ["PEN"],
            emoji: "🇵🇪",
            continent: {
              name: "South America",
              __typename: "Continent",
            },
            languages: [
              {
                name: "Spanish",
                __typename: "Language",
              },
            ],
            capital: "Lima",
            __typename: "Country",
          },
        ],
      },
    },
  },
  {
    request: {
      query: GET_COUNTRIES,
      variables: {
        name: { regex: "" },
        currency: { regex: "" },
        continent: { regex: "NA" },
      },
    },
    result: {
      data: {
        countries: [
          {
            code: "CA",
            name: "Canada",
            currencies: ["CAD"],
            emoji: "🇨🇦",
            continent: {
              name: "North America",
              __typename: "Continent",
            },
            languages: [
              {
                name: "English",
                __typename: "Language",
              },
              {
                name: "French",
                __typename: "Language",
              },
            ],
            capital: "Ottawa",
            __typename: "Country",
          },
          {
            code: "US",
            name: "United States",
            currencies: ["USD", "USN", "USS"],
            emoji: "🇺🇸",
            continent: {
              name: "North America",
              __typename: "Continent",
            },
            languages: [
              {
                name: "English",
                __typename: "Language",
              },
            ],
            capital: "Washington D.C.",
            __typename: "Country",
          },
        ],
      },
    },
  },
  {
    request: {
      query: GET_COUNTRIES,
      variables: {
        name: { regex: "" },
        currency: { regex: "CAD" },
        continent: { regex: "" },
      },
    },
    result: {
      data: {
        countries: [
          {
            code: "CA",
            name: "Canada",
            currencies: ["CAD"],
            emoji: "🇨🇦",
            continent: {
              name: "North America",
              __typename: "Continent",
            },
            languages: [
              {
                name: "English",
                __typename: "Language",
              },
              {
                name: "French",
                __typename: "Language",
              },
            ],
            capital: "Ottawa",
            __typename: "Country",
          },
        ],
      },
    },
  },
  ...baseGetCountriesMock,
  ...getAllContinentsMock,
  ...getAllCurrenciesMock,
];
