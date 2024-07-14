import { Country } from "@/app/types";

export const CountryCard = ({ country }: { country: Country }) => {
  const languages = country.languages
    .map((language) => language.name)
    .splice(0, 3);
  const currencies = country.currencies
    .map((currency) => currency)
    .splice(0, 3);

  return (
    <div
      key={country.code}
      className="border-2 border-gray-600 rounded-md w-[350px] h-[240px] p-4 cursor-pointer"
    >
      <div className="flex items-start mb-3">
        <span className="text-4xl">{country.emoji}</span>
        <h2 className="text-2xl ml-2 text-balance">{country.name}</h2>
      </div>
      <p className="text-md text-gray-500">
        Code:
        <span className="text-md font-semibold text-gray-800 ml-1">
          {country.code}
        </span>
      </p>
      <p className="text-md text-gray-500">
        Continent:
        <span className="text-md font-semibold text-gray-800 ml-1">
          {country.continent.name}
        </span>
      </p>
      <p className="text-md text-gray-500">
        Capital:
        <span className="text-md font-semibold text-gray-800 ml-1">
          {country.capital}
        </span>
      </p>
      <p className="text-md text-gray-500">
        {currencies.length > 1 ? "Currencies" : "Currency"}:
        <span className="text-md font-semibold text-gray-800 ml-1">
          {currencies.join(", ")}
        </span>
      </p>
      <p className="text-md text-gray-500">
        {languages.length > 1 ? "Languages" : "Language"}:
        <span className="text-md font-semibold text-gray-800 ml-1">
          {languages.join(", ")}
        </span>
      </p>
    </div>
  );
};