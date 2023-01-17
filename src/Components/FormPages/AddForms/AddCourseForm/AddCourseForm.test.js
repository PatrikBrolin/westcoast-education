import { render, screen } from "@testing-library/react";

import AddCourseForm from "./AddCourseForm";

//arrange
//act
//assert
describe("Add teacher form", () => {
  const setup = () => render(<AddCourseForm />);
  describe("Page layout", () => {
    it("Form has a heading", () => {
      //arrange
      setup()
      const title = screen.getByRole("heading", {name: /Lägg till kurs/i})
      //act
      //assert
      expect(title).toBeInTheDocument()
    });
    it("Input for coursename", () => {
      //arrange
      setup()
      const coursename = screen.getByLabelText(/Kursnamn/i)
      //act
      //assert
      expect(coursename).toBeInTheDocument()
    });
    it("Input for length", () => {
      //arrange
      setup()
      const length = screen.getByLabelText(/Längd/i)
      //act
      //assert
      expect(length).toBeInTheDocument()
    });
    it("Input for startdate", () => {
      //arrange
      setup()
      const startdate = screen.getByLabelText(/Startdatum/i)
      //act
      //assert
      expect(startdate).toBeInTheDocument()
    });
    it("Input for description", () => {
      //arrange
      setup()
      const description = screen.getByLabelText(/Beskrivning/i)
      //act
      //assert
      expect(description).toBeInTheDocument()
    });
    it("Button to submit form", () => {
      //arrange
      setup()
      const button = screen.getByRole("button", {name: /Skicka/i})
      //act
      //assert
      expect(button).toBeInTheDocument()
    });
  });
});
