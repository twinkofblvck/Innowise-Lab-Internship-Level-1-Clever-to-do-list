import { FirestoreError } from "firebase/firestore";
import { IListTask } from "@/types";

export interface ITaskEditorProps
{
  initialTitle?: string;
  initialDesc?: string;
  action: (title: string, desc: string) => Promise<void>;
  btnContent: string;
  headingContent: string;
}

export interface ITaskItemProps
{
  task: IListTask;
}

export interface ITasksListProps
{
  tasks: IListTask[];
  isLoading: boolean;
  error: FirestoreError | undefined;
}