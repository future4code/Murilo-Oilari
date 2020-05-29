import React from 'react';
import styled from 'styled-components';

const BarContent = styled.nav`
    min-height: 150px;
    width: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0227/2241/products/Space-Rockets-Wall-Sticker.jpg?v=1536224658);
    background-attachment: fixed;
    background-position: center;
    display:flex;
    justify-content: center;
    align-items: center;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); 
        font-family: 'Montserrat';
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

const UserBar = () => {
    return (
        <BarContent>
            <GoingContainer>
                <Slogan>GOING BEYOND</Slogan>
            </GoingContainer>
        </BarContent>
    );
};

export default UserBar;