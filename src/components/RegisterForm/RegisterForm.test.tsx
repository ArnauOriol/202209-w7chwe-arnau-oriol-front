import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProviderWrapper from "../../mocks/providerWrapper";
import RegisterForm from "./RegisterForm";

const mockRegisterAction = jest.fn();

jest.mock("../../hooks/useUser", () => {
  return () => ({
    registerUser: mockRegisterAction,
  });
});

describe("Given a RegisterForm component", () => {
  describe("When it's rendered", () => {
    test("The it should show 3 input elements", () => {
      const expectedInputs = 2;

      render(<RegisterForm />, { wrapper: ProviderWrapper });

      const formInputs = screen.queryAllByRole("textbox");
      const passwordInput = screen.queryByLabelText("password-input");

      expect(formInputs).toHaveLength(expectedInputs);
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("When its button 'Register' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const buttonText = "Register";

      render(<RegisterForm />, { wrapper: ProviderWrapper });

      const usernameInput = screen.queryByLabelText("username-input")!;
      await userEvent.type(usernameInput, "arnau");
      const emailInput = screen.queryByLabelText("email-input")!;
      await userEvent.type(emailInput, "arna@u.com");
      const passwordInput = screen.queryByLabelText("password-input")!;
      await userEvent.type(passwordInput, "arnau");

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(buttonText);
      expect(mockRegisterAction).toHaveBeenCalled();
    });
  });
});
