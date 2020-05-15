import React from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
width: 350px;
height: auto;
margin-left: auto;
margin-right: auto;
position: relative;
top: 50%;
transform: translateY(-50%);
`

const ImageContainer = styled.section`
width: 350px;
height: 490px;
overflow: hidden;
background-color: #202020;
display: inline-block;
position: relative;
border-radius: 10px;
box-shadow: 5px 5px 5px 2px gray;

`

const MainProfile = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const BioInfoContainer = styled.section`
width: 350px;
position: absolute;
bottom: 0;
color: white;
font-family: sans-serif;
font-weight: bold;
background-image: linear-gradient(to bottom, black, grey);
opacity: 90%;
padding: 3%;
`
const AppProfile = (props) => {

    return (
        <MainProfile>
            <ImageContainer>
                <MainImage src={props.foto} alt='foto vulgar, mas sem ser sexy' />
                <BioInfoContainer>
                    <p>{props.nome}, {props.idade}</p>
                    <p>{props.bio}</p>
                </BioInfoContainer>
            </ImageContainer>
        </MainProfile>
    )
}

export default AppProfile;