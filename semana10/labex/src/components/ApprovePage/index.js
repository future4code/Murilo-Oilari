import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import styled from 'styled-components';

import { MainPageContainer, MainBarContainer, MainMenuContainer, MainContentContainer } from '../Style/AdmStyle';

import AdmBar from '../AdmBar/AdmBar';
import AdmMenu from '../AdmMenu/AdmMenu';

import useProtectedPage from '../Hooks/useProtectedPage';

const ApprovePage = () => {
    useProtectedPage();

    const [viagem, setViagem] = useState('');
    const [candidato, setCandidato] = useState([]);


    const pathParams = useParams();



    useEffect(() => {
        const token = window.localStorage.getItem('token');
        async function getAlgo () {
            try {
                const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trip/${pathParams.id}`, {
                    headers: {
                        auth: token,
                        aluno: 'murilo-oliari-julian',
                        id: pathParams.id
                    } 
                });

                setViagem(response.data.trip);
                setCandidato(response.data.trip.candiates);

            } catch (e) {
                console.log(e);
            };
        };
        getAlgo();
    }, [pathParams])      
                






    // useEffect(() => {
    //     const token = window.localStorage.getItem('token');
    //     axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trip/${pathParams.id}`, {
    //         headers: {
    //             auth: token,
    //             aluno: 'murilo-oliari-julian',
    //             id: pathParams.id
    //         }
    //     }).then((response) => {
    //         setViagem(response.data.trip);
    //         setCandidato(response.data.trip.candiates)
    //         console.log(response.data.trip);

    //     }).catch((e) => {
    //         console.log(e)
    //     })
    // }, [pathParams]);

    
    
    return (
        <MainPageContainer>
            <MainBarContainer>
                <AdmBar />
            </MainBarContainer>
            <MainMenuContainer>
                <AdmMenu />
            </MainMenuContainer>
            <MainContentContainer>
                ID: {pathParams.id}
                {candidato && candidato.map((candidatos, index) => {
                    return (
                        <p>{candidatos[index].name}</p>
                    )
                })}
            </MainContentContainer>
        </MainPageContainer>
    );
};

export default ApprovePage;