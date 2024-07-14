import { GET_ALL_CONTINENTS } from "../queries/continents";
import { GET_COUNTRIES } from "../queries/countries";
import { GET_ALL_CURRENCIES } from "../queries/currencies";

export const graphqlMocks = [
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
