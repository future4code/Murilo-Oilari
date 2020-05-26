import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

const MenuContent = styled.section`
    height: 100%;
    background-color: #202020;
`

const LogoNome = styled.h1`
    position: absolute;
    bottom: 0;
    left: 1%;
    color: white;
    letter-spacing: .7rem;
    font-weight: bold;
    font-size: large; 
`

const Dashboard = styled.p`
    color: white;
    letter-spacing: .3rem;
    font-weight: bold;
    text-align: left;
    padding-left: 10%;
`

const ListarViagens = styled.div`
    color: white;
    font-size: 120%;
    padding-left: 10%;
    padding-bottom: 5%;
    cursor: pointer;
`
const Icon = styled.div`
    padding-right: 20%;
    display: flex;
    justify-content: space-between;
    padding-top: 5%;
`

const AdmMenu = () => {
    const history = useHistory();

    const goToListTripPage = () => {
        history.push('/adm/viagens');
    };

    const goToCreateTripPage = () => {
        history.push('/adm/criar-viagem');
    };

    const onLogout = () => {
        window.localStorage.clear();
        history.push('/');
    };

    const IconList = <FontAwesomeIcon icon={faListAlt} size="lg" color="white" />
    const IconCreate = <FontAwesomeIcon icon={faCalendarPlus} size="lg" color="white" />             
    const IconLogout = <FontAwesomeIcon icon={faPowerOff} size="lg" color="white" />
    return (
        <MenuContent>
            <LogoNome>LABEX</LogoNome> <br />
                <Dashboard>Dashboard</Dashboard>
                <hr />
                <ListarViagens onClick={goToListTripPage}>
                    <Icon>
                        {IconList}
                        Listar viagens
                    </Icon>
                </ListarViagens>
                <ListarViagens onClick={goToCreateTripPage}>
                    <Icon>
                        {IconCreate}
                        Criar viagem
                    </Icon>
                </ListarViagens>
                <ListarViagens onClick={onLogout}>
                    <Icon>
                        {IconLogout}
                        Logout
                    </Icon>
                </ListarViagens>
        </MenuContent>
    );
};

export default AdmMenu;