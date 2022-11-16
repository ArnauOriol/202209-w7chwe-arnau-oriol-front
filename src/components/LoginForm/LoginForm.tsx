import { useState } from "react";
import useUser from "../../hooks/useUser";
import { Credentials } from "../../types/types";
import Button from "../Button/Button";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const intialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: Credentials = {
      username: formData.username,
      password: formData.password,
    };
    loginUser(formDataToSubmit);
  };

  return (
    <RegisterFormStyled className="container">
      <span className="register-form__logo">fakebook</span>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="register-form__wrapper"
      >
        <div className="register-form__input">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="register-form__field"
            aria-label="username-input"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
          <label className="register-form__label" htmlFor="username"></label>
        </div>
        <div className="register-form__input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="register-form__field"
            aria-label="password-input"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
          <label className="register-form__label" htmlFor="password"></label>
        </div>
        <Button text="Login" />
      </form>
    </RegisterFormStyled>
  );
};

export default LoginForm;
