import { useState } from "react";
import useUser from "../../hooks/useUser";
import { UserRegisterData } from "../../types/types";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();
  const initialFormData = {
    username: "",
    password: "",
    email: "",
    picture: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const submitedData: UserRegisterData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    registerUser(submitedData);
  };

  return (
    <>
      <span className="register-form__logo">fakebook</span>
      <form onSubmit={(event) => handleSubmit(event)}>
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
        <div className="register-form__input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="register-form__field"
            aria-label="email-input"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
          <label className="register-form__label" htmlFor="email"></label>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
