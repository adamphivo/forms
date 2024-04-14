import { FieldName, useFormContext } from "react-hook-form";
import { z } from "zod";

import { ErrorMessage } from "@hookform/error-message";

interface FormFieldProps {
  disabled?: boolean | undefined;
  required?: boolean | undefined;
}
// Select

interface Choice {
  label: string;
  value: string;
}

interface SelectProps<T extends z.ZodType> extends FormFieldProps {
  name: FieldName<z.infer<T>>;
  label: string;
  choices: Choice[];
}

export function Select<T extends z.ZodType>({
  name,
  label,
  disabled,
  required,
  choices,
}: SelectProps<T>) {
  const form = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <select disabled={disabled} required={required} {...form.register(name)}>
        {choices.map((choice, index) => (
          <option key={index} value={choice.value}>
            {choice.label}
          </option>
        ))}
      </select>
      <ErrorMessage
        name={name}
        render={({ message }) => <div>{message}</div>}
      />
    </div>
  );
}
