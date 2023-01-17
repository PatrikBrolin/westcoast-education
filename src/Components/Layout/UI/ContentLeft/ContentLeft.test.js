import { render, screen } from "@testing-library/react";

import ContentLeft from "./ContentLeft";

describe("ContentLeft component test", () => {
  it("There should only be one element in the component", () => {
    //arrange
    render(<ContentLeft />);
    const div = screen.getByTestId("contentLeft");
    //act
    //assert
    expect(div).toBeInTheDocument();
  });
});
