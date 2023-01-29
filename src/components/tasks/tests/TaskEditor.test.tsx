import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TaskEditor } from "@/components/tasks";
import userEvent from "@testing-library/user-event";

const mockTaskAction = jest.fn();
const mockHeadingContent = "Heading";
const mockButtonContent = "Button";

describe("TaskEditor", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(
      <BrowserRouter>
        <TaskEditor
          action={mockTaskAction}
          btnContent={mockButtonContent}
          headingContent={mockHeadingContent}
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  test("Component responds to props change", () =>
  {
    const { rerender } = render(
      <BrowserRouter>
        <TaskEditor
          action={mockTaskAction}
          btnContent={mockButtonContent}
          headingContent={mockHeadingContent}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(mockButtonContent)).toBeInTheDocument();
    expect(screen.getByText(mockHeadingContent)).toBeInTheDocument();

    const updatedButtonContent = mockButtonContent + "test";
    const updatedHeadingContent = mockHeadingContent + "test";

    rerender(
      <BrowserRouter>
        <TaskEditor
          action={mockTaskAction}
          btnContent={updatedButtonContent}
          headingContent={updatedHeadingContent}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(updatedButtonContent)).toBeInTheDocument();
    expect(screen.getByText(updatedHeadingContent)).toBeInTheDocument();
  });

  test("Component calls the action passed in as props whenever its submit event fires", async () =>
  {
    render(
      <BrowserRouter>
        <TaskEditor
          action={mockTaskAction}
          btnContent={mockButtonContent}
          headingContent={mockHeadingContent}
        />
      </BrowserRouter>
    );


    const titleInput = screen.getByTestId("task_editor_title");
    const descriptionInput = screen.getByTestId("task_editor_description");

    userEvent.type(titleInput, "title");
    userEvent.type(descriptionInput, "description");

    await waitFor(async () =>
    {
      fireEvent.submit(await screen.findByTestId("form"));
      expect(mockTaskAction).toBeCalled();
    });
  });

  test("Component does not proceed with the action if incoming form fields lack content", async () =>
  {
    render(
      <BrowserRouter>
        <TaskEditor
          action={mockTaskAction}
          btnContent={mockButtonContent}
          headingContent={mockHeadingContent}
        />
      </BrowserRouter>
    );

    fireEvent.submit(await screen.findByTestId("form"));
    await waitFor(() => expect(mockTaskAction).toBeCalledTimes(0));
  });

});