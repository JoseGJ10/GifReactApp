import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de GifGrid ', () => {
    const category = 'One Punch'
    test('Debe de mostrar el loading inicialmente', () => {
        
    useFetchGifs.mockReturnValue = ({
        images: [],
        isLoading: true
    })

        render(<GifGrid category={ category }/>);

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));

    });

    test('dede de mostrar items cuando se cargan las imagenes', () => {
        
    });
});