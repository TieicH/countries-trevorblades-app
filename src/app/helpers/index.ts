import type { Continents, Currencies } from "../types";
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
      uniqueCurrencies.add(currency || EMPTY_PLACEHOLDER_COUNTRY);
    });
  });
  const currencies = Array.from(uniqueCurrencies);
  const sortedCurrencies = currencies.sort((a, b) => a.localeCompare(b));
  return sortedCurrencies.map((currency) => {
    return {
      label: currency,
      value: currency,
    };
  });
};

export const capitalizeFirstLetter = (text: string) => {
  if (text.length === 0) {
    return "";
  }
  return `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;
};
