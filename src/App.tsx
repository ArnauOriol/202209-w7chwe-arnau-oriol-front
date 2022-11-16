import { Route, Routes } from "react-router-dom";
import ExitRoute from "./components/ExitRoute/ExitRoute";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useAppSelector } from "./redux/features/hooks";

const App = () => {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/users/signup"
          element={
            <ExitRoute isLogged={isLogged}>
              <RegisterPage />
            </ExitRoute>
          }
        />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
