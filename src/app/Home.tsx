import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./queries/countries";
import { CustomSelect } from "./components/custom/customSelect";
import { Input } from "./components/ui/input";
import { GET_ALL_CONTINENTS } from "./queries/continents";
import { GET_ALL_CURRENCIES } from "./queries/currencies";
import { useEffect, useState } from "react";
import type { Continents, Countries, Currencies } from "./types";
import { parsedContinents, parsedCurrencies } from "./helpers";
import { useDebounce } from "./hooks";
import {
  CONTINENT_PLACEHOLDER,
  COUNTRY_PLACEHOLDER,
  CURRENCY_PLACEHOLDER,
  ERROR_MESSAGE,
  LOADING,
} from "./helpers/consts";
import { CountryCard } from "./components/custom/countryCard";
import { CountryCardSkeleton } from "./components/custom/countryCardSkeleton";
import { useLocation, useNavigate } from "react-router-dom";

export interface CountryFilters {
  name: string;
  currency: string;
  continent: string;
}

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const countryName = searchParams.get("name") || "";
  const countryContinent = searchParams.get("continent") || "";
  const countryCurrency = searchParams.get("currency") || "";

  const debouncedSearchCountryName = useDebounce(inputValue, 400);
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
    searchParams.set("name", debouncedSearchCountryName as string);
    getCountries({
      variables: {
        name: { regex: debouncedSearchCountryName },
        currency: { regex: countryCurrency },
        continent: { regex: countryContinent },
      },
    });
    navigate(`/?${searchParams.toString()}`, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryContinent, countryCurrency, debouncedSearchCountryName, navigate]);

  const hasError = Boolean(
    isErrorContinents || isErrorCurrencies || isErrorCountries
  );

  return (
    <main className="max-w-[90%] md:max-w-[80%] mx-auto w-full">
      <section className="mt-[5rem]">
        <h1 className="mx-auto text-4xl font-bold w-fit">Countries app</h1>
        <div className="flex items-center justify-center w-full mt-10 gap-1 flex-col md:flex-row">
          <Input
            defaultValue={countryName}
            disabled={isLoadingCountries || hasError}
            className="w-full h-12 md:w-[280px]"
            type="text"
            placeholder={COUNTRY_PLACEHOLDER}
            onChange={(e) => {
              const value = e.target.value;
              setInputValue(value);
            }}
          />

          <CustomSelect
            defaultValue={countryContinent}
            disabled={isLoadingContinents || hasError}
            placeholder={isLoadingContinents ? LOADING : CONTINENT_PLACEHOLDER}
            selectItems={continents}
            onChange={(value) => {
              searchParams.set("continent", value);
              navigate(`/?${searchParams.toString()}`, { replace: true });
            }}
          />

          <CustomSelect
            defaultValue={countryCurrency}
            disabled={isLoadingCurrencies || hasError}
            placeholder={isLoadingCurrencies ? LOADING : CURRENCY_PLACEHOLDER}
            selectItems={currencies}
            onChange={(value) => {
              searchParams.set("currency", value);
              navigate(`/?${searchParams.toString()}`, { replace: true });
            }}
          />
        </div>
        <div className="flex items-start justify-center gap-4 flex-wrap mt-10 mb-16">
          {isLoadingCountries && !hasError
            ? Array.from({ length: 10 }).map((_, index) => {
                return <CountryCardSkeleton key={index}></CountryCardSkeleton>;
              })
            : null}
          {hasError ? <h2>{ERROR_MESSAGE}</h2> : null}
          {countriesData && countriesData.countries.length && !hasError
            ? countriesData.countries.map((country) => {
                return (
                  <CountryCard
                    key={country.code}
                    country={country}
                  ></CountryCard>
                );
              })
            : null}
        </div>
      </section>
    </main>
  );
}
