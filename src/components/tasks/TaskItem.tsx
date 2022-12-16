import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IListTask } from "../../types/task";
import useRequest from "../../hooks/useRequest";
import server from "../../server/server";

interface ITaskItemProps
{
  task: IListTask;
}

const TaskItem: FC<ITaskItemProps> = ({ task }) =>
{
  const router = useNavigate();

  const [doneToggleRequest] = useRequest(() => server.tasks.Update(task.id, { done: !task.done }));

  return (
    <Flex
      key={task.id}
      cursor="pointer"
      gap={2}
      my={1}
      _hover={{borderColor: "orange.400"}}
    >
      <Checkbox
        colorScheme="orange"
        borderColor="orange.300"
        size="lg"
        isChecked={task.done}
        onChange={doneToggleRequest}
      />
      <Text
        rounded="md"
        px={2}
        py={1}
        borderWidth={1}
        flex={1}
        onClick={() => router("/task/" + task.id, { state: task })}
      >
        {task.title}
      </Text>
    </Flex>
  );
};

export default TaskItem;