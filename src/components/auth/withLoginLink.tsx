import { ReactElement } from "react";
import { Link, Text } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import PageWrapper from "../ui/PageWrapper";

export default function withLoginLink(Element: ReactElement)
{
  return (
    <PageWrapper>
      {Element}
      <Text>
        Or <Link as={RouteLink} to="/login" color="teal.500">login</Link> with an existing account
      </Text>
    </PageWrapper>
  );
}