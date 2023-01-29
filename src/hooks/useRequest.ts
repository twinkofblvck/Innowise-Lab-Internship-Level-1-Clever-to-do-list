import { useState } from "react";
import { useError } from "@/hooks";

type t_AnyAsyncFunction<T extends any[]> = (...args: T) => Promise<void>;
type t_RequestHookReturnType<T extends any[]> = [(...args: T) => Promise<void>, boolean];

const useRequest = <T extends any[]>(fn: t_AnyAsyncFunction<T>): t_RequestHookReturnType<T> =>
{
  const [isLoading, setIsLoading] = useState(false);

  const errNotify = useError();

  const request = async(...args: any) =>
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
  };

  return [request, isLoading];
};

export default useRequest;