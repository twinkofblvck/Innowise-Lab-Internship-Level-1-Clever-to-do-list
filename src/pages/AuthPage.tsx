import { Button, Heading, Input, Spinner } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import FormInput from "../components/generic/FormInput";
import Form from "../components/ui/Form";
import useRequest from "../hooks/useRequest";

interface IAuthPageProps
{
  title: string;
  action: (email: string, pass: string) => Promise<void>;
}

const AuthPage: FC<IAuthPageProps> = ({ title, action }) =>
{
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function authenticate(e: FormEvent)
  {
    e.preventDefault();

    const cleanEmail = email.trim(),
      cleanPass = pass.trim();

    if (!cleanEmail || !cleanPass) return;

    await action(cleanEmail, cleanPass);
  }

  const [authRequest, isLoading] = useRequest<[FormEvent]>(authenticate);

  return (
    <Form onSubmit={authRequest}>
      <Heading>{title}</Heading>
      <FormInput
        element={props => <Input {...props} />}
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <FormInput
        element={props => <Input {...props} />}
        id="pass"
        label="Password"
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <Button type="submit">Submit</Button>
      {isLoading && <Spinner />}
    </Form>
  );
};

export default AuthPage;