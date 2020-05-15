import React, { useState, useEffect } from 'react';
import { baseUrl, julianHeader } from '../Const';

import axios from 'axios';
import styled, { keyframes } from 'styled-components';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import AppProfile from './AppProfile';
import AppChoices from './AppChoices';
import AppBar from './AppBar';
import AppMatch from './AppMatch';
import AppReset from './AppReset';;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
display: inline-block;
animation: ${rotate} 5s linear infinite;
font-size: 200%;
`
const CardAnimation = styled.div`
transition: transform 300ms ease-in-out;
transform: ${ props => {
            switch (props.transform) {
                case true:
                    return 'translate(200px, 150px) rotate(20deg);'
                case false:
                    return 'translate(-200px, 150px) rotate(-20deg);'
                default:
                    return ' ;'
            }
    }
};
`
const TelaEspera = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const PageContent = styled.section`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(to right, white, gray);
`

const MainAppContent = styled.section`
position: relative;
width: 375px;
height: 667px;
background-color: #f2f2f2;
border-radius: 7px;
overflow: hidden;
`

const FooterApp = styled.footer`
position: absolute;
bottom: 0;
`

const Reset = styled.div`
position: absolute;
top: 0;
right: 0;
`

const AwaitImage = styled.img`
width: 375px;
`
const HeartImage = styled.img`
max-width: 200px;
`
const AppContainer = () => {
    
    const [perfilExibido, setPerfilExibido] = useState('')
    const [body, setBody] = useState({})
    const [matchList, setMatchList] = useState([])
    const [matchesList, setMatchesList] = useState([])
    const [transformation, setTransformation] = useState(null)
    const [tela, setTela] = useState(true)
    const [resetApp, setResetApp] = useState(false)
    
    //Busca os perfis
    useEffect(() => {
        axios
            .get(`${baseUrl}person`, {
                headers: julianHeader
            }).then((response) => {
                setPerfilExibido(response.data)
                setTransformation(null)
            }).catch((error) => {
                console.log(error)
            })
    }, [baseUrl, setPerfilExibido, body, resetApp])
    
    //Resposta do aceite ou não
    useEffect(() => {
        axios
        .post(`${baseUrl}choose-person`, body, {
                headers: julianHeader
            }).then((response) => {
                console.log(response.data)
                if (response.data.isMatch) {
                    setMatchList([...matchList, perfilExibido.profile.id])
                }
            }).catch((error) => {
                console.log(error)
            })
    }, [body])
    
    //Body a ser enviado com o aceite ou não
    const choosePerson = (personId, userChoice) => {
        setBody({
            id: personId,
            choice: userChoice
        })
        setTransformation(userChoice)
    }
    
    //Recebe a lista de Matches
    useEffect(() => {  
      axios
        .get(`${baseUrl}matches`, {
                  headers: julianHeader
          }).then((response) => {
            setMatchesList(response.data.matches)
          }).catch((error) => {
              console.log(error)
          })
      }, [baseUrl, setMatchesList, tela])
    
    //Reseta aplicação
    useEffect(() => {
        axios
            .put(`${baseUrl}clear`, {
                headers: julianHeader
            }).then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
        }, [baseUrl, resetApp])
        
        const clear = () => {
            setResetApp(!resetApp)
            setTela(true)
        }

    const mudaTela = () => {
        setTela(!tela)
    }

    let telaProfile
    if (perfilExibido !== '') {
        telaProfile =   <div>
                            <CardAnimation
                                transform={transformation}
                            >
                                <AppProfile
                                    foto={perfilExibido.profile.photo}
                                    nome={perfilExibido.profile.name}
                                    idade={perfilExibido.profile.age}
                                    bio={perfilExibido.profile.bio}
                                />
                            </CardAnimation>
                            <FooterApp>
                                <AppChoices 
                                    reject={() => choosePerson(perfilExibido.profile.id, false)}
                                    accept={() => choosePerson(perfilExibido.profile.id, true)}
                                />
                            </FooterApp>
                        </div>
    }

    const telaDeEspera =    <TelaEspera>
                                <Rotate>
                                    {/*<FavoriteBorderIcon 
                                        color='primary'
                                        fontSize='large'
                                    />*/}
                                    <HeartImage src="https://pngimage.net/wp-content/uploads/2018/06/orange-heart-png-3.png"/>
                                </Rotate>
                            </TelaEspera>

    return (
        <PageContent>
            <MainAppContent>
                <AppBar
                    numberOfMatches={matchList.length}
                    aoClicarPerfis={mudaTela}
                    aoClicarListaDeMatches={mudaTela}
                />
                {tela === true ?
                    perfilExibido !== '' ? telaProfile : telaDeEspera :
                    <AppMatch
                        matches={'listaDeMatches'}
                        matchesList={matchesList}
                    />}
            </MainAppContent>
            <Reset>
                <AppReset 
                    reset={clear}
                />
            </Reset>
        </PageContent>
    )
}

export default AppContainer;


  