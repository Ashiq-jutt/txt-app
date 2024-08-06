import * as yup from "yup";
import { ObjectSchema } from "yup";

export const LoginFormValidation: ObjectSchema<{
  email: string;
  password: string;
}> = yup.object().shape({
  email: yup.string().required("Email is required.").email("Invalid Email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password too short"),
});

export const ForgotFormValidation: ObjectSchema<{
  email: string;
}> = yup.object().shape({
  email: yup.string().required("Email is required.").email("Invalid Email"),
});

export const SignUpFormValidation: ObjectSchema<{
  fullName: string;
  email: string;
  phone: number;
  password: string;
  confirmPassword: string;
}> = yup.object().shape({
  fullName: yup.string().required("Full name is required.").trim(),
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid Email")
    .trim(),
  phone: yup
    .string()
    .required("Phone number is required.")
    .min(11, "Phone number too short")
    .trim(),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password too short"),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm password is required.")
    .min(6, "Password too short")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const ResetFormValidation: ObjectSchema<{
  password: string;
  confirmPassword: string;
}> = yup.object().shape({
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password too short"),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm password is required.")
    .min(6, "Password too short")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
