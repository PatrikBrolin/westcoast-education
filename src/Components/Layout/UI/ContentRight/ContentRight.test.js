import { render, screen } from "@testing-library/react";
import ContentRight from "./ContentRight";


describe("ContentRight component test", () => {
  it("There should only be one element in the component", () => {
    //arrange
    render(<ContentRight />);
    const div = screen.getByTestId("contentRight");
    //act
    //assert
    expect(div).toBeInTheDocument();
  });
});
