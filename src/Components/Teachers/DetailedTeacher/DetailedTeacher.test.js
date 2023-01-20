import {render, screen } from '@testing-library/react'
import DetailedTeacher from './[slug]'

describe('DetailedTeacher component', () => {
    const setup = () => render(<DetailedTeacher />)
    it("There should be a image of the teacher", () => {
        //arrange
        setup()
        const image = screen.getByAltText("teacher")
        //act

        //assert
        expect(image).toBeInTheDocument()
    })
})