import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { MainPageContainer, MainBarContainer, MainMenuContainer, MainContentContainer } from '../Style/AdmStyle';
import TripDetailsModal from './TripDetailsModal'
import AdmBar from '../AdmBar/AdmBar';
import AdmMenu from '../AdmMenu/AdmMenu';

import useProtectedPage from '../Hooks/useProtectedPage';


const ListTripsPage = (props) => {
    useProtectedPage();

    const [listaDeViagens, setListaDeViagens] = useState([]);

    const history = useHistory();

    const goToApprovePage = (id) => {
        history.push(`/adm/inscricoes/${id}`);
    };

    useEffect(() =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips', {
            headers: {
                aluno: 'murilo-oliari-julian'
            }
        }).then((response) => {
            console.log(response.data.trips)
            setListaDeViagens(response.data.trips)
        }).catch((error) => {
            console.log(error)
        })
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
                {listaDeViagens && listaDeViagens.map(viagem => {
                    return (
                        <div>
                            <h3>{viagem.name}</h3>
                            <p>{viagem.planet}</p>
                            <TripDetailsModal 
                                titulo={viagem.name}
                                planeta={viagem.planet}
                                dias={viagem.durationInDays}
                                data={viagem.date}
                                descricao={viagem.description}
                                id={viagem.id}
                                aoClicar={() => goToApprovePage(viagem.id)}
                            />            
                        </div>
                    )
                })}
            </MainContentContainer>
        </MainPageContainer>
    );
};

export default ListTripsPage;



