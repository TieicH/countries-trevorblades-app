import { render } from "@testing-library/react";
import { CountrySkeleton } from "./countrySkeleton";

describe("CountrySkeleton component", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<CountrySkeleton />);
    const skeletonComponent = getByTestId("skeleton");
    expect(skeletonComponent).toBeInTheDocument();
  });
});
