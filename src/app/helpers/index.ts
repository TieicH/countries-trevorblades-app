import { Continents, Currencies } from "../types";
import { EMPTY_PLACEHOLDER_COUNTRY } from "./consts";

export const parsedContinents = (continentsData: Continents | undefined) => {
  if (!continentsData || !continentsData?.continents?.length) return [];
  return continentsData.continents.map((continent) => {
    return { label: continent.name, value: continent.code };
  });
};

export const parsedCurrencies = (currenciesData: Currencies | undefined) => {
  const uniqueCurrencies = new Set<string>();
  if (!currenciesData || !currenciesData?.countries?.length) return [];
  currenciesData.countries.forEach((country) => {
    country.currencies.forEach((currency) => {
      uniqueCurrencies.add(currency);
    });
  });
  const currencies = Array.from(uniqueCurrencies);
  return currencies.map((currency) => {
    return {
      label: currency || EMPTY_PLACEHOLDER_COUNTRY,
      value: currency || EMPTY_PLACEHOLDER_COUNTRY,
    };
  });
};

export const capitalizeFirstLetter = (text: string) => {
  if (text.length === 0) {
    return "";
  }
  return `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;
};
