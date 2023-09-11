import { FunctionComponent } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputField: FunctionComponent<InputFieldProps> = (props) => {
  return <input {...props} />;
};

export default InputField;
