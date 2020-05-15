import React from 'react';
import styled from 'styled-components';
import RefreshIcon from '@material-ui/icons/Refresh';

const ResetButton = styled.button`
border-radius: 7px;
outline: none;
`

const AppReset = (props) => {

    return (
        <ResetButton onClick={props.reset}>
            <RefreshIcon />
        </ResetButton>
    )
}
export default AppReset;