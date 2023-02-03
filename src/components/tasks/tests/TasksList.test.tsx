import { render, screen } from "@testing-library/react";
import { TasksList } from "@/components/tasks";
import { FirestoreError } from "firebase/firestore";
import { IListTask } from "@/types";
import { BrowserRouter } from "react-router-dom";


const mockError = { message: "error" } as FirestoreError;

describe("TasksList", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(
      <BrowserRouter>
        <TasksList isLoading={false} tasks={[]} error={undefined} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("tasks_list")).toBeInTheDocument();
  });

  test("Component renders a correct number of children", () =>
  {
    const date = new Date();
    const tasks: IListTask[] = [
      {
        date: { seconds: date.getTime() / 1000 },
        desc: "",
        done: true,
        id: "1",
        title: ""
      },
      {
        date: { seconds: date.getTime() / 1000 },
        desc: "",
        done: true,
        id: "2",
        title: ""
      },
    ];

    render(
      <BrowserRouter>
        <TasksList isLoading={false} tasks={tasks} error={undefined} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("tasks_list").children.length).toBe(2);
  });

  test("Components renders a spinner when the \"isLoading\" prop evaluates to \"true\"", () =>
  {
    render(
      <BrowserRouter>
        <TasksList isLoading={true} tasks={[]} error={undefined} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("Components renders an error message when the \"error\" prop is defined", () =>
  {
    render(
      <BrowserRouter>
        <TasksList isLoading={false} tasks={[]} error={mockError} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockError.message)).toBeInTheDocument();
  });
});