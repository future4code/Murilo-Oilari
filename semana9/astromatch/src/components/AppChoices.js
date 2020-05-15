import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';

const MainFooter = styled.div`
width: 375px;
height: 100px;
background-color: white;
display: flex;
justify-content: space-around;
flex-basis:100%;
border-radius: 0px 0px 5px 5px;
`

const ChoiceButton = styled(Button)`
flex-basis: 50%;
`

const AppChoices = (props) => {

  return (
    <MainFooter>
      <ChoiceButton
        onClick={props.reject}
        color='secondary'
      >
        <CloseIcon fontSize='large'/>
      </ChoiceButton>
      <ChoiceButton 
        color='primary'
        onClick={props.accept}
      >
        <FavoriteIcon fontSize='large'/>
      </ChoiceButton>
    </MainFooter>
  );
}

export default AppChoices;