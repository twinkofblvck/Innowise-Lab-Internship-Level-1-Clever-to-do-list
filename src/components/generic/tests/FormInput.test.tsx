import { render, screen } from "@testing-library/react";
import { FormInput } from "@/components/generic";
import fireEvent from "@testing-library/user-event";

let mockInputValue = "test";
const mockChangeCallback = jest.fn();

describe("FormInput", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(
      <FormInput
        value={mockInputValue}
        onChange={mockChangeCallback}
        element={props => <input data-testid="form_input" {...props} />}
        label="label"
        id="id"
      />
    );

    expect(screen.getByTestId("form_input")).toBeInTheDocument();
  });

  test("Component changes the value of its input element depending on the props passed", () =>
  {
    const { rerender } = render(
      <FormInput
        value={mockInputValue}
        onChange={mockChangeCallback}
        element={props => <input data-testid="form_input" {...props} />}
        label="label"
        id="id"
      />
    );

    expect(screen.getByTestId("form_input")).toHaveValue(mockInputValue);

    let updatedMockInputValue = mockInputValue + " test";

    rerender(
      <FormInput
        value={updatedMockInputValue}
        onChange={mockChangeCallback}
        element={props => <input data-testid="form_input" {...props} />}
        label="label"
        id="id"
      />
    );

    expect(screen.getByTestId("form_input")).toHaveValue(updatedMockInputValue);
  });

  test("Component's change callback is called whenever the corresponding event fires", async () =>
  {
    render(
      <FormInput
        value={mockInputValue}
        onChange={mockChangeCallback}
        element={props => <input type="text" data-testid="form_input" {...props} />}
        label="label"
        id="id"
      />
    );

    const inputString = " test";
    fireEvent.type(screen.getByTestId("form_input"), inputString);

    expect(mockChangeCallback).toBeCalledTimes(inputString.length);
  });
});