import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MainHome = styled.section`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-areas:    'upper'
                            'main'
                            'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 7fr 2fr; 
`

const Aaa = styled.section`
    grid-area: upper;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #dbdbdb;
`


const UserButton = styled.section`
    grid-area: main;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Footer = styled.footer`
grid-area: footer;
background-color: #dbdbdb;
`

const AdminButton = styled.button`

align-content: flex-start;
`

const HomePage = () => {
    const history = useHistory();

    const goToTripsPage = () => {
        history.push('/viagens');
    };

    const goToAdminPage = () => {
        history.push('/adm');
    };

    return (
        <MainHome>
            <Aaa>
            <AdminButton onClick={goToAdminPage}>Área restrita</AdminButton>
            </Aaa>
            <UserButton>
                <h1>Labe-X</h1>
                <p>GOING BEYOND</p>
                <button onClick={goToTripsPage}>entrar</button>
            </UserButton>
            <Footer>
                footer
            </Footer>
        </MainHome>
    );
};

export default HomePage;