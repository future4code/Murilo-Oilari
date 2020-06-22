import React from 'react';
import styled from 'styled-components';

const BarContent = styled.nav`
    width: 100%;
    grid-area: bar;
    background-image: url(https://cdn.shopify.com/s/files/1/0227/2241/products/Space-Rockets-Wall-Sticker.jpg?v=1536224658);
    background-attachment: fixed;
    background-position: center;
    display:flex;
    justify-content: center;
    align-items: center;
`

const GoingContainer = styled.div`
    width: 60%;
    background-color: rgba(255, 255, 255, 0.8);
`

const Slogan = styled.p`
    text-align:center;
    color: orange;
    font-weight: bold;
    letter-spacing: .7rem;
    text-shadow: 2px 2px black;
    font-family: 'Montserrat';
    opacity: 100%;
`

const AdmBar = () => {
    return (
        <BarContent>
            <GoingContainer>
                <Slogan>GOING BEYOND</Slogan>
            </GoingContainer>
        </BarContent>
    );
};

export default AdmBar;