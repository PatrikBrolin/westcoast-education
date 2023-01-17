import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Courses from "./Courses";

describe("Courses component", () => {
  const setup = () => render(<Courses />, { wrapper: BrowserRouter });
  describe("Layout", () => {

    it('There should be a header with the text "Aktuella kurser"', () => {
         //arrange
      setup();
      const title = screen.getByRole("heading", {name: /Aktuella kurser/i})
      
      //act
      //assert
      expect(title).toBeInTheDocument()
    })
    it("component should render a table", () => {
      //arrange
      setup();
      const tableHeader = screen.getAllByRole("columnheader", {
        Name: /Kurs, Kursnummer, Längd, Startdatum /i,
      });
      
      //act
      //assert
      expect(tableHeader.length).toBe(4);
    });
  });
  it("Page should have a button with the text 'Lägg till nu kurs'", () => {
    //arrange
    setup();
    const tableHeader = screen.getAllByRole("columnheader", {
      Name: /Kurs, Kursnummer, Längd, Startdatum /i,
    });
    
    //act
    //assert
    expect(tableHeader.length).toBe(4);
  })
});
