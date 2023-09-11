import InputField from "./components/shared/InputField";
// import { TiEyeOutline } from "react-icons/ti";
import { FormikValues, useFormik } from "formik";
import { userRegistrationSchema } from "./validators/schema";

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

export function App() {
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
    <>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <InputField
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          id="username"
          name="username"
          type="text"
        />

        {errors.username && touched.username && (
          <p className="error">{errors.username}</p>
        )}

        <label htmlFor="password">Password</label>
        <InputField
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          id="password"
          type="text"
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <label htmlFor="confirmedPassword">Confirm Password</label>
        <InputField
          value={values.confirmedPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          name="confirmedPassword"
          id="confirmedPassword"
          type="text"
        />

        {errors.confirmedPassword && touched.confirmedPassword && (
          <p className="error">{errors.confirmedPassword}</p>
        )}
        <button
          disabled={(!isValid && dirty) || VALUES_ARE_EMPTY || isSubmitting}
          type="submit"
        >
          Submit
        </button>
        <button onClick={handleReset} type="reset">
          Reset
        </button>
      </form>
    </>
  );
}
