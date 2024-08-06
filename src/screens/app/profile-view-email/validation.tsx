import * as yup from "yup";
import { ObjectSchema } from "yup";

export const ResetFormValidation: ObjectSchema<{
  changePassword: string;
  password: string;
  confirmPassword: string;
}> = yup.object().shape({
  changePassword: yup
    .string()
    .required("Change Password is required.")
    .min(6, "Change Password too short"),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password too short"),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm password is required.")
    .min(6, "Confirm password too short")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
