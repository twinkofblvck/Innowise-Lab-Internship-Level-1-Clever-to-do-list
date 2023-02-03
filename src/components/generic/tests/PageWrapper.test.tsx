import { render, screen } from "@testing-library/react";
import { PageWrapper } from "@/components/generic";

describe("PageWrapper", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(<PageWrapper>Test child</PageWrapper>);
    expect(screen.getByTestId("page_wrapper")).toBeInTheDocument();
  });

  test("Component renders its children correctly", () =>
  {
    render(<PageWrapper>Test child</PageWrapper>);
    expect(screen.getByText("Test child")).toBeInTheDocument();
  });
});