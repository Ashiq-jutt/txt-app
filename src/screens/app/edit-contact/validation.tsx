import * as yup from "yup";
import { ObjectSchema } from "yup";

export const EditContactFormValidation: ObjectSchema<{
  name: string;
  phone: string;
  numberPlace: string;
  notes: string;
}> = yup.object().shape({
  name: yup.string().required("Name is required.").trim(),
  phone: yup
    .string()
    .required(" Number required.")
    .min(11, "Number is too short")
    .trim(),
  numberPlace: yup.string().required(" Number Place is required.").trim(),
  notes: yup.string().required("Notes is required.").trim(),
});
export const EditEmailFormValidation: ObjectSchema<{
  name: string;
  phone: string;
  email: string;
}> = yup.object().shape({
  name: yup.string().required("Name is required.").trim(),
  phone: yup.string().trim(),
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid Email")
    .trim(),
});
