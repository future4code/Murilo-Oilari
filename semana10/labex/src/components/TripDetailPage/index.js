import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { CountryDropdown } from 'react-country-region-selector';
import axios from 'axios';
import styled from 'styled-components';

import UserFooter from '../UserFooter/UserFooter';
import UserBar from '../UserBar/UserBar';

import { MainPageContainer, MainBarContainer, MainContainer, MainFooterContainer } from '../Style/UserStyle'

const FormAplicacao = styled.div`
    display: flex;
    flex-direction: column;

`


const TripDetailPage = () => {
    const [listaDeViagens, setListaDeViagens] = useState([]);
    const [body, setBody] = useState({});
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [texto, setTexto] = useState('');
    const [profissao, setProfissao] = useState('');
    const [pais, setPais] = useState('');

    const pathParams = useParams();

    const selecionaPais = (value) => {
        setPais(value);
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

     useEffect(() => {
         axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/trips/${pathParams.id}/apply`, body, {
             headers: {
                 aluno: 'murilo-oliari-julian',
                 id: `${pathParams.id}`
             }
         }).then((response) => {
             console.log(response.data)
         }).catch((error) => {
             console.log(error)
         })
    }, [body])
    
    const aoSeCandidatar = (applicantName, applicantAge, applicantText, applicantProfession, applicantCountry) => {
        setBody({
            name: applicantName,
            age: applicantAge,
            applicationText: applicantText,
            profession: applicantProfession,
            country: applicantCountry
        });
    };

    const onChangeNome = (event) => {
        setNome(event.target.value);
    };

    const onChangeIdade = (event) => {
        setIdade(event.target.value);
    };

    const onChangeTexto = (event) => {
        setTexto(event.target.value);
    };

    const onChangeProfissao = (event) => {
        setProfissao(event.target.value);
    };
    
    const viagemDetalhada = listaDeViagens.filter(viagem => {
        if(viagem.id === pathParams.id) {
            return true;
        }
    });

    return (
        <MainPageContainer>
            <MainBarContainer>
                <UserBar />
            </MainBarContainer>
            <MainContainer>
                {viagemDetalhada && viagemDetalhada.map(viagem => {
                    return (
                        <div>
                            <p>{viagem.name}</p>
                            <p>Embarque: {viagem.date} - duração da viagem: {viagem.durationInDays} dias</p>
                            <p>{viagem.description}</p>
                            <p>{viagem.planet}</p>
                        </div>
                    );
                })}
                <FormAplicacao>
                    <input onChange={onChangeNome} placeholder='Nome' />
                    <input onChange={onChangeIdade} type='number' placeholder='Idade' />
                    <textarea onChange={onChangeTexto} placeholder='Por qual motivo devo ser escolhido' rows='10' cols='40' ></textarea>
                    <input onChange={onChangeProfissao} placeholder='Profissão' />
                    <CountryDropdown
                        defaultOptionLabel='Nacionalidade' 
                        value={pais} 
                        onChange={(value) => selecionaPais(value)} 
                    />
                    <button onClick={() => aoSeCandidatar(nome, idade, texto, profissao, pais)}>Candidatar-se</button>
                </FormAplicacao>

            </MainContainer>

            <MainFooterContainer>
                <UserFooter />
            </MainFooterContainer>
        </MainPageContainer>
    );
};

export default TripDetailPage;