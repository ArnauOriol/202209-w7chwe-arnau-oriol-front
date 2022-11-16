import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProviderWrapper from "../../mocks/providerWrapper";
import LoginForm from "./LoginForm";

const mockRegisterAction = jest.fn();

jest.mock("../../hooks/useUser", () => {
  return () => ({
    loginUser: mockRegisterAction,
  });
});

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should 2 input elements", () => {
      render(<LoginForm />, { wrapper: ProviderWrapper });

      const usernameInput = screen.queryByRole("textbox");
      const passwordInput = screen.queryByLabelText("password-input");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("When its button 'Login' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const buttonText = "Login";

      render(<LoginForm />, { wrapper: ProviderWrapper });

      const usernameInput = screen.queryByLabelText("username-input")!;
      await userEvent.type(usernameInput, "arnau");
      const passwordInput = screen.queryByLabelText("password-input")!;
      await userEvent.type(passwordInput, "arnau");

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(buttonText);
      expect(mockRegisterAction).toHaveBeenCalled();
    });
  });
});
