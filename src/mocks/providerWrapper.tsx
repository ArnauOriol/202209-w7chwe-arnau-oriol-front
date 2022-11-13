import { Provider } from "react-redux";
import { store } from "../redux/features/store";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
