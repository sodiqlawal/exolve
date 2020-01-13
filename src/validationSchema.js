import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  userName: Yup.string()
    .max(255, "Must be shorter than 255")
    .required("Must enter a Username"),

  password: Yup.string()
    .min(4, "Must be atleast 4 characters")
    .max(255, "Cannot exceed 255 characters")
    .required("Must enter a password"),

  // loginPassword: Yup.string()
  //   .required("required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),

  email: Yup.string()
    .email("must be a valid email address")
    .max(255, "Must be shorter than 255")
    .required("Must enter an email")
})


export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("must be a valid email address")
    .max(255, "Must be shorter than 255")
    .required("Must enter an email"),

  loginPassword: Yup.string()
    .required("required"),
})
