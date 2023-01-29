import { User } from "firebase/auth";

export interface IAuthPageProps
{
  title: string;
  action: (email: string, pass: string) => Promise<void>;
}

export interface ITasksPageProps
{
  logOut: () => Promise<void>;
  userData: User | null | undefined;
}