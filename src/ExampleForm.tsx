import { z } from "zod";
import { Form } from "./form/Form";
import { FormSubmit } from "./form/SubmitForm";
import { Input } from "./form/Fields/Input";
import { Field } from "./form/Field/Field";

/**
 * 1. Define a validation schema.
 */
export const CreateUserSchema = z.object({
  // Required
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  password: z.string().min(6),
  age: z.coerce.number(),
  email: z.string().email({ message: "Email invalide" }),

  // Optional
  address: z.string().optional().nullable(),
});

/**
 * 2. Infer type from the validation schema
 */
export type CreateUserDTO = z.infer<typeof CreateUserSchema>;

export default function ExampleForm() {
  // The handleSubmit function that will be trigger AFTER validation
  const handleSubmit = async (data: CreateUserDTO) => {
    console.log("Submitting this data :", data);
  };

  return (
    <Form
      schema={CreateUserSchema}
      handleSubmit={handleSubmit}
      defaultValues={{
        firstName: "",
        lastName: "toto",
        password: "123456",
        age: 23,
        email: "adamphivo@gmail.com",
      }}
      className="form"
    >
      <Field name="firstName" label="Prénom" description="Entrez votre prénom">
        <Input placeholder="Prénom" />
      </Field>
      <Field name="lastName" description="Entrez votre nom" label="Nom">
        <Input />
      </Field>
      <Field
        name="password"
        description="Entrez votre mot de passe"
        label="Mot de passe"
      >
        <Input type="password" />
      </Field>
      <Field name="age" description="Entrez votre âge" label="Age">
        <Input type="number" />
      </Field>
      <Field name="email" description="Entrez votre email" label="Email">
        <Input type="email" />
      </Field>
      <FormSubmit element={<div>Valider</div>} />
    </Form>
  );
}
