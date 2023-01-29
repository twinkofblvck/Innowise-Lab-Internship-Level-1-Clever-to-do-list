import { render, screen } from "@testing-library/react";
import { DayMarker } from "@/components/calendar";

describe("DayMarker", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(<DayMarker done={true} />);
    expect(screen.getByTestId("daymarker")).toBeValid();
  });
});