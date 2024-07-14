import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./queries/countries";
import { CustomSelect } from "./components/Select";
import { Input } from "./shadcnComponents/ui/input";
import { GET_ALL_CONTINENTS } from "./queries/continents";
import { GET_ALL_CURRENCIES } from "./queries/currencies";
import { useEffect, useState } from "react";
import { Continents, Countries, CountryFilters, Currencies } from "./types";
import {
  capitalizeFirstLetter,
  parsedContinents,
  parsedCurrencies,
} from "./helpers";
import { useDebounce } from "./hooks";

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
    <main className="border border-red-300 max-w-[80%] mx-auto w-full">
      <section className="mt-[10rem]">
        <h1 className="mx-auto text-3xl font-bold w-fit">Countries app</h1>
        <Input
          type="text"
          placeholder="Search a country"
          onChange={(e) => {
            const value = e.target.value;
            setFilter((prev) => {
              return { ...prev, name: value };
            });
          }}
        />

        <CustomSelect
          placeholder={
            isLoadingContinents ? "Loading..." : "Select a continent"
          }
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
          placeholder={isLoadingCurrencies ? "Loading..." : "Select a currency"}
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
        {countriesData &&
          countriesData.countries.map((country) => (
            <div key={country.code}>
              <h2>{country.name}</h2>
              <p>Capital: {country.capital}</p>
              <p>Currency: {country.currency}</p>
              <p>Continent: {country.continent.name}</p>
              <p>
                Languages:{" "}
                {country.languages.map((language) => language.name).join(", ")}
              </p>
            </div>
          ))}
      </section>
    </main>
  );
};
