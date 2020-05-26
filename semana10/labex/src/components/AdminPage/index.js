import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { MainPageContainer, MainBarContainer, MainMenuContainer, MainContentContainer } from '../Style/AdmStyle';

import AdmBar from '../AdmBar/AdmBar';
import AdmMenu from '../AdmMenu/AdmMenu';

const AdminPage = () => {
    return (
        <MainPageContainer>
            <MainBarContainer>
                <AdmBar />
            </MainBarContainer>
            <MainMenuContainer>
                <AdmMenu />
            </MainMenuContainer>
            <MainContentContainer>
            </MainContentContainer>
        </MainPageContainer>
    );
};

export default AdminPage;