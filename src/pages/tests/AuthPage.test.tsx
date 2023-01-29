import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AuthPage } from "@/pages";
import userEvent from "@testing-library/user-event";

const mockAuthAction = jest.fn();

describe("AuthPage", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(<AuthPage title="title" action={mockAuthAction} />);
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  test("Component responds to props change", () =>
  {
    let title = "title";
    const { rerender } = render(<AuthPage title={title} action={mockAuthAction} />);
    expect(screen.getByTestId("form").children[0]).toHaveTextContent(title);

    title = "title2";
    rerender(<AuthPage title={title} action={mockAuthAction} />);
    expect(screen.getByTestId("form").children[0]).toHaveTextContent(title);
  });

  test("Component calls the action passed in as props whenever its submit event fires", async () =>
  {
    render(<AuthPage title="title" action={mockAuthAction} />);

    const emailInput = await screen.findByTestId("auth_email");
    const passwordInput = await screen.findByTestId("auth_password");

    userEvent.type(emailInput, "email");
    userEvent.type(passwordInput, "password");

    await waitFor(async () =>
    {
      fireEvent.submit(await screen.findByTestId("form"));
      expect(mockAuthAction).toBeCalled();
    });
  });

  test("Component does not proceed with the action if incoming form fields lack content", async () =>
  {
    render(<AuthPage title="title" action={mockAuthAction} />);

    fireEvent.submit(await screen.findByTestId("form"));
    await waitFor(() => expect(mockAuthAction).toBeCalledTimes(0));
  });
});