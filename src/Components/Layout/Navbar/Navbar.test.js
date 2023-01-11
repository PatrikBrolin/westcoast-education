import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";

describe("Layout", () => {
	const setup = () => render(<Navbar />);
	it("There should be an heading text with the name of the business", () => {
		//Arrange
		setup();
		const title = screen.getByRole("heading", {
			name: /Westcoast education/i,
		});
		//Act
		//Assert
		expect(title).toBeInTheDocument();
	});
});
