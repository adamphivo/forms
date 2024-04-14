import { FieldContext } from "../Field/Field";
import { useContext } from "react";

export function useFieldContext() {
  return useContext(FieldContext);
}
