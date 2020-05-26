import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { MainPageContainer, MainBarContainer, MainMenuContainer, MainContentContainer } from '../Style/AdmStyle'

import AdmBar from '../AdmBar/AdmBar';
import AdmMenu from '../AdmMenu/AdmMenu';

import useProtectedPage from '../Hooks/useProtectedPage';


const FormDeCriacaoDeViagem = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
`

const CreateTripPage = () => {
    useProtectedPage();
    
    const [body, setBody] = useState({});
    
    useEffect(() => {
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips', body, {
            headers: {
                Authorization: ''
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
                <input placeholder='Nome da viagem' />
                <select>
                    <option value=''>Escolha o planeta de destino</option>
                    <option value='mercurio'>Mercúrio</option>
                    <option value='venus'>Vênus</option>
                    <option value='marte'>Marte</option>
                    <option value='jupiter'>Júpiter</option>
                    <option value='saturno'>Saturno</option>
                    <option value='urano'>Urano</option>
                    <option value='netuno'>Netuno</option>
                    <option value='plutao'>Plutão</option>
                </select>
                <input type='date' placeholder='Data do embarque'/>
                <textarea placeholder='Descrição da viagem'></textarea>
                <input type='number' min='1' placeholder='Tempo de duração em dias' />
                <button>Criar</button>
            </FormDeCriacaoDeViagem>
        </MainContentContainer>
    </MainPageContainer>
    );
};

export default CreateTripPage;