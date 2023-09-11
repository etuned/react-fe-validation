import { FormikValues, useFormik } from "formik";
import { userRegistrationSchema } from "../validators/schema";

import InputField from "./shared/InputField";

import "./UserRegistration.css";

const onSubmit = async (
  values: FormikValues,
  actions: { resetForm: () => void }
) => {
  // This would be a call to the registration endpoint
  await new Promise((resolve) => setTimeout(resolve, 500));
  alert(
    `User Information: ${JSON.stringify(values, null, 2)}                
    the next step is to hash the password!`
  );
  actions.resetForm();
};

export function UserRegistration() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    dirty,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: userRegistrationSchema,
    onSubmit,
  });

  const VALUES_ARE_EMPTY =
    values.username === "" ||
    values.password === "" ||
    values.confirmedPassword === "";

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        id="username"
        name="username"
        type="text"
        label="Username"
        errorMessage={
          errors.username &&
          touched.username && <p className="error">{errors.username}</p>
        }
        className={
          errors.username && touched.username ? "input-error" : undefined
        }
      />

      <InputField
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        id="password"
        type="password"
        label="Password"
        helpDescription="Passwords need 6 characters with 1 lowercase, 1 uppercase and, 1 Number"
        errorMessage={
          errors.password &&
          touched.password && <p className="error">{errors.password}</p>
        }
        className={
          errors.password && touched.password ? "input-error" : undefined
        }
      />

      <InputField
        value={values.confirmedPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        name="confirmedPassword"
        id="confirmedPassword"
        type="password"
        label="Confirm Password"
        errorMessage={
          errors.confirmedPassword &&
          touched.confirmedPassword && (
            <p className="error">{errors.confirmedPassword}</p>
          )
        }
        className={
          errors.confirmedPassword && touched.confirmedPassword
            ? "input-error"
            : undefined
        }
      />

      <div className="buttons-container">
        <button
          disabled={(!isValid && dirty) || VALUES_ARE_EMPTY || isSubmitting}
          type="submit"
        >
          Submit
        </button>
        <button onClick={handleReset} type="reset">
          Reset
        </button>
      </div>
    </form>
  );
}
