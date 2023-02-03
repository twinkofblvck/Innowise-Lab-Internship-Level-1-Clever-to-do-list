import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { User } from "firebase/auth";
import { BrowserRouter } from "react-router-dom";
import { TasksPage } from "@/pages";

beforeEach(() =>
{
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

const mockLogout = jest.fn();
const mockUserData = {} as User;

describe("TasksPage", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(
      <BrowserRouter>
        <TasksPage logOut={mockLogout} userData={mockUserData} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("page_wrapper")).toBeInTheDocument();
  });

  test("Component renders the logout button if a user is logged in", () =>
  {
    render(
      <BrowserRouter>
        <TasksPage logOut={mockLogout} userData={mockUserData} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("logout_button")).toBeInTheDocument();
  });

  test("Component hides the logout button if a user is not logged in", () =>
  {
    render(
      <BrowserRouter>
        <TasksPage logOut={mockLogout} userData={null} />
      </BrowserRouter>
    );

    expect(screen.queryByTestId("logout_button")).toBeNull();
  });

  test("Component executes the logout action whenever the corresponding button is clicked", async () =>
  {
    render(
      <BrowserRouter>
        <TasksPage logOut={mockLogout} userData={mockUserData} />
      </BrowserRouter>
    );

    fireEvent.click(await screen.findByTestId("logout_button"));
    await waitFor(() => expect(mockLogout).toBeCalled());
  });
});