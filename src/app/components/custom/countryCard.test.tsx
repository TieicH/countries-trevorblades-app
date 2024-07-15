import { fireEvent, render } from "@testing-library/react";
import { CountryCard } from "./countryCard";

const countryData = {
  code: "PE",
  name: "Peru",
  emoji: "🇵🇪",
  currencies: ["PEN"],
  continent: { name: "South America" },
  languages: [{ name: "Spanish" }],
  capital: "Lima",
};

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
  const mockedModule = await importOriginal<
    typeof import("react-router-dom")
  >();
  return {
    ...mockedModule,
    useNavigate: () => mockNavigate,
  };
});

describe("Country Card Component", () => {
  it("should render correctly", async () => {
    const { getByRole } = render(<CountryCard country={countryData} />);

    const cardTitle = getByRole("heading", { name: countryData.name });
    expect(cardTitle).toBeInTheDocument();

    const card = getByRole("listitem");
    fireEvent.click(card);

    expect(mockNavigate).toHaveBeenCalledWith(`/country/${countryData.code}`);
  });
});
