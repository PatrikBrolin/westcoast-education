import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Teachers from "./Teachers";

describe("Teachers component", () => {
  const setup = () => render(<Teachers />, { wrapper: BrowserRouter } );
  describe("Layout for component", () => {
    it('table should have columns "Firstname", "Lastname", "SSN", "E-mail", "Phonenumber"', () => {
      //arrange
      setup();
      const tableHeader = screen.getAllByRole("columnheader", {
        Name: /Förnamn, Efternamn, Personnummer, E-mail, Telefonnummer /i,
      });
      expect(tableHeader.length).toBe(5);
      //act
      //assert
    });

    it('Page should have a button with the text "Lägg till ny lärare"', () => {
     //arrange
     setup();
     const button = screen.getByRole("button", {name: /Lägg till ny lärare/i})
  
     //act
     //assert
     expect(button).toBeInTheDocument()
    })
  });

  describe("Teachers table api request", () => {
    it("renders a table of teachers if request is successfull", async () => {
      setup();

      window.fetch = jest.fn();
      window.fetch.mockResolvedValueOnce({
        json: async () => [
          {
            firstname: "Salma",
            lastname: "Engström",
            ssn: "940523-7505",
            phonenumber: "0706070962",
            email: "SalmaEngstrom@gmail.se",
          },
        ],
      });

      const teachersList = await screen.findAllByRole('rowgroup');

      expect(teachersList).not.toHaveLength(1)
    });
  });
});
