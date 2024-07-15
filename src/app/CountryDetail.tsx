import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_COUNTRY } from "./queries/countries";
import type { CountryProps } from "./components/custom/countryCard";
import { Button } from "./components/ui/button";
import { CountryDetaildCardSkeleton } from "./components/custom/countryDetailCardSkeleton";
import { CountryDetailCard } from "./components/custom/countryDetailCard";
import { ERROR_MESSAGE } from "./helpers/consts";

export default function CountryDetail() {
  const navigate = useNavigate();
  const { countryCode } = useParams<{ countryCode: string }>();
  const {
    data: countryData,
    loading: isLoadingCountry,
    error: isErrorCountry,
  } = useQuery<CountryProps>(GET_COUNTRY, { variables: { code: countryCode } });

  if (isLoadingCountry) return <CountryDetaildCardSkeleton />;

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="mt-[4rem] flex items-center justify-start flex-col">
        {isErrorCountry ? <h2>{ERROR_MESSAGE}</h2> : null}
        {countryData ? (
          <CountryDetailCard country={countryData.country}></CountryDetailCard>
        ) : null}
        <Button onClick={handleBackClick} className="mt-4">
          Back
        </Button>
      </div>
    </>
  );
}
