import { ReactElement } from "react";
import { Link, Text } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import PageWrapper from "../ui/PageWrapper";

export default function withSignupLink(Element: ReactElement)
{
  return (
    <PageWrapper>
      {Element}
      <Text>
        Or <Link as={RouteLink} to="/signup" color="teal.500">sign up</Link> for free
      </Text>
    </PageWrapper>
  );
}