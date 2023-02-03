import { ChangeEvent, FormEventHandler, HTMLInputTypeAttribute, ReactElement, ReactNode } from "react";

export interface IFormInputElementProps
{
  id: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface IFormInputProps extends IFormInputElementProps
{
  element: (props: IFormInputElementProps) => ReactElement,
  label: string;
}

export interface IFormProps
{
  onSubmit: FormEventHandler;
  children: ReactNode;
}

export interface IPageWrapperProps
{
  children: ReactNode;
}