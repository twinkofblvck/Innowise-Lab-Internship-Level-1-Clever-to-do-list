import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import { TaskEditor } from "@/components/tasks";
import { IListTask } from "@/types";
import { server } from "@/server";
import { PageWrapper } from "@/components/generic";
import { useTranslation } from "react-i18next";

const UpdateTaskPage: FC = () =>
{
  const { id } = useParams<{ id?: string; }>();
  const task: IListTask = useLocation().state;

  const updateData = async(title: string, desc: string) =>
  {
    if (!id) return;

    await server.tasks.Update(id, { title, desc });
  };

  const { t } = useTranslation();

  return (
    <PageWrapper>
      <TaskEditor
        action={updateData}
        initialTitle={task.title}
        initialDesc={task.desc}
        btnContent={t("updateTaskPage.button")}
        headingContent={t("updateTaskPage.title", { date: new Date(task.date.seconds * 1000) })}
      />
    </PageWrapper>
  );
};

export default UpdateTaskPage;