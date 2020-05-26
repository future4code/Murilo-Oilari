import styled from 'styled-components';

export const MainPageContainer = styled.section`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-areas: 'side bar'
                         'side main';
    grid-template-columns: 2fr 8fr;
    grid-template-rows: 200px 1fr;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
`

export const MainBarContainer = styled.section`
    grid-area: bar;
    width: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0227/2241/products/Space-Rockets-Wall-Sticker.jpg?v=1536224658);
    background-attachment: fixed;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MainMenuContainer = styled.section`
    grid-area: side;
`

export const MainContentContainer = styled.section`
    grid-area: main;
    display: flex;
    background-color: gray;
    align-items: center;
    justify-content: center;
`