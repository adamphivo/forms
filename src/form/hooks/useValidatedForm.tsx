import { z } from "zod";
import type { DefaultValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function useValidatedForm<T extends z.ZodType>(
  schema: T,
  defaultValues?: DefaultValues<T>
) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
  });

  return form;
}
