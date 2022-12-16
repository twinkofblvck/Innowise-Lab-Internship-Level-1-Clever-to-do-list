import { Button, Flex, Heading } from "@chakra-ui/react";
import { FC, useMemo, useState } from "react";
import DaysList from "../components/calendar/DaysList";
import { useCollection } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import { IListTask } from "../types/task";
import TasksList from "../components/tasks/TasksList";
import useRequest from "../hooks/useRequest";
import server from "../server/server";
import DateFormatter from "../utils/DateFormatter";
import PageWrapper from "../components/ui/PageWrapper";
import ColorModeBtn from "../components/ui/ColorModeBtn";

interface ITasksPageProps
{
  logOut: () => Promise<void>;
  userData: User | null | undefined;
}

const TasksPage: FC<ITasksPageProps> = ({ logOut, userData }) =>
{
  const [date, setDate] = useState<Date | null>(null);
  const router = useNavigate();

  const [taskSnapshot, isLoading, error] = useCollection(server.tasks.Query());

  const tasks: IListTask[] = useMemo(() =>
  {
    return taskSnapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() })) ?? [];
  }, [taskSnapshot]);

  const filteredTasks = useMemo(() =>
  {
    return tasks.filter(task => task.date.seconds * 1000 === +(date ?? 0));
  }, [date, tasks]);

  const [logOutRequest] = useRequest(logOut);

  return (
    <PageWrapper>
      <Heading as={Flex} justify="space-between">
        Tasks
        <ColorModeBtn />
      </Heading>
      {userData && <Button onClick={logOutRequest}>Logout</Button>}
      <DaysList setDate={date => setDate(date)} currDate={date} tasks={tasks} />
      <TasksList tasks={filteredTasks} isLoading={isLoading} error={error} />
      <Button onClick={() => router(`/new/${+(date ?? 0)}`)}>
        New task {date && `(${DateFormatter.ToCalendarDate(date)})`}
      </Button>
    </PageWrapper>
  );
};

export default TasksPage;