import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { IPageWrapperProps } from "@/components/generic";

const PageWrapper: FC<IPageWrapperProps> = ({ children }) =>
{
  return (
    <Flex data-testid="page_wrapper" direction="column" h="100vh" gap={10} p={5}>
      {children}
    </Flex>
  );
};

export default PageWrapper;