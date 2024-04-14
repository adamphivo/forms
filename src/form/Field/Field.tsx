import { PropsWithChildren } from "react";
import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";
import { createContext } from "react";

interface FieldProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  name: string;
  label: string;
  description?: string;
}

interface FieldContext {
  name: string;
  label: string;
  description?: string;
}

export const FieldContext = createContext<FieldContext>({
  name: "",
  label: "",
});

export const Field: React.FC<FieldProps> = (props: FieldProps) => {
  const { name, children, description, label, ...rest } = props;

  return (
    <FieldContext.Provider value={{ name, description, label }}>
      <div {...rest} className={classNames("field", rest.className)}>
        {/* Label */}
        <div className="label">{label}</div>
        {/* Error Message */}
        <ErrorMessage
          name={name}
          render={({ message }) => <div className="error">{message}</div>}
        ></ErrorMessage>
        {/* Input */}
        {children}
        {/* Description */}
        {description && <div className="description">{description}</div>}
      </div>
    </FieldContext.Provider>
  );
};
