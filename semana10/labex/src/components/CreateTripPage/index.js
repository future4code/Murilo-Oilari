import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';
import { MainPageContainer, MainBarContainer, MainMenuContainer, MainContentContainer } from '../Style/AdmStyle'

import AdmBar from '../AdmBar/AdmBar';
import AdmMenu from '../AdmMenu/AdmMenu';

import useProtectedPage from '../Hooks/useProtectedPage';

import useForm from '../Hooks/useForm'

const FormDeCriacaoDeViagem = styled.form`
    width: 60%;
/*display: flex;flex-direction: column;*/
    display: grid;
    grid-template-areas: 'tripName  tripName planet'
                         'desc desc desc'
                         'date date durationInDays';

`

const InputName = styled.input`
    
    grid-area: tripName;
`

const SelectPlanet = styled.select`
    grid-area: planet;
`

const TextAreaDescription = styled.textarea`
    grid-area: desc;
    
`

const InputDate = styled.input`
    grid-area: date;
`

const InputDurationInDays = styled.input`
    grid-area: durationInDays;
`

const CreateTripPage = () => {

    useProtectedPage();

    const { form, onChange } = useForm({name: '', planet: '', date: '', description: '', durationInDays: ''})
    
    const [body, setBody] = useState({});

    const handleInputChange = event => {
        const { name, value } = event.target;
        console.log(event.target)
        onChange(name, value);
    };

    const aoEnviar = () => {
        setBody(form);
        console.log(body)
    };
    
    useEffect(() => {
        const token = window.localStorage.getItem('token');
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips', body, {
            headers: {
                auth: token,
                aluno: 'murilo-oliari-julian'
                
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }, [body]);
    
    const dateFormat = e => {
        const date = e.target.value;
        const format = { day: '2-digit', month: '2-digit', year: 'numeric'};
        
        const formatedDate = date.toLocaleString('pt-BR', format);

        const ano = formatedDate.slice(0, 4);
        const mes = formatedDate.slice(5, 7);
        const dia = formatedDate.slice(8, 10)
        
        const tripDate = `${dia}/${mes}/${ano}`
        
        onChange('date', tripDate);
    };
    
    console.log(form)
    
    const hoje = new Date().toISOString().split("T")[0];
    
    return (
        <MainPageContainer>
            <MainBarContainer>
                <AdmBar />
            </MainBarContainer>
            <MainMenuContainer>
                <AdmMenu />
            </MainMenuContainer>
        <MainContentContainer>
            <FormDeCriacaoDeViagem>
                <InputName
                    value={form.name}
                    type='text'
                    name='name'
                    placeholder='Nome da viagem'
                    onChange={handleInputChange}
                    minLength='5'
                    required
                />
                <SelectPlanet
                    value={form.planet}
                    type='text'
                    name='planet'
                    onChange={handleInputChange}
                    required
                >
                    <option value='0'>Escolha o planeta de destino</option>
                    <option value='mercurio'>Mercúrio</option>
                    <option value='venus'>Vênus</option>
                    <option value='marte'>Marte</option>
                    <option value='jupiter'>Júpiter</option>
                    <option value='saturno'>Saturno</option>
                    <option value='urano'>Urano</option>
                    <option value='netuno'>Netuno</option>
                    <option value='plutao'>Plutão</option>
                </SelectPlanet>
                <InputDate
                    value={form.data}
                    type='date'
                    name='date'
                    min={hoje}
                    onChange={dateFormat}
                />
                <TextAreaDescription
                    value={form.description}
                    type='text'
                    name='description'
                    placeholder='Descrição da viagem'
                    minLength='30'
                    onChange={handleInputChange}
                    required
                >
                </TextAreaDescription>
                <InputDurationInDays
                    value={form.durationInDays}
                    type='number'
                    name='durationInDays'
                    placeholder='Tempo de duração em dias'
                    min='50'
                    onChange={handleInputChange}
                    required
                />
                <button onClick={aoEnviar}>Criar</button>
            </FormDeCriacaoDeViagem>
        </MainContentContainer>
    </MainPageContainer>
    );
};

export default CreateTripPage;