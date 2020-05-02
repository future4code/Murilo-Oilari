import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
border-radius: 10px;
background-color: black;
color: white;
outline: 0;
`

export class Pokemon extends React.Component {
    render () {
        return  (
            <div>
                <Button onClick={this.props.aoClicar}>{this.props.botao}</Button>
                {this.props.pokemonNome}
                <div>{this.props.info}</div>
            </div>
        )
    }
}