import { IListTask } from "@/types";
import { render, screen } from "@testing-library/react";
import { DaysListItem } from "@/components/calendar";

const date = new Date();
const setDate = (date: Date) => date;

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
    done: false,
    id: "2",
    title: ""
  }
];

describe("DaysListItem", () =>
{
  test("Component renders itself correctly", () =>
  {
    render(<DaysListItem currDate={date} date={date} setDate={setDate} tasks={tasks} />);
    expect(screen.getByTestId("dayslist_item")).toBeInTheDocument();
  });

  test("Component renders a marker if there are tasks scheduled for this day", () =>
  {
    render(<DaysListItem currDate={date} date={date} setDate={setDate} tasks={tasks.slice(0, 1)} />);
    expect(screen.getByTestId("daymarker")).toBeInTheDocument();
  });

  test("Component renders two markers if there are both done and undone tasks", () =>
  {
    render(<DaysListItem currDate={date} date={date} setDate={setDate} tasks={tasks} />);
    expect(screen.getAllByTestId("daymarker").length).toBe(2);
  });
});
