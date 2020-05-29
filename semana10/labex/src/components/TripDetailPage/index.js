import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import axios from 'axios';
import styled from 'styled-components';

import useForm from '../Hooks/useForm'
import CountriesSelect from './CountriesSelect'

import UserFooter from '../UserFooter/UserFooter';
import UserBar from '../UserBar/UserBar';

import { MainPageContainer, MainBarContainer, MainContainer, MainFooterContainer } from '../Style/UserStyle'

const TripContent = styled.section`
    margin-top: 2%;
    display: grid;
    grid-template-areas: 'description photo'
                         'form form';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`
const TripDescription = styled.div`
    grid-area: description;
`

const TripPhoto = styled.img`
    grid-area: photo;
    border: 10;
    border-radius: 3;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, .5);
   
`

const FormAplicacao = styled.form`
    grid-area: form;
    width: 50%;
    display: flex;
    flex-direction: column;
`

const TripDetailPage = () => {
    const pathParams = useParams();
    
    const { form, onChange } = useForm({name: '', age: '', applicationText: '', profession: '', country: ''});

    const [listaDeViagens, setListaDeViagens] = useState([]);
    const [body, setBody] = useState({});

    const handleInputChange = event => {
        const { name, value } = event.target;

        onChange(name, value);
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
                 id: pathParams.id
             }
         }).then((response) => {
             console.log(response.data)
             alert('ok')
         }).catch((error) => {
             console.log(error)
             alert(error)
         })
    }, [body])
       
    const viagemDetalhada = listaDeViagens.filter(viagem => {
        if(viagem.id === pathParams.id) {
            return true;
        }
    });

    const aoCandidatarse = () =>{
        setBody(form)
    };

    console.log(form)

    return (
        <MainPageContainer>
            <MainBarContainer>
                <UserBar />
            </MainBarContainer>
            <MainContainer>
                <TripContent>
                    <TripDescription>
                        {viagemDetalhada && viagemDetalhada.map(viagem => {
                            return (
                                <div>
                                    <h1>{viagem.name}</h1>
                                    <h6>planeta de destino: {viagem.planet}</h6>
                                    <h5>Embarque: {viagem.date} - duração da viagem: {viagem.durationInDays} dias</h5>
                                    <p>{viagem.description}</p>
                                </div>
                            );
                        })}
                    </TripDescription>
                    <TripPhoto src='https://picsum.photos/550/450?blur=4' />
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
                        <button onClick={aoCandidatarse}>Candidatar-se</button>
                    </FormAplicacao>
                </TripContent>
            </MainContainer>
            <MainFooterContainer>
                <UserFooter />
            </MainFooterContainer>
        </MainPageContainer>
    );
};

export default TripDetailPage;