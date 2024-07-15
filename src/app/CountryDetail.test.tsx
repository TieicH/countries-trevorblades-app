import { act, render, screen } from "@testing-library/react";
import { MockedProvider, wait } from "@apollo/client/testing";
import CountryDetail from "./CountryDetail";
import { getCountryByCodeErrorMock, getCountryByCodeMock } from "./mocks";
import { ERROR_MESSAGE } from "./helpers/consts";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
  const mockedModule = await importOriginal<
    typeof import("react-router-dom")
  >();
  return {
    ...mockedModule,
    useNavigate: () => mockNavigate,
    useParams: () => ({ countryCode: "AF" }),
  };
});

describe("CountryDetail component", () => {
  it("should render country detail card and back button", async () => {
    render(
      <MockedProvider mocks={getCountryByCodeMock} addTypename={false}>
        <CountryDetail />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    });

    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByText("Afghanistan")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Back" })).toBeInTheDocument();
  });

  it("should navigate to home page when back button is clicked", async () => {
    render(
      <MockedProvider mocks={getCountryByCodeMock} addTypename={false}>
        <CountryDetail />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    });

    const backButton = screen.getByRole("button", { name: "Back" });
    backButton.click();

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
  it("should render error message", async () => {
    render(
      <MockedProvider mocks={getCountryByCodeErrorMock} addTypename={false}>
        <CountryDetail />
      </MockedProvider>
    );

    await act(async () => {
      await wait(0);
    });

    const errorMessage = screen.getByText(ERROR_MESSAGE);

    expect(errorMessage).toBeInTheDocument();
  });
});
