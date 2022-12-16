import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IPageWrapperProps
{
  children: ReactNode;
}

const PageWrapper: FC<IPageWrapperProps> = ({ children }) =>
{
  return (
    <Flex direction="column" h="100vh" gap={10} p={5}>
      {children}
    </Flex>
  );
};

export default PageWrapper;