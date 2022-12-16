import { useState } from "react";
import useError from "./useError";

type t_ArgType<T extends any[]> = (...args: T) => Promise<void>;
type t_ReturnType<T extends any[]> = [(...args: T) => Promise<void>, boolean];

export default function useRequest<T extends any[]>(fn: t_ArgType<T>): t_ReturnType<T>
{
  const [isLoading, setIsLoading] = useState(false);

  const errNotify = useError();

  async function request(...args: any)
  {
    try
    {
      setIsLoading(true);
      await fn(...args);
    }
    catch (e: any)
    {
      errNotify(e.message);
    }
    finally
    {
      setIsLoading(false);
    }
  }

  return [request, isLoading];
}