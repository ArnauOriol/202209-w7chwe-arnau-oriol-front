import { RegisterData } from "../types/types";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_URL_API!;

  const registerUser = async (userData: RegisterData) => {
    await fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return { registerUser };
};

export default useUser;
