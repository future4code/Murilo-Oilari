import React from 'react';
import styled from 'styled-components';

const PhotoThumb = styled.img`
height: 30px;
width: 30px;
border-radius: 50%;
` 

const ListaDeMatches = styled.ul`
list-style-type: none;
`

const AppMatch = (props) => {
    
  return (
    <ListaDeMatches>
      {props.matchesList.map(match => {
        return <li><PhotoThumb src={match.photo}/> {match.name}</li>
      })}
    </ListaDeMatches>  
  )
}

export default AppMatch;