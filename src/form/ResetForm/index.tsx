import { useFormContext } from "react-hook-form";
import type { HTMLAttributes } from "react";

interface FormResetProps extends HTMLAttributes<HTMLButtonElement> {
  element: React.JSX.Element;
}

export const FormReset: React.FC<FormResetProps> = (props: FormResetProps) => {
  const form = useFormContext();

  return (
    <button {...props} onClick={() => form.reset()}>
      {props.element}
    </button>
  );
};
