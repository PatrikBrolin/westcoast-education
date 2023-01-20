import { render, screen } from "@testing-library/react";

import Add from "./Add";

describe("Add component test", () => {
  const setup = () => render(<Add />);
  it("Button for adding teacher", () => {
    //arrange
    setup();
    const teacherButton = screen.getByRole("button", {
      name: /Lägg till lärare/i,
    });
    //act

    //assert
    expect(teacherButton).toBeInTheDocument();
  });

  it("Button for adding course", () => {
    //arrange
    setup();
    const courseButton = screen.getByRole("button", {
      name: /Lägg till kurs/i,
    });
    //act

    //assert
    expect(courseButton).toBeInTheDocument();
  });
});
