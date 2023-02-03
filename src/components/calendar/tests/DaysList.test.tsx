import { IListTask } from "@/types";
import { render, screen } from "@testing-library/react";
import { DaysList } from "@/components/calendar";
import { Calendar } from "@/utils";

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

const date = new Date();
const setDate = (date: Date) => date;

const tasks: IListTask[] = [
  {
    date: { seconds: Date.now() / 1000 },
    desc: "",
    done: true,
    id: "1",
    title: ""
  },
  {
    date: { seconds: Date.now() / 1000 },
    desc: "",
    done: true,
    id: "2",
    title: ""
  }
];

describe("DaysList", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(<DaysList currDate={date} setDate={setDate} tasks={tasks} />);
    expect(screen.getByTestId("dayslist")).toBeInTheDocument();
  });

  test("Component renders correct amount of children depending on the current month", () =>
  {
    render(<DaysList currDate={date} setDate={setDate} tasks={tasks} />);
    expect(screen.getAllByTestId("dayslist_item").length).toBe(Calendar.MonthAhead().length);
  });
});