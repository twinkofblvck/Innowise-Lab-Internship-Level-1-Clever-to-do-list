import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NewTaskPage } from "@/pages";

describe("NewTaskPage", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(
      <BrowserRouter>
        <NewTaskPage />
      </BrowserRouter>
    );

    expect(screen.getByTestId("page_wrapper")).toBeInTheDocument();
  });

  test("Component renders a single child", () =>
  {
    render(
      <BrowserRouter>
        <NewTaskPage />
      </BrowserRouter>
    );

    expect(screen.getByTestId("page_wrapper").children.length).toBe(1);
  });
});