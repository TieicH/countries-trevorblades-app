import React from "react";
import type { CountryProps } from "./countryCard";
import { EMPTY_PLACEHOLDER } from "@/app/helpers/consts";

export const CountryDetailCard = ({ country }: CountryProps) => {
  const languages = country.languages.map((language) => language.name);
  const currencies = country.currencies.map((currency) => currency);

  return (
    <div
      role="listitem"
      className="flex items-center justify-start flex-col border-2 border-gray-500 w-fit py-5 px-10 rounded-lg"
    >
      <div className="flex mb-2">
        <span className="text-[3.35rem] leading-[3.35rem]">
          {country.emoji}
        </span>
        <h2 className="text-5xl font-semibold ml-2">{country.name}</h2>
      </div>
      <p className="text-xl text-gray-500">
        Code:
        <span className="text-xl font-semibold text-gray-800 ml-2">
          {country.code}
        </span>
      </p>
      <p className="text-xl text-gray-500">
        {languages.length > 1 ? "Languages" : "Language"}:
        <span className="text-xl font-semibold text-gray-800 ml-2">
          {languages.join(", ") || EMPTY_PLACEHOLDER}
        </span>
      </p>
      <p className="text-xl text-gray-500">
        Continent:
        <span className="text-xl font-semibold text-gray-800 ml-2">
          {country.continent.name}
        </span>
      </p>
      <p className="text-xl text-gray-500">
        {currencies.length > 1 ? "Currencies" : "Currency"}:
        <span className="text-xl font-semibold text-gray-800 ml-2">
          {currencies.join(", ") || EMPTY_PLACEHOLDER}
        </span>
      </p>
      <p className="text-xl text-gray-500">
        Capital:
        <span className="text-xl font-semibold text-gray-800 ml-2">
          {country.capital ?? EMPTY_PLACEHOLDER}
        </span>
      </p>
    </div>
  );
};
