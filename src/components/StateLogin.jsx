import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const isEmailValid = !enteredValues.email.includes("@") && didEdit.email;
  const isPasswordValid =
    didEdit.password && enteredValues.password.trim().length > 5;

  function handleSubmit(event) {
    event.preventDefault();

    setEnteredValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(params) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Ëmail"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          error={!isEmailValid && "Please enter a valid email!"}
        />

        <Input
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")}
          error={!isPasswordValid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
