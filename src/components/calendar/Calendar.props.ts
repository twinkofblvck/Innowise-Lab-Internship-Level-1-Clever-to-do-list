import { IListTask } from "@/types";

export interface IDaysListProps
{
  setDate: (date: Date) => void;
  currDate: Date | null;
  tasks: IListTask[];
}

export interface IDaysListItemProps
{
  currDate: Date | null;
  date: Date;
  setDate: (date: Date) => void;
  tasks: IListTask[];
}