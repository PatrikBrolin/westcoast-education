import {render, screen } from '@testing-library/react'

import DetailedCourse from './[slug]'

describe('Detailed Course component', () => {
    const setup = () => render(<DetailedCourse />)
    describe('Page layout', () => {
        it('Page has a heading', () => {
            //arrange
            setup()
            const title = screen.getByRole("heading", {level: 2})
            //act
            //assert
            expect(title).toBeInTheDocument()
        })

        it('Page has a name heading', () => {
            //arrange
            setup()
            const title = screen.getByRole("heading", {name: "Kurs"})
            //act
            //assert
            expect(title).toBeInTheDocument()
        })
        it('Page has a coursenumber heading', () => {
            //arrange
            setup()
            const title = screen.getByRole("heading", {name: "Kursnummer"})
            //act
            //assert
            expect(title).toBeInTheDocument()
        })
        it('Page has a length heading', () => {
            //arrange
            setup()
            const title = screen.getByRole("heading", {name: "Längd"})
            //act
            //assert
            expect(title).toBeInTheDocument()
        })
        it('Page has a startdate heading', () => {
            //arrange
            setup()
            const title = screen.getByRole("heading", {name: "Startdatum"})
            //act
            //assert
            expect(title).toBeInTheDocument()
        })
        it('Page has a description heading', () => {
            //arrange
            setup()
            const title = screen.getByRole("heading", {name: "Beskrivning"})
            //act
            //assert
            expect(title).toBeInTheDocument()
        })

        
    })
})
