import { Text } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import { PageWrapper } from "@/components/generic";

const WithLinkText = (Element: ReactElement, LinkText: ReactNode) =>
{
  return (
    <PageWrapper>
      {Element}
      <Text>
        {LinkText}
      </Text>
    </PageWrapper>
  );
};

export default WithLinkText;