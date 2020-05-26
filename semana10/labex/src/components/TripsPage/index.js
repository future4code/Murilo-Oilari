import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

import UserFooter from '../UserFooter/UserFooter';
import UserBar from '../UserBar/UserBar';


import { MainPageContainer, MainBarContainer, MainContainer, MainFooterContainer } from '../Style/UserStyle'
import TripCard from './TripCard';

const CardsContainer = styled.section`
    display: flex;
    /*flex-direction: column;*/
    align-items:center;
    background-color: gray;
    flex-wrap: wrap;
`

const CardViagem = styled.div`
    border: 1px solid black;
    width: 60%;
    margin-top: 5%;
    text-align: center;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
`

const TripsPage = () => {
    const [listaDeViagens, setListaDeViagens] = useState([]);

    const history = useHistory();

    const goToTripDetail = (id) => {
        history.push(`/viagem/${id}`);
    };

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips', {
            headers: {
                aluno: 'murilo-oliari-julian'
            }
        }).then((response) => {
            console.log(response.data.trips);
            setListaDeViagens(response.data.trips);
        }).catch((error) => {
            console.log(error);
        })

    }, []);

    return (
        <MainPageContainer>
            <MainBarContainer>
                <UserBar />
            </MainBarContainer>
            <MainContainer>
                Próximas viagens:
                <CardsContainer>
                    {listaDeViagens && listaDeViagens.map((viagem, index) => {
                        return (
                            <TripCard
                                aoClicarViagem={() => goToTripDetail(viagem.id)}
                                imagem={`https://picsum.photos/200?random=${index}&blur=2`}
                                titulo={viagem.name}
                                descricao={viagem.description}
                            />
                        )
                    })}
                </CardsContainer>
            </MainContainer>
            <MainFooterContainer>
                <UserFooter />
            </MainFooterContainer>
        </MainPageContainer>
    );
};

export default TripsPage;