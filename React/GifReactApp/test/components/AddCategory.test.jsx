import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas sobre AddCategory.jsx', () => {
    const inputValue = 'Saitama';
    
    test('Debe de cambiar el valor de la caja de texto ', () => {

        render( <AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: {value: inputValue} } );

        expect(input.value).toBe(inputValue);

    });

    test('Debe llamar el onNewCategory si el input tiene algun valor', () => {
        render( <AddCategory onNewCategory={() => {}}/>)
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form );
        expect( input.value ).toBe('');
        
    });

    test('Debe llamar el onNewCategory si el input tiene algun valor con Mock', () => {
        
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form );
        expect( input.value ).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith( inputValue );
    });

    test('No debe de llamar el onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>)

        const form = screen.getByRole('form');
        

        fireEvent.submit( form );

        expect(onNewCategory).not.toHaveBeenCalled();

    });
});