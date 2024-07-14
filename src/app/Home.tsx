import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./queries/countries";
import { CustomSelect } from "./components/ui/customSelect";
import { Input } from "./components/ui/input";
import { GET_ALL_CONTINENTS } from "./queries/continents";
import { GET_ALL_CURRENCIES } from "./queries/currencies";
import { useEffect, useState } from "react";
import { Continents, Countries, Currencies } from "./types";
import { parsedContinents, parsedCurrencies } from "./helpers";
import { useDebounce } from "./hooks";
import {
  CONTINENT_PLACEHOLDER,
  COUNTRY_PLACEHOLDER,
  CURRENCY_PLACEHOLDER,
  LOADING,
} from "./helpers/consts";
import { CountryCard } from "./components/ui/countryCard";
import { CountrySkeleton } from "./components/ui/countrySkeleton";

export interface CountryFilters {
  name: string;
  currency: string;
  continent: string;
}

export const Home = () => {
  const [filter, setFilter] = useState<CountryFilters>({
    continent: "",
    currency: "",
    name: "",
  });
  const debouncedSearchCountryName = useDebounce(filter.name, 400);
  const [getCountries, { loading: isLoadingCountries, data: countriesData }] =
    useLazyQuery<Countries>(GET_COUNTRIES);
  const { data: continentsData, loading: isLoadingContinents } =
    useQuery<Continents>(GET_ALL_CONTINENTS);
  const { data: currenciesData, loading: isLoadingCurrencies } =
    useQuery<Currencies>(GET_ALL_CURRENCIES);

  const continents = parsedContinents(continentsData);
  const currencies = parsedCurrencies(currenciesData);

  useEffect(() => {
    getCountries({
      variables: {
        name: { regex: debouncedSearchCountryName },
        currency: { regex: filter.currency },
        continent: { regex: filter.continent },
      },
    });
  }, [debouncedSearchCountryName, filter, getCountries]);

  return (
    <main className="max-w-[80%] mx-auto w-full">
      <section className="mt-[5rem]">
        <h1 className="mx-auto text-4xl font-bold w-fit">Countries app</h1>
        <div className="flex items-center justify-center w-full mt-10 gap-1">
          <Input
            className="w-[280px]"
            type="text"
            placeholder={COUNTRY_PLACEHOLDER}
            onChange={(e) => {
              const value = e.target.value;
              setFilter((prev) => {
                return { ...prev, name: value };
              });
            }}
          />

          <CustomSelect
            placeholder={isLoadingContinents ? LOADING : CONTINENT_PLACEHOLDER}
            selectItems={continents}
            onChange={(value) => {
              setFilter((prev) => {
                return { ...prev, continent: value };
              });
              getCountries({
                variables: {
                  name: { regex: filter.name },
                  currency: { regex: filter.currency },
                  continent: { regex: value },
                },
              });
            }}
          />

          <CustomSelect
            placeholder={isLoadingCurrencies ? LOADING : CURRENCY_PLACEHOLDER}
            selectItems={currencies}
            onChange={(value) => {
              setFilter((prev) => {
                return { ...prev, currency: value };
              });
              getCountries({
                variables: {
                  name: { regex: filter.name },
                  currency: { regex: value },
                  continent: { regex: filter.continent },
                },
              });
            }}
          />
        </div>
        <div className="flex items-start justify-center gap-4 flex-wrap mt-10 mb-16">
          {isLoadingCountries
            ? Array.from({ length: 10 }).map((_, index) => {
                return <CountrySkeleton key={index}></CountrySkeleton>;
              })
            : countriesData &&
              countriesData.countries.map((country) => {
                return <CountryCard country={country}></CountryCard>;
              })}
        </div>
      </section>
    </main>
  );
};
