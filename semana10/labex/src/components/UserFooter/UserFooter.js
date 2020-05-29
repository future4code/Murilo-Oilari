import React from 'react';
import styled from 'styled-components';

const FooterContent = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    min-height: 80px;
    width: 100%;
    color: white;
    background-color: #202020;
    align-items: center;
    justify-content: center;
`

const UserFooter = () => {
    return (
        <FooterContent>
            <p>LaBuNu_ Projeto - Labe-X</p>
        </FooterContent>
    );
};

export default UserFooter;