import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./queries/countries";
import { CustomSelect } from "./components/custom/customSelect";
import { Input } from "./components/ui/input";
import { GET_ALL_CONTINENTS } from "./queries/continents";
import { GET_ALL_CURRENCIES } from "./queries/currencies";
import { useEffect, useRef, useState } from "react";
import type { Continents, Countries, Currencies } from "./types";
import { parsedContinents, parsedCurrencies } from "./helpers";
import { useDebounce } from "./hooks";
import {
  CONTINENT_PLACEHOLDER,
  COUNTRY_PLACEHOLDER,
  CURRENCY_PLACEHOLDER,
  ERROR_MESSAGE,
  LOADING,
  NOT_COUNTRIES_FOUND_MESSAGE,
} from "./helpers/consts";
import { CountryCard } from "./components/custom/countryCard";
import { CountryCardSkeleton } from "./components/custom/countryCardSkeleton";
import { Button } from "./components/ui/button";

export interface CountryFilters {
  name: string;
  currency: string;
  continent: string;
}

const INITIAL_FILTERS = {
  continent: "",
  currency: "",
  name: "",
};

export default function Home() {
  const [filter, setFilter] = useState<CountryFilters>(INITIAL_FILTERS);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounce = useDebounce(400);
  const [
    getCountries,
    {
      loading: isLoadingCountries,
      data: countriesData,
      error: isErrorCountries,
    },
  ] = useLazyQuery<Countries>(GET_COUNTRIES);
  const {
    data: continentsData,
    loading: isLoadingContinents,
    error: isErrorContinents,
  } = useQuery<Continents>(GET_ALL_CONTINENTS);
  const {
    data: currenciesData,
    loading: isLoadingCurrencies,
    error: isErrorCurrencies,
  } = useQuery<Currencies>(GET_ALL_CURRENCIES);

  const continents = parsedContinents(continentsData);
  const currencies = parsedCurrencies(currenciesData);

  useEffect(() => {
    getCountries({
      variables: {
        name: { regex: filter.name },
        currency: { regex: filter.currency },
        continent: { regex: filter.continent },
      },
    });
  }, [filter, getCountries]);

  const handleReset = () => {
    setFilter(INITIAL_FILTERS);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const hasError = Boolean(
    isErrorContinents || isErrorCurrencies || isErrorCountries
  );

  return (
    <main className="max-w-[90%] md:max-w-[80%] mx-auto w-full">
      <section className="mt-[5rem]">
        <h1 className="mx-auto text-4xl font-bold w-fit">Countries app</h1>
        <div className="flex items-center justify-center w-full mt-10 gap-1 flex-col md:flex-row">
          <Input
            ref={inputRef}
            disabled={isLoadingCountries || hasError}
            className="w-full h-12 md:w-[280px]"
            type="text"
            placeholder={COUNTRY_PLACEHOLDER}
            onChange={(e) => {
              debounce(() => {
                const value = e.target.value;
                setFilter((prev) => {
                  return { ...prev, name: value };
                });
              });
            }}
          />

          <CustomSelect
            value={filter.continent}
            disabled={isLoadingContinents || hasError}
            placeholder={isLoadingContinents ? LOADING : CONTINENT_PLACEHOLDER}
            selectItems={continents}
            onChange={(value) => {
              setFilter((prev) => {
                return { ...prev, continent: value };
              });
            }}
          />

          <CustomSelect
            value={filter.currency}
            disabled={isLoadingCurrencies || hasError}
            placeholder={isLoadingCurrencies ? LOADING : CURRENCY_PLACEHOLDER}
            selectItems={currencies}
            onChange={(value) => {
              setFilter((prev) => {
                return { ...prev, currency: value };
              });
            }}
          />
          <Button onClick={handleReset}>Reset</Button>
        </div>
        <div className="flex items-start justify-center gap-4 flex-wrap mt-10 mb-16">
          {isLoadingCountries
            ? Array.from({ length: 10 }).map((_, index) => {
                return <CountryCardSkeleton key={index}></CountryCardSkeleton>;
              })
            : null}
          {hasError ? <h2>{ERROR_MESSAGE}</h2> : null}
          {countriesData && countriesData.countries.length && !hasError ? (
            countriesData.countries.map((country) => {
              return (
                <CountryCard key={country.code} country={country}></CountryCard>
              );
            })
          ) : !hasError && !isLoadingCountries ? (
            <h2>{NOT_COUNTRIES_FOUND_MESSAGE}</h2>
          ) : null}
        </div>
      </section>
    </main>
  );
}
