import { Container, Flex } from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";
import { Calendar } from "@/utils";
import { IDaysListProps } from "@/components/calendar";
import { DaysListItem } from "@/components/calendar";

const DaysList: FC<IDaysListProps> = ({ setDate, currDate, tasks }) =>
{
  const [list, setList] = useState<Date[]>([]);
  const [page, setPage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const observable = useRef<HTMLDivElement>(null);

  const observer = useRef<IntersectionObserver>();

  useEffect(() =>
  {
    setList(list => list.concat(...Calendar.MonthAhead(page)));

    if (!loaded) setLoaded(true);
  }, [page]);

  useEffect(() =>
  {
    if (!list.length || page !== 0) return;

    setDate(list[0]);
  }, [list, page]);


  useEffect(() =>
  {
    if (!observable.current) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries =>
    {
      if (entries[0].isIntersecting && loaded) setPage(p => p + 1);
    });

    observer.current.observe(observable.current);
  }, [loaded]);

  return (
    <Flex data-testid="dayslist" w="full" h="120px" overflowX="auto" gap={1} p="1">
      {list.map(date =>
        <DaysListItem
          key={date.getTime()}
          currDate={currDate}
          date={date}
          setDate={setDate}
          tasks={tasks.filter(task => task.date.seconds * 1000 === +date)}
        />)}
      <Container h="full" w="1px" ref={observable}></Container>
    </Flex>
  );
};

export default DaysList;