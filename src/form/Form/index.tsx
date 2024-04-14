import { useValidatedForm } from "../hooks/useValidatedForm";
import { z } from "zod";
import { SubmitHandler, DefaultValues, FormProvider } from "react-hook-form";
import { HTMLAttributes, PropsWithChildren } from "react";

interface FormProps<T extends z.ZodType>
  extends PropsWithChildren,
    HTMLAttributes<HTMLFormElement> {
  schema: T;
  handleSubmit: SubmitHandler<z.infer<T>>;
  defaultValues?: DefaultValues<z.infer<T>>;
}

export const Form = <T extends z.ZodType>(props: FormProps<T>) => {
  const { schema, handleSubmit, defaultValues, children, ...rest } = props;
  const form = useValidatedForm(schema, defaultValues);

  async function onSubmit(props: z.infer<T>) {
    await handleSubmit(props);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...rest}>
        {children}
        {form.formState.isSubmitting && <div>loading</div>}
        {form.formState.isSubmitSuccessful && <div>Success</div>}
      </form>
    </FormProvider>
  );
};
