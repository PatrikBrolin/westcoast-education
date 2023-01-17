import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("page layout", () => {
  const setup = () => render(<HomePage />, { wrapper: BrowserRouter });
  it("Page should have a heading", () => {
    //arrange
    setup();
    const heading = screen.getByRole("heading");
    //act
    //assert
    expect(heading).toBeInTheDocument();
  });
  it("Page should have a paragraph giving some information about the school", () => {
    //arrange
    setup();
    const paragraph = screen.getByText(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    );
    //act
    //assert
    expect(paragraph).toBeInTheDocument();
  });
  it("Page should have a button", () => {
    //arrange
    setup();
    const button = screen.getByRole("button", { name: /Hitta kurs/i });
    //act
    //assert
    expect(button).toBeInTheDocument();
  });

  
});
