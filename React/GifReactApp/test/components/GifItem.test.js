import { fireEvent, render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';


describe('Pruebas GifItems component', () => {
    
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    
    test('debe hacer match con el Snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el url y el ALT indicado', () => {
        render( <GifItem title = { title } url = { url } />);

        const {src, alt}  = screen.getByRole('img') 
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    })

    test('Debe de mostrar el titulo del componente', () => {
        render( <GifItem title = { title } url = { url } />);
        expect( screen.getByText( title )).toBeTruthy();
    });
});