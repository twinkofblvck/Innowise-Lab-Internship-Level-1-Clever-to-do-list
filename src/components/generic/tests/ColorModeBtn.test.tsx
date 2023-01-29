import { theme } from "@/chakra";
import { ChakraProvider } from "@chakra-ui/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ColorModeBtn } from "@/components/generic";

describe("ColorModeBtn", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(<ColorModeBtn />);
    expect(screen.getByTestId("colormode")).toBeInTheDocument();

  });

  test("Component changes color theme on click, as well as its icon", () =>
  {
    render(<ChakraProvider theme={theme}><ColorModeBtn /></ChakraProvider>);

    const component = screen.getByTestId("colormode");
    const initialIcon = component.querySelector("svg");

    fireEvent.click(component);

    expect(initialIcon === component.querySelector("svg")).toBe(false);
  });
});