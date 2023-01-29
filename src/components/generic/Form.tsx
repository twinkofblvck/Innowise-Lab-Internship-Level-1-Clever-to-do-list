import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { IFormProps } from "@/components/generic";

const Form: FC<IFormProps> = ({ onSubmit, children }) =>
{
  return (
    <Flex data-testid="form" as="form" onSubmit={onSubmit} gap={5} direction="column">
      {children}
    </Flex>
  );
};

export default Form;