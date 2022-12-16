import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, IconButton, Input, Spinner, Textarea } from "@chakra-ui/react";
import { FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import FormInput from "../generic/FormInput";
import Form from "../ui/Form";

interface ITaskEditorProps
{
  initialTitle?: string;
  initialDesc?: string;
  action: (title: string, desc: string) => Promise<void>;
  btnContent: string;
  headingContent: string;
}

const TaskEditor: FC<ITaskEditorProps> = (p) =>
{
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const router = useNavigate();

  useEffect(() =>
  {
    if (p.initialDesc) setDesc(p.initialDesc);
    if (p.initialTitle) setTitle(p.initialTitle);
  }, [p.initialTitle, p.initialDesc]);

  async function executeAction(e: FormEvent)
  {
    e.preventDefault();

    const cleanTitle = title.trim();
    const cleanDesc = desc.trim();

    if (!cleanTitle || !cleanDesc) throw new Error("Some fields lack content");

    await p.action(cleanTitle, cleanDesc);
    router("/");
  }

  const [actionRequest, isLoading] = useRequest<[FormEvent]>(executeAction);

  return (
    <Form onSubmit={actionRequest}>
      <Heading as={Flex} gap={2}>
        <IconButton
          variant="outline"
          aria-label="back to tasks"
          onClick={() => router("/")}
          icon={<ArrowLeftIcon />}
        />
        {p.headingContent}
      </Heading>
      <FormInput
        element={props => <Input {...props} />}
        id="title"
        label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <FormInput
        element={props => <Textarea rows={10} {...props} />}
        id="desc"
        label="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <Button type="submit">{p.btnContent}</Button>
      {isLoading && <Spinner />}
    </Form>
  );
};

export default TaskEditor;