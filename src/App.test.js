import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';



//arrange
//act
//assert
describe("Routing", () => {
  const setup = () => render(<App />);
  it("You should come to the correct page when clicking on a link", async () => {
    //Arrange
    setup();

    //Act
    expect(screen.getByRole("heading", {name: /Lorem Ipsum/i})).toBeInTheDocument();

    //test that lärare link is working
    await userEvent.click(screen.getByText(/Lärare/i));
    expect(screen.getByText(/Anställda lärare/i)).toBeInTheDocument();

    //test that link to startpage is working
    await userEvent.click(screen.getByText(/Westcoast Education/i));
    expect(screen.getByRole("heading", {name: /Lorem Ipsum/i})).toBeInTheDocument();

    //test that kurser link is working
    await userEvent.click(screen.getByText(/Kurser/i));
    expect(screen.getByText(/Aktuella kurser/i)).toBeInTheDocument();
    
    //Assert
  });
});
