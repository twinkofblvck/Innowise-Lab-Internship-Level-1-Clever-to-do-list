import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IDaysListItemProps } from "@/components/calendar";
import { DayMarker } from "@/components/calendar";

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

  const { t } = useTranslation();

  return (
    <Flex
      data-testid="dayslist_item"
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
      <Text fontWeight="bold">{t("tasksPage.calendar.day", { date })}</Text>
      <Text fontSize="xs" >{t("tasksPage.calendar.month", { date })}</Text>
      <Box>
        {done && <DayMarker done={true} />}
        {undone && <DayMarker done={false} />}
      </Box>
    </Flex>
  );
};

export default DaysListItem;