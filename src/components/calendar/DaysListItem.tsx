import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { IListTask } from "../../types/task";
import DateFormatter from "../../utils/DateFormatter";
import DayMarker from "./DayMarker";

export interface IDaysListItemProps
{
  currDate: Date | null;
  date: Date;
  setDate: (date: Date) => void;
  tasks: IListTask[];
}

const DaysListItem: FC<IDaysListItemProps> = ({ currDate, date, setDate, tasks }) =>
{
  const [done, undone] = useMemo(() =>
  {
    let done = false, undone = false;

    for (let i = 0; i < tasks.length; i++)
    {
      if (tasks[i].done) done = true;
      else undone = true;
      if (done && undone) break;
    }

    return [done, undone];
  }, [tasks]);

  const [day, month] = useMemo(() =>
  {
    return DateFormatter.ToParts(date);
  }, [date]);

  return (
    <Flex
      cursor="pointer"
      rounded="2xl"
      minW="100px"
      direction="column"
      align="center"
      bg={date === currDate ? "Highlight" : "chakra-subtle-bg"}
      key={date.getTime()}
      p={5}
      onClick={() => setDate(date)}
      _hover={{ outline: "orange solid 2px" }}
    >
      <Text fontWeight="bold">{day}</Text>
      <Text fontSize="xs" >{month}</Text>

      <Box>
        {done && <DayMarker done={true} />}
        {undone && <DayMarker done={false} />}
      </Box>
    </Flex>
  );
};

export default DaysListItem;