import React from "react";
import { 
    render,
    screen,
    getByText,
    getByLabelText, 
    fireEvent,
    wait
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import HomePage from "../HomePage/";
import axios from "axios";

axios.get = jest.fn().mockResolvedValue({data: []});
axios.post = jest.fn().mockResolvedValue();
axios.put = jest.fn().mockResolvedValue();
axios.delete = jest.fn().mockResolvedValue();

describe('Renderização inicial', () => {
    test('Renderiza tudo corretamente', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [
                {
                    "id": 123,
                    "text": "Task request-test",
                    "day": "segunda"
                }
            ]
        });
    
        const {
            getByPlaceholderText,
            getByLabelText,
            findByText,
            getByText
        } = render(<HomePage />);

        const input = getByPlaceholderText(/nova task/i);
        expect(input).toBeInTheDocument();

        userEvent.selectOptions(getByLabelText('Selecione o dia'), getByText('Domingo'))
        userEvent.selectOptions(getByLabelText('Selecione o dia'), getByText('Segunda'))
        userEvent.selectOptions(getByLabelText('Selecione o dia'), getByText('Terça'))
        userEvent.selectOptions(getByLabelText('Selecione o dia'), getByText('Quarta'))
        userEvent.selectOptions(getByLabelText('Selecione o dia'), getByText('Quinta'))
        userEvent.selectOptions(getByLabelText('Selecione o dia'), getByText('Sexta'))
        userEvent.selectOptions(getByLabelText('Selecione o dia'), getByText('Sábado'))

        expect(getByText(/adicionar/i)).toBeInTheDocument();

        expect(axios.get).toHaveBeenCalled();

        const task = await findByText('Task request-test');

        expect(task).toBeInTheDocument();
    });

});

describe('Criar uma Task', () => {
    test('Cria Task com sucesso', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [
                {
                    "text": "An Old Task",
                    "day": "segunda"
                }
            ]
        });

        axios.post = jest.fn().mockResolvedValue();

        const {
            getByPlaceholderText,
            getByText
        } = render(<HomePage />);

        const input = getByPlaceholderText(/nova task/i);

        await userEvent.type(input, 'Brand new task');
        expect(input).toHaveValue('Brand new task');

        //userEvent.selectOptions(screen.getByLabelText('Selecione o dia'), ['Quarta']);

        // userEvent.selectOptions(screen.getByLabelText('Selecione o dia'), [
        //     screen.getByText('Quarta')
        // ])

        //expect(screen.getByText('Quarta').selected).toBe(true)

        // expect(screen.getByText('Selecione o dia')).toBeInTheDocument();
        // expect(screen.getByText('Quarta')).toBeInTheDocument();
        
        expect(screen.getByText('Selecione o dia')).toBeInTheDocument();
        fireEvent.change(screen.getByTestId('select'), {
            target: { value: "quarta" },
        });
        expect(screen.getByText("Quarta")).toBeInTheDocument();

        const button = getByText(/adicionar/i);
        userEvent.click(button);

        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-murilo-oliari', {
            text: 'Brand new task',
            day: 'quarta'
        }, {headers: {aluno: "planner-julian-murilo-oliari"}
        });

        await wait(() => expect(axios.get).toHaveBeenCalledTimes(1));
        await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));

        //await wait(() => expect(input).toHaveValue(''));

    }, 10000);

});

describe('Editar uma Task', () => {
    test('Edita uma Task com sucesso', async () =>{
        axios.get = jest.fn().mockResolvedValue({
            data: [
                {
                    "id": "taskId",
                    "text": "An Old Task",
                    "day": "segunda"
                }
            ]
        });
        
        axios.put = jest.fn().mockResolvedValue();

        const {
            getByPlaceholderText,
            getByText
        } = render(<HomePage />);
        
        const input = getByPlaceholderText(/nova task/i);

        await userEvent.type(input, 'task edited');
        expect(input).toHaveValue('task edited');

        expect(screen.getByText('Selecione o dia')).toBeInTheDocument();
        fireEvent.change(screen.getByTestId('select'), {
            target: { value: "sexta" },
        });
        expect(screen.getByText("Sexta")).toBeInTheDocument();
    
        const button = getByText(/edit/i);
        userEvent.click(button);
    
        expect(axios.put).toHaveBeenCalledWith(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-murilo-oliari/taskId`, {
            text: 'task edited',
            day: 'sexta'
        }, {headers: {
            aluno: "planner-julian-murilo-oliari",
            taskId: "taskId"
            }
        });
    
        await wait(() => expect(axios.get).toHaveBeenCalledTimes(1));
        await wait(() => expect(axios.put).toHaveBeenCalledTimes(1));
        // //await wait(() => expect(input).toHaveValue(''));
    });

});

describe('Deletar uma Task', () => {
    test('Deleta uma Task com sucesso', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [
                {
                    "id": "taskId",
                    "text": "An Task to be Deleted",
                    "day": "segunda"
                }
            ]
        });
        
        
        axios.delete = jest.fn().mockResolvedValue();
        
        const { getByText } = render(<HomePage />);
        
        const button = getByText('del');
        
        userEvent.click(button);
    
        expect(axios.delete).toHaveBeenCalledWith(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-murilo-oliari/taskId`, {
            headers: {
                aluno: "planner-julian-murilo-oliari",
                taskId: "taskId"
            }
        });
    
        await wait(() => expect(axios.get).toHaveBeenCalledTimes(1));
        await wait(() => expect(axios.delete).toHaveBeenCalledTimes(1));
        // //await wait(() => expect(input).toHaveValue(''));
    });

});