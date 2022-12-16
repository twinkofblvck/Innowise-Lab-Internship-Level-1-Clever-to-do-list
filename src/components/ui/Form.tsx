import { Flex } from "@chakra-ui/react";
import { FC, FormEventHandler, ReactNode } from "react";

interface IFormProps
{
  onSubmit: FormEventHandler;
  children: ReactNode;
}

const Form: FC<IFormProps> = ({ onSubmit, children }) =>
{
  return (
    <Flex as="form" onSubmit={onSubmit} gap={5} direction="column">
      {children}
    </Flex>
  );
};

export default Form;