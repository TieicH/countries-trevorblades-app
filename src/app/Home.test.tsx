import { act, render, screen } from "@testing-library/react";
import { MockedProvider, wait } from "@apollo/client/testing";
import Home from "./Home";
import userEvent from "@testing-library/user-event";
import { graphqlMocks } from "./mocks";

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

describe("Home component", () => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
  window.HTMLElement.prototype.releasePointerCapture = vi.fn();
  window.HTMLElement.prototype.hasPointerCapture = vi.fn();
  it("should render the country search input", async () => {
    const user = userEvent.setup();
    render(
      <MockedProvider mocks={graphqlMocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    const countryInput = screen.getByPlaceholderText("Select a country");
    expect(countryInput).toBeInTheDocument();

    await user.type(countryInput, "Peru");

    await act(async () => {
      await wait(500);
    });

    const countryName = await screen.findByText("Peru");
    expect(countryName).toBeInTheDocument();

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(1);
  });

  it("should render the continent select", async () => {
    const user = userEvent.setup();
    render(
      <MockedProvider mocks={graphqlMocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    const comboboxes = await screen.getAllByRole("combobox");
    expect(comboboxes).toHaveLength(2);

    const continentSelect = comboboxes[0];
    await user.click(continentSelect);

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(7);

    const option = screen.getByRole("option", { name: "North America" });
    expect(option).toBeInTheDocument();
    await user.click(option);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
  });

  it("should render the currency select", async () => {
    const user = userEvent.setup();
    render(
      <MockedProvider mocks={graphqlMocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    const comboboxes = await screen.getAllByRole("combobox");
    expect(comboboxes).toHaveLength(2);

    const currencySelect = comboboxes[1];
    await user.click(currencySelect);

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(4);

    const option = screen.getByRole("option", { name: "CAD" });
    expect(option).toBeInTheDocument();
    await user.click(option);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(1);
  });
});
