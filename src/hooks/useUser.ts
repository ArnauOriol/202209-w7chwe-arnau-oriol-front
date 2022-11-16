import { Credentials, JwtCustomPayload, RegisterData } from "../types/types";
import decodeToken from "../utils/decodeToken";
import { useAppDispatch } from "../redux/features/hooks";
import { loginUserActionCreator } from "../redux/features/userSlice/userSlice";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_URL_API!;
  const dispatch = useAppDispatch();

  const registerUser = async (userData: RegisterData) => {
    await fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const loginUser = async (userCredentials: Credentials) => {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-type": "application/json",
      },
    });
    const { accessToken } = await response.json();
    const userLogging: JwtCustomPayload = decodeToken(accessToken);
    dispatch(
      loginUserActionCreator({
        ...userLogging,
        username: userCredentials.username,
        token: accessToken,
      })
    );
    window.localStorage.setItem("token", accessToken);
  };

  return { registerUser, loginUser };
};

export default useUser;
