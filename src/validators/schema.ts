import * as yup from "yup";

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const userRegistrationSchema = yup.object().shape({
  username: yup.string().min(5).required("Required"),
  password: yup
    .string()
    .matches(passwordPattern, {
      message:
        "Must be 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
    })
    .required("Required"),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});
