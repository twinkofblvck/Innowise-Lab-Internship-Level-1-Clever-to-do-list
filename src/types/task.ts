export interface ITask
{
  title: string;
  desc: string;
  done: boolean;
}

export interface IExternalTask extends ITask
{
  date: Date;
}

export interface IInternalTask extends ITask
{
  date: { seconds: number };
}

export interface IListTask extends IInternalTask
{
  id: string;
}

export type t_TaskData = { [x in keyof ITask]?: ITask[x] };
