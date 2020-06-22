import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { MainPageContainer, MainBarContainer, MainMenuContainer, MainContentContainer } from '../Style/AdmStyle';

import AdmBar from '../AdmBar/AdmBar';
import AdmMenu from '../AdmMenu/AdmMenu';

import useProtectedPage from '../Hooks/useProtectedPage';


const ApprovePage = () => {
    useProtectedPage();

    const history = useHistory();

    const pathParams = useParams();

    const goToBack = () => {
        history.push(`/adm/inscricoes/${pathParams.id}`);
    };

    const [candidatosInscritos, setCandidatosInscritos] = useState([]);
    const [candidatosAprovados, setCandidatosAprovados] = useState([]);
    const [candidatoId, setCandidatoId] = useState('');
    const [viagem, setViagem] = useState({});
    const [body, setBody] = useState({})
    const [mostraCandidato, setMostraCandidato] = useState('')

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips/${pathParams.id}/candidates/${candidatoId}/decide`, body, {
            headers: {
                auth: token,
                aluno: 'murilo-oliari-julian',
                tripId: pathParams.id,
                candidateId: candidatoId
            }
        }).then(() => {
            alert('Candidato aprovado com sucesso');
            goToBack()
        }).catch((error) => {
            console.log('erro: ', error)
        })
    }, [candidatoId, body]);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trip/${pathParams.id}`, {
            headers: {
                auth: token,
                aluno: 'murilo-oliari-julian',
                id: pathParams.id
            }
        }).then((response) => {
            setViagem(response.data.trip);
        }).catch((error) => {
            console.log('erro: ', error)
        })
    }, [pathParams]);

    const candidatos = () => {
        setMostraCandidato('cadidatados')
        setCandidatosInscritos(viagem.candidates.map((trip) => {
            return trip
        }));
    };

    const aprovados = () => {
        setMostraCandidato('aprovados')
        setCandidatosAprovados(viagem.approved.map((trip) => {
            return trip
        }));
    };

    const decide = (id, decision) => {
        setCandidatoId(id);
        setBody({
            approve: decision
        });
    };

    switch (mostraCandidato) {
        case 'aprovados':
            
                return  <div>
                   {candidatosAprovados && candidatosAprovados.map((candidato) => {
                       return   <div>
                                    <p>Nome: {candidato.name} - {candidato.age} anos</p>
                                    <p>Profissão: {candidato.profission}</p>
                                    <p>País: {candidato.country}</p>
                                    <p>Justificativa: {candidato.applicationText}</p>
                                    <p>id: {candidato.id}</p>
                                </div>
                   })}
               </div>
           
        case 'cadidatados':
            return (
                <div>
                    {candidatosInscritos && candidatosInscritos.map((candidato) => {
                        return  <div>
                                    <p>Nome: {candidato.name} - {candidato.age} anos</p>
                                    <p>Profissão: {candidato.profission}</p>
                                    <p>País: {candidato.country}</p>
                                    <p>Justificativa: {candidato.applicationText}</p>
                                    <p>id: {candidato.id}</p>
                                    <button onClick={() => decide(candidato.id, true)}>Aprovar</button>
                                    <button onClick={() => decide(candidato.id, false)}>Recusar</button>
                                </div>
                })}
                </div>
            )
        default:
            break;
    }

    return (
        <MainPageContainer>
            <MainBarContainer>
                <AdmBar />
            </MainBarContainer>
            <MainMenuContainer>
                <AdmMenu />
            </MainMenuContainer>
            <MainContentContainer>
                <button onClick={candidatos}>Ver Candidatos</button>
                <button onClick={aprovados}>Candidatos aprovados</button>
                {mostraCandidato} 
                ID da viagem: {pathParams.id}
            </MainContentContainer>
        </MainPageContainer>
    );
};

export default ApprovePage;