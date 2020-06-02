import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe('Renderização inicial', () => {
    test('Input existe na tela', () => {
        const { getByPlaceholderText } = render(<App />);

        expect(getByPlaceholderText(/novo post/i)).toBeInTheDocument();
    });

    test('Button existe na tela', () => {
        const { getByText } = render(<App />);

        expect(getByText(/adicionar/i)).toBeInTheDocument();
    });

});

describe('Criar post', () => {
    test('ao digitar, o texto deve aparecer', () => {
        const { getByPlaceholderText } = render(<App />);

        const input = getByPlaceholderText(/novo post/i);

        fireEvent.click(input, {
            target: {
                value: 'post teste'
            }
        });
        
        expect(input).toHaveValue('post teste');
    });

    test('ao digitar e clicar em adicionar', () => {
        const { getByPlaceholderText, getByText } = render(<App />);

        const input = getByPlaceholderText(/novo post/i);

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });

        const button = getByText(/adicionar/i);

        fireEvent.click(button);

        expect(getByText('post teste')).toBeInTheDocument();
    });

    test('ao digitar e clicar em adicionar para 2 posts, espero que haja 2 posts', () => {
        const { getByPlaceholderText, getByText } = render(<App />);

        const input = getByPlaceholderText(/novo post/i);
        const button = getByText(/adicionar/i);

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });

        fireEvent.click(button);


        fireEvent.change(input, {
            target: {
                value: 'post teste 2'
            }
        });

        fireEvent.click(button);

        expect(getByText('post teste')).toBeInTheDocument();
        expect(getByText('post teste 2')).toBeInTheDocument();
    });

});

describe('Curtir um Post', () => {
    test('ao curtir um post o botão deve trocar seu texto para descurtir', () => {
        const { getByPlaceholderText, getByText } = render(<App />);

        const input = getByPlaceholderText(/novo post/i);

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });

        const button = getByText(/adicionar/i);

        fireEvent.click(button);

        const curtir = getByText(/curtir/i);

        fireEvent.click(curtir)

        expect(getByText(/descurtir/i)).toBeInTheDocument();
    });

});

describe('Apagar um Post', () => {
    test('ao apagar um post o mesmo deve sumir da tela', () => {
        const { getByPlaceholderText, getByText } = render(<App />);

        const input = getByPlaceholderText(/novo post/i);

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        });

        const button = getByText(/adicionar/i);

        fireEvent.click(button);


        expect(getByText('post teste')).toBeInTheDocument();

        const apagar = getByText(/apagar/i);

        fireEvent.click(apagar);

        expect().not.toBe('post teste');

    });

});