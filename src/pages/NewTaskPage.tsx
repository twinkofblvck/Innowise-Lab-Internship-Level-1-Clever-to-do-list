import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";
import TaskEditor from "../components/tasks/TaskEditor";
import PageWrapper from "../components/ui/PageWrapper";
import server from "../server/server";
import DateFormatter from "../utils/DateFormatter";

const NewTaskPage: FC = () =>
{
  const { date } = useParams<{ date?: string; }>();

  const dateObject = useMemo(() =>
  {
    return date ? new Date(+date) : new Date();
  }, [date]);

  async function createTask(title: string, desc: string)
  {
    if (!date) return;

    const task = { title, desc, date: dateObject, done: false };
    await server.tasks.Add(task);
  }
  return (
    <PageWrapper>
      <TaskEditor
        action={createTask}
        btnContent="Create"
        headingContent={`New task for ${DateFormatter.ToCalendarDate(dateObject)}`}
      />
    </PageWrapper>
  );
};

export default NewTaskPage;