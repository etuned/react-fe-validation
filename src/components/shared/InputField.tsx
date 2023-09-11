import { FunctionComponent, ReactNode } from "react";

import "./inputField.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: ReactNode;
  label?: string;
  helpDescription?: ReactNode;
}

const InputField: FunctionComponent<InputFieldProps> = ({
  label,
  errorMessage,
  helpDescription,
  ...props
}) => {
  return (
    <div>
      {props.id && label && <label htmlFor={props.id}>{label}</label>}
      <input {...props} />
      {errorMessage && <div className="error">{errorMessage}</div>}
      {helpDescription && !errorMessage && (
        <div className="desc">{helpDescription}</div>
      )}

      {!helpDescription && !errorMessage && <div className="is-empty" />}
    </div>
  );
};

export default InputField;
