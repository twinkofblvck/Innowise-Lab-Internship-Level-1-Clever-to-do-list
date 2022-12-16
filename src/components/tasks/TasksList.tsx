import { Box, Spinner, Text } from "@chakra-ui/react";
import { FirestoreError } from "firebase/firestore";
import { FC } from "react";
import { IListTask } from "../../types/task";
import TaskItem from "./TaskItem";

interface ITasksListProps
{
  tasks: IListTask[];
  isLoading: boolean;
  error: FirestoreError | undefined;
}

const TasksList: FC<ITasksListProps> = ({ tasks, isLoading, error }) =>
{
  return (
    <Box flex="1" overflowY="auto">
      {error && <Text color="red.700">{error.message}</Text>}
      {isLoading ? <Spinner /> :
        tasks.length ? tasks.map(task =>
          <TaskItem key={task.id} task={task} />
        ) : "No tasks yet"}
    </Box>
  );
};

export default TasksList;