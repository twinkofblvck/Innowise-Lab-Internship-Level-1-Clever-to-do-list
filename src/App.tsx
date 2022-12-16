import { FC, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import { useAuthState } from "react-firebase-hooks/auth";
import server from "./server/server";
import AuthPage from "./pages/AuthPage";
import useError from "./hooks/useError";
import NewTaskPage from "./pages/NewTaskPage";
import UpdateTaskPage from "./pages/UpdateTaskPage";
import withSignupLink from "./components/auth/withSignupLink";
import withLoginLink from "./components/auth/withLoginLink";
import { Spinner } from "@chakra-ui/react";

const App: FC = () =>
{
  const [userData, isLoading, error] = useAuthState(server.auth.ref);
  const errNotify = useError();

  function signUp(email: string, pass: string)
  {
    return server.auth.SignUp(email, pass);
  }

  function logIn(email: string, pass: string)
  {
    return server.auth.LogIn(email, pass);
  }

  function logOut()
  {
    return server.auth.LogOut();
  }

  useEffect(() =>
  {
    if (error) errNotify(error.message);
  }, [error]);

  if (isLoading) return <Spinner
    pos="absolute"
    left="calc(50vw - 100px)"
    top="calc(50vh - 100px)"
    w="200px"
    h="200px"
  />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={userData ?
          <Navigate to="/" /> :
          withSignupLink(<AuthPage title="Login" action={logIn} />)} />

        <Route path="/signup" element={userData ?
          <Navigate to="/" /> :
          withLoginLink(<AuthPage title="Sign Up" action={signUp} />)} />

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