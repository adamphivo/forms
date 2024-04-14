import * as React from "react";
import { useFormContext } from "react-hook-form";
import { useFieldContext } from "../../hooks/useFieldContext";

interface InputProps<>extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  const { name } = useFieldContext();
  const { ...rest } = props;
  const form = useFormContext();

  return <input {...rest} {...form.register(name)}></input>;
};
