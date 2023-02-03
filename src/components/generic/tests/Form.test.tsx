import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "@/components/generic";

const mockSubmitCallback = jest.fn();

describe("Form", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(<Form onSubmit={mockSubmitCallback}>Test child</Form>);
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  test("Component renders its children correctly", () =>
  {
    render(<Form onSubmit={mockSubmitCallback}>Test child</Form>);
    expect(screen.getByText("Test child")).toBeInTheDocument();
  });

  test("Component's submit listener is called whenever the corresponding event fires", () =>
  {
    render(<Form onSubmit={mockSubmitCallback}>Test child</Form>);

    const callsCount = 4;

    for(let i = 0; i < callsCount; i++)
      fireEvent.submit(screen.getByTestId("form"));

    expect(mockSubmitCallback).toBeCalledTimes(callsCount);
  });
});