import { Badge } from "@chakra-ui/react";
import { FC } from "react";

const COLORS = ["orange.800", "orange.400"];

const DayMarker: FC<{ done: boolean; }> = ({ done }) =>
{
  return (
    <Badge data-testid="daymarker" rounded="full" bg={COLORS[+done]} h="8px" mx="1px" />
  );
};

export default DayMarker;