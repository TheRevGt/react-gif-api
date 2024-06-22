import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategoty } from "../../src/components/AddCategoty"

describe('Test in AddCategory', ()=>{
    test('Test change value in input', ()=>{
        render( <AddCategoty onNewCategory={ () => {}} /> )
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value: 'Saitama'}})
        expect(input.value).toBe('Saitama')
        // screen.debug()
    })
})