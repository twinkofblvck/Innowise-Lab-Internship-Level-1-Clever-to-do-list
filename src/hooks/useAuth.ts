import { server } from "@/server";

const useAuth = () => ({
  logIn: (email: string, password: string) => server.auth.LogIn(email, password),
  signUp: (email: string, password: string) => server.auth.SignUp(email, password),
  logOut: () => server.auth.LogOut()
});

export default useAuth;