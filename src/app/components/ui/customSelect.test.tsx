import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomSelect } from "./customSelect";

const selectItems = [
  { label: "Peru", value: "PE" },
  { label: "Argentina", value: "AR" },
  { label: "Colombia", value: "CO" },
];
const placeholder = "Select a country";

describe("CustomSelect component", () => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
  window.HTMLElement.prototype.releasePointerCapture = vi.fn();
  window.HTMLElement.prototype.hasPointerCapture = vi.fn();

  it("should render correctly", async () => {
    const user = userEvent.setup();
    const onChangeMock = vi.fn();

    const { getByRole, getAllByRole } = render(
      <CustomSelect
        placeholder={placeholder}
        selectItems={selectItems}
        onChange={onChangeMock}
      />
    );

    const select = getByRole("combobox");
    expect(select).toBeInTheDocument();
    await user.click(select);

    const options = getAllByRole("option");
    expect(options).toHaveLength(3);

    const option = getByRole("option", { name: "Argentina" });
    expect(option).toBeInTheDocument();
    await user.click(option);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("AR");
  });
});
