import { IListTask } from "@/types";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TaskItem } from "@/components/tasks";

describe("TaskItem", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(
      <BrowserRouter>
        <TaskItem task={{title: "test"} as IListTask} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("task_item")).toBeInTheDocument();
  });

  test("Component renders a given task correctly", () =>
  {
    render(
      <BrowserRouter>
        <TaskItem task={{ title: "test" } as IListTask} />
      </BrowserRouter>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});