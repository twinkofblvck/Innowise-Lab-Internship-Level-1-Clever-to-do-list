import { FC, useEffect, useMemo } from "react";
import { BrowserRouter, Link as RouteLink, Navigate, Route, Routes } from "react-router-dom";
import { TasksPage, AuthPage, NewTaskPage, UpdateTaskPage } from "@/pages";
import { useAuthState } from "react-firebase-hooks/auth";
import { server } from "@/server";
import { useError } from "@/hooks";
import { Link, Spinner } from "@chakra-ui/react";
import { WithLinkText } from "@/components/generic";
import { useAuth } from "@/hooks";
import { Trans, useTranslation } from "react-i18next";

const App: FC = () =>
{
  const [userData, isLoading, error] = useAuthState(server.auth.ref);
  const errNotify = useError();

  const { logIn, logOut, signUp } = useAuth();

  const LoginLink = useMemo(() => (
    <Trans i18nKey="signupPage.link">
      Or <Link as={RouteLink} to="/login" color="teal.500">login</Link> with an existing account
    </Trans>
  ), []);

  const SignupLink = useMemo(() => (
    <Trans i18nKey="loginPage.link">
      Or <Link as={RouteLink} to="/signup" color="teal.500">sign up</Link> for free
    </Trans>
  ), []);

  const { t } = useTranslation();

  useEffect(() =>
  {
    if (error) errNotify(error.message);
  }, [error]);

  return isLoading ? (
    <Spinner
      pos="absolute"
      left="calc(50vw - 100px)"
      top="calc(50vh - 100px)"
      w="200px"
      h="200px"
    />) : (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={userData ?
          <Navigate to="/" /> :
          WithLinkText(<AuthPage title={t("loginPage.title")} action={logIn} />, SignupLink)} />

        <Route path="/signup" element={userData ?
          <Navigate to="/" /> :
          WithLinkText(<AuthPage title={t("signupPage.title")} action={signUp} />, LoginLink)} />

        <Route path="/" element={userData ?
          <TasksPage logOut={logOut} userData={userData} /> :
          <Navigate to="/login" />} />

        <Route path="/new/:date" element={userData ?
          <NewTaskPage /> :
          <Navigate to="/login" />} />

        <Route path="/task/:id" element={userData ?
          <UpdateTaskPage /> :
          <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;