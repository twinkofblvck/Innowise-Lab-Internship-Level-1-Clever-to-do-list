import { FormLabel } from "@chakra-ui/react";
import { ChangeEvent, FC, HTMLInputTypeAttribute, memo, ReactElement } from "react";

interface IFormInputElementProps
{
  id: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface IFormInputProps extends IFormInputElementProps
{
  element: (props: IFormInputElementProps) => ReactElement,
  label: string;
}

const FormInput: FC<IFormInputProps> = memo(({ label, element, ...props }) =>
{
  return (
    <>
      <FormLabel htmlFor={props.id}>{label}</FormLabel>
      {element(props)}
    </>
  );
});

export default FormInput;