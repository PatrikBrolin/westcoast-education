import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card component test", () => {
  it("There should only be one element in the component", () => {
    //arrange
    render(<Card />);
    const div = screen.getByTestId("card");
    //act
    //assert
    expect(div).toBeInTheDocument();
  });
});
