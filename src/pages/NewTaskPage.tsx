import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";
import { TaskEditor } from "@/components/tasks";
import { PageWrapper } from "@/components/generic";
import { server } from "@/server";
import { useTranslation } from "react-i18next";

const NewTaskPage: FC = () =>
{
  const { date } = useParams<{ date?: string; }>();

  const dateObject = useMemo(() => date ? new Date(+date) : new Date(), [date]);

  const createTask = async(title: string, desc: string) =>
  {
    if (!date) return;

    const task = { title, desc, date: dateObject, done: false };
    await server.tasks.Add(task);
  };

  const { t } = useTranslation();

  return (
    <PageWrapper>
      <TaskEditor
        action={createTask}
        btnContent={t("newTaskPage.button")}
        headingContent={` ${t("newTaskPage.title", { date: dateObject })}`}
      />
    </PageWrapper>
  );
};

export default NewTaskPage;