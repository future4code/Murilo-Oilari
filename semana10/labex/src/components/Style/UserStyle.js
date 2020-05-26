import styled from 'styled-components';

export const MainPageContainer = styled.section`
    height: 100vh;
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-areas:    'upper'
                            'main'
                            'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 8fr 1fr;
`

export const MainBarContainer = styled.section`
    grid-area: upper;
`

export const MainContainer = styled.section`
    grid-area: main;
`

export const MainFooterContainer = styled.footer`
    grid-area: footer;
`