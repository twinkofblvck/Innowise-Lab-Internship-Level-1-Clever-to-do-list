import { useToast } from "@chakra-ui/react";

export default function useError()
{
  const toast = useToast();

  return function (message: string)
  {
    return toast(
      {
        status: "error",
        title: "ERROR",
        description: message,
        duration: 2000,
        isClosable: true,
        variant: "subtle",
        position: "bottom"
      }
    );
  };
}