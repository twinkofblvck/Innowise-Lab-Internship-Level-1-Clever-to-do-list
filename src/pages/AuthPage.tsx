import { Button, Heading, Input, Spinner } from "@chakra-ui/react";
import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormInput } from "@/components/generic";
import { Form } from "@/components/generic";
import { useRequest } from "@/hooks";
import { IAuthPageProps } from "@/pages";

const AuthPage: FC<IAuthPageProps> = ({ title, action }) =>
{
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const authenticate = async(e: FormEvent) =>
  {
    e.preventDefault();

    const cleanEmail = email.trim(),
      cleanPass = pass.trim();

    if (!cleanEmail || !cleanPass) return;

    await action(cleanEmail, cleanPass);
  };

  const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setEmail(e.target.value), []);

  const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setPass(e.target.value), []);

  const [authRequest, isLoading] = useRequest<[FormEvent]>(authenticate);

  const { t } = useTranslation();

  return (
    <Form onSubmit={authRequest}>
      <Heading>{title}</Heading>
      <FormInput
        data-testid="auth_email"
        element={props => <Input {...props} />}
        id="email"
        label={t("authForm.email")}
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      <FormInput
        data-testid="auth_password"
        element={props => <Input {...props} />}
        id="pass"
        label={t("authForm.password")}
        type="password"
        value={pass}
        onChange={onPasswordChange}
      />
      <Button type="submit">{t("authForm.submit")}</Button>
      {isLoading && <Spinner />}
    </Form>
  );
};

export default AuthPage;