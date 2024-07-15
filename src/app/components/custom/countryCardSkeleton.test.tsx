import { render } from "@testing-library/react";
import { CountryCardSkeleton } from "./countryCardSkeleton";

describe("CountryCardSkeleton component", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<CountryCardSkeleton />);
    const skeletonComponent = getByTestId("skeleton");
    expect(skeletonComponent).toBeInTheDocument();
  });
});
