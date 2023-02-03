import { IListTask } from "@/types";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UpdateTaskPage } from "@/pages";

const task: IListTask =
{
  date: { seconds: Date.now() / 1000 },
  desc: "",
  done: false,
  id: "1",
  title: ""
};

describe("UpdateTaskPage", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(
      <MemoryRouter initialEntries={[{ state: task }]}>
        <UpdateTaskPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId("page_wrapper")).toBeInTheDocument();
  });

  test("Component renders a single child", () =>
  {
    render(
      <MemoryRouter initialEntries={[{ state: task }]}>
        <UpdateTaskPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId("page_wrapper").children.length).toBe(1);
  });
});