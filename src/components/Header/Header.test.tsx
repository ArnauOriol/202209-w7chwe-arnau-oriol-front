import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show a header of level 1 with fakebook on it", () => {
      const brand = "fakebook";

      render(<Header />);
      const heading = screen.queryByRole("heading", { level: 1, name: brand });

      expect(heading).toBeInTheDocument();
    });
  });
});
