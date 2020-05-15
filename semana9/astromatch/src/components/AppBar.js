import React, { useState } from 'react';

import styled from 'styled-components'

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const MainBar = styled.nav`
width: 100%;
display: flex;
align-items: center;
flex-basis: 100%;
`

const Astro = styled.div`
color: orange;
border-bottom: 3px solid black;
flex-basis: 30%;
font-family: sans-serif;
font-size: 175%;
font-style: bold;
text-align: right;
`

const Match = styled.div`
color: black;
border-bottom: 3px dashed orange;
flex-basis: 30%;
font-family: sans-serif;
font-size: 175%;
font-style: bold;
text-align: left;
`

const Icones = styled.div`
flex-basis: 40%;
text-align: center;
`

const AppBar = (props) => {

    const [icone, setIcone] = useState(false)

    const aoClicar = () => {
        setIcone(!icone)
    }

    const onClickLista = () => {
        props.aoClicarListaDeMatches()
        aoClicar()
    }

    const onClickPerfil = () => {
        props.aoClicarPerfis()
        aoClicar()
    }

    const perfis = <IconButton color="inherit" aria-label="menu">
        <LoyaltyIcon
            onClick={onClickPerfil}
            fontSize='large'
            color='primary'
        />
    </IconButton>

    const lista = <IconButton color="inherit" aria-label="menu">
        <Badge badgeContent={props.numberOfMatches} color='primary'>
            <WhatshotIcon
                onClick={onClickLista}
                fontSize='large'
                color='primary'
            />
        </Badge>
    </IconButton>

    return (
        <MainBar>   
                <Astro>astro</Astro><Match>match</Match>
            <Icones>
                {!icone ? lista : perfis}
            </Icones>
        </MainBar>
    );
}

export default AppBar;