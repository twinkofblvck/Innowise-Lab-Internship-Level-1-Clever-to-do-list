import { useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const useError = () =>
{
  const toast = useToast();

  const { t } = useTranslation();

  return (message: string) => toast(
    {
      status: "error",
      title: t("error.title"),
      description: message,
      duration: 2000,
      isClosable: true,
      variant: "subtle",
      position: "bottom"
    }
  );
};

export default useError;