import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('Greet Render correctly', () => {
    render(<Greet />)
    const textEl = screen.getByText('Hello')
    expect(textEl).toBeInTheDocument()
})