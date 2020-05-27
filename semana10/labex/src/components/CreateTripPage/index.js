import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { MainPageContainer, MainBarContainer, MainMenuContainer, MainContentContainer } from '../Style/AdmStyle'

import AdmBar from '../AdmBar/AdmBar';
import AdmMenu from '../AdmMenu/AdmMenu';

import useProtectedPage from '../Hooks/useProtectedPage';

import useForm from '../Hooks/useForm'

import DatePickers from './Date'




import DateFnsUtils from "@date-io/date-fns";




const FormDeCriacaoDeViagem = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
`

const CreateTripPage = () => {
    useProtectedPage();


    const hoje = new Date().toISOString().split("T")[0];

    
  

    const { form, onChange } = useForm({name: '', planet: '', date: '', description: '', durationInDays: ''})
    
    const [body, setBody] = useState({});

    const handleInputChange = event => {
        const { name, value } = event.target;

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
    }, []);

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
                Inserir nova viagem:
                <input
                    value={form.name}
                    type='text'
                    name='name'
                    placeholder='Nome da viagem'
                    onChange={handleInputChange}
                    minLength='5'
                    required
                />
                <select
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
                </select>
                 {/**<DatePickers
                    dateValue={form.data}
                    dateName={'date'}
                    dateOnChange={handleInputChange}
                />*/}
               <input
                    value={form.date}
                    type='date'
                    name='date'
                    min={hoje}
                    placeholder='Data do embarque'
                    required
                />
                <textarea
                    value={form.description}
                    type='text'
                    name='description'
                    placeholder='Descrição da viagem'
                    minLength='30'
                    onChange={handleInputChange}
                    required
                >
                </textarea>
                <input
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










