import { Button, Flex, Heading } from "@chakra-ui/react";
import { FC, useMemo, useState } from "react";
import { DaysList } from "@/components/calendar";
import { useCollection } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { IListTask } from "@/types";
import { TasksList } from "@/components/tasks";
import { useRequest } from "@/hooks";
import { server } from "@/server";
import { PageWrapper } from "@/components/generic";
import { ColorModeBtn } from "@/components/generic";
import { ITasksPageProps } from "@/pages";
import { useTranslation } from "react-i18next";

const TasksPage: FC<ITasksPageProps> = ({ logOut, userData }) =>
{
  const [date, setDate] = useState<Date | null>(null);
  const router = useNavigate();

  const [taskSnapshot, isLoading, error] = useCollection(server.tasks.Query());

  const tasks: IListTask[] = useMemo(() =>
    taskSnapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() })) ?? [], [taskSnapshot]);

  const filteredTasks = useMemo(() =>
    tasks.filter(task => task.date.seconds * 1000 === +(date ?? 0)), [date, tasks]);

  const [logOutRequest] = useRequest(logOut);

  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Heading as={Flex} justify="space-between">
        {t("tasksPage.title")}
        <ColorModeBtn />
      </Heading>
      {userData && <Button data-testid="logout_button" onClick={logOutRequest}>{t("tasksPage.logout")}</Button>}
      <DaysList setDate={date => setDate(date)} currDate={date} tasks={tasks} />
      <TasksList tasks={filteredTasks} isLoading={isLoading} error={error} />
      <Button onClick={() => router(`/new/${+(date ?? 0)}`)}>
        {t("tasksPage.new", { date })}
      </Button>
    </PageWrapper>
  );
};

export default TasksPage;