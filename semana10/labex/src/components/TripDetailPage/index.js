import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { CountryDropdown } from 'react-country-region-selector';
import axios from 'axios';
import styled from 'styled-components';

import useForm from '../Hooks/useForm'
import CountriesSelect from './CountriesSelect'

import UserFooter from '../UserFooter/UserFooter';
import UserBar from '../UserBar/UserBar';

import { MainPageContainer, MainBarContainer, MainContainer, MainFooterContainer } from '../Style/UserStyle'

const FormAplicacao = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
`


const TripDetailPage = () => {
    const pathParams = useParams();
    
    const { form, onChange } = useForm({name: '', age: '', applicationText: '', profession: '', country: ''});

    const [listaDeViagens, setListaDeViagens] = useState([]);
    const [body, setBody] = useState({});
    //const [nome, setNome] = useState('');
    //const [idade, setIdade] = useState('');
    //const [texto, setTexto] = useState('');
    //const [profissao, setProfissao] = useState('');
    //const [pais, setPais] = useState('');

    const handleInputChange = event => {
        const { name, value } = event.target;

        onChange(name, value);
    };

    
    
    
    // const selecionaPais = (value) => {
    //     setPais(value);
    // };

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

    // const onChangeNome = (event) => {
    //     setNome(event.target.value);
    // };

    // const onChangeIdade = (event) => {
    //     setIdade(event.target.value);
    // };

    // const onChangeTexto = (event) => {
    //     setTexto(event.target.value);
    // };

    // const onChangeProfissao = (event) => {
    //     setProfissao(event.target.value);
    // };
    
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
                    <input
                        value={form.name}
                        type='text'
                        name='name'
                        placeholder='Nome'
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        value={form.age}
                        type='number' 
                        name='age'
                        placeholder='Idade'
                        min='18'
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        value={form.applicationText}
                        type='text'
                        name='applicationText'
                        placeholder='Por qual motivo devo ser escolhido' 
                        rows='10'
                        cols='40' 
                        onChange={handleInputChange}
                        required
                    >
                    </textarea>
                    <input
                        value={form.profession}
                        type='text'
                        name='profession'
                        placeholder='Profissão'
                        onChange={handleInputChange} 
                        required
                    />
                    <CountriesSelect
                        countryValue={form.country}
                        onChange={handleInputChange}
                    />
                    {/**<CountryDropdown
                        value={form.country}
                        name='country'
                        defaultOptionLabel='Nacionalidade'
                        onChange={handleInputChange}
                        required
                        /**onChange={(value) => selecionaPais(value)}
                    /> */}
                    <button>Candidatar-se</button>
                </FormAplicacao>

            </MainContainer>

            <MainFooterContainer>
                <UserFooter />
            </MainFooterContainer>
        </MainPageContainer>
    );
};

export default TripDetailPage;