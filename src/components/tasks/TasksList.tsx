import { Box, Spinner, Text } from "@chakra-ui/react";
import { FC } from "react";
import { TaskItem } from "@/components/tasks";
import { ITasksListProps } from "@/components/tasks";
import { useTranslation } from "react-i18next";

const TasksList: FC<ITasksListProps> = ({ tasks, isLoading, error }) =>
{
  const { t } = useTranslation();

  return (
    <Box data-testid="tasks_list" flex="1" overflowY="auto">
      {error && <Text color="red.700">{error.message}</Text>}
      {isLoading ? <Spinner data-testid="spinner" /> :
        tasks.length ? tasks.map(task =>
          <TaskItem key={task.id} task={task} />
        ) : t("tasksPage.noTasks")}
    </Box>
  );
};

export default TasksList;