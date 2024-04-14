import { useFormContext } from "react-hook-form";

interface SubmitFormProps extends React.HTMLAttributes<HTMLButtonElement> {
  element: React.JSX.Element;
}

export const FormSubmit: React.FC<SubmitFormProps> = (props) => {
  const { formState } = useFormContext();
  const { element, ...rest } = props;

  return (
    <button {...rest} type="submit" disabled={!formState.isValid}>
      {element}
    </button>
  );
};
