import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar";

describe("Test for Navbar component", () => {
  const setup = () => render(<Navbar />, { wrapper: BrowserRouter });
  describe("Layout", () => {
    it("There should be an heading text with the name of the business", () => {
      //Arrange
      setup();
      const title = screen.getByRole("heading", {
        name: /Westcoast Education/i,
      });
      //Act
      //Assert
      expect(title).toBeInTheDocument();
    });
  });

  
});
