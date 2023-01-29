import { render, screen } from "@testing-library/react";
import { WithLinkText } from "@/components/generic";

describe("WithLinkText", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(WithLinkText(<div></div>, "Test"));

    expect(screen.getByTestId("page_wrapper")).toBeInTheDocument();
  });

  test("Component renders its children correctly", () =>
  {
    render(WithLinkText(<div data-testid="test_child"></div>, "Test"));

    expect(screen.getByTestId("test_child")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});