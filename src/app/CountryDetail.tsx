import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_COUNTRY } from "./queries/countries";
import { CountryCard, CountryProps } from "./components/ui/countryCard";

export default function CountryDetail() {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { data: countryData, loading: isLoadingCountry } =
    useQuery<CountryProps>(GET_COUNTRY, { variables: { code: countryCode } });
  if (isLoadingCountry || !countryData) return <div>Loading...</div>;
  return <CountryCard country={countryData.country} />;
}
