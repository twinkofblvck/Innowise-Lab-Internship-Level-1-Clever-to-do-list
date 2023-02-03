import { FormLabel } from "@chakra-ui/react";
import { FC, memo } from "react";
import { IFormInputProps } from "@/components/generic";

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