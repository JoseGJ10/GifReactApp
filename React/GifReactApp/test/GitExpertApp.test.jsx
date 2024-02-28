import { render,screen,fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {

    const inputValue = 'Goku'

    test('Debe aparecer el inputValue, como title ', () => {

        render( <GifExpertApp />);

       const h1 = screen.getByRole("heading", { level: 1 })

    console.log(h1.textContent)

       expect(h1.textContent).toBe('GifExpertApp Title');
    });

});