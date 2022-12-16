import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import TaskEditor from "../components/tasks/TaskEditor";
import { IListTask } from "../types/task";
import server from "../server/server";
import DateFormatter from "../utils/DateFormatter";
import PageWrapper from "../components/ui/PageWrapper";

const UpdateTaskPage: FC = () =>
{
  const { id } = useParams<{ id?: string; }>();
  const task: IListTask = useLocation().state;

  async function updateData(title: string, desc: string)
  {
    if (!id) return;

    await server.tasks.Update(id, { title, desc });
  }

  return (
    <PageWrapper>
      <TaskEditor
        action={updateData}
        initialTitle={task.title}
        initialDesc={task.desc}
        btnContent="Update"
        headingContent={`Update task for
          ${DateFormatter.ToCalendarDate(new Date(task.date.seconds * 1000))}`}
      />
    </PageWrapper>
  );
};

export default UpdateTaskPage;