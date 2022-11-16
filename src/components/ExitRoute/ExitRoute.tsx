import { Navigate } from "react-router-dom";

interface ExitRouteProps {
  children: JSX.Element;
  isLogged: boolean;
}

const ExitRoute = ({ children, isLogged }: ExitRouteProps) => {
  if (isLogged) {
    return <Navigate to={"/home"} />;
  }

  return children;
};

export default ExitRoute;
