import { render, screen } from "@testing-library/react";

import AddTeacherForm from "./AddTeacherForm";

//arrange
//act
//assert
describe("Add teacher form", () => {
  const setup = () => render(<AddTeacherForm />);
  describe("Page layout", () => {
    it("Form has a heading", () => {
      //arrange
      setup()
      const title = screen.getByRole("heading", {name: /Lägg till lärare/i})      //act
      //assert
      expect(title).toBeInTheDocument()
    });
    it("has a firstname input", () => {
      //arrange
      setup();
      const firstname = screen.getByLabelText(/Förnamn/i);
      //act
      //assert
      expect(firstname).toBeInTheDocument();
    });

    it("has a lastname input", () => {
      //arrange
      setup();
      const lastname = screen.getByLabelText(/Efternamn/i);
      //act
      //assert
      expect(lastname).toBeInTheDocument();
    });

    it("has a SSN input", () => {
      //arrange
      setup();
      const SSN = screen.getByLabelText(/Personnummer/i);
      //act
      //assert
      expect(SSN).toBeInTheDocument();
    });

    it("has a phonenumber input", () => {
      //arrange
      setup();
      const phonenumber = screen.getByLabelText(/Telefonnummer/i);
      //act
      //assert
      expect(phonenumber).toBeInTheDocument();
    });

    it("has a email input", () => {
      //arrange
      setup();
      const email = screen.getByLabelText(/Email/i);
      //act
      //assert
      expect(email).toBeInTheDocument();
    });
    it("has a image input", () => {
      //arrange
      setup();
      const img = screen.getByLabelText(/Photo Url/i);
      //act
      //assert
      expect(img).toBeInTheDocument();
    });
    it("has a competence input", () => {
        //arrange
        setup();
        const competence = screen.getByLabelText(/Kompetenser/i);
        //act
        //assert
        expect(competence).toBeInTheDocument();
      });

      it('has a button', () => {
         //arrange
         setup();
         const button = screen.getByRole("button", {name: /Skicka/i});
         //act
         //assert
         expect(button).toBeInTheDocument();
      })
  });
});
