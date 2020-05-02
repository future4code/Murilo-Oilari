import React from 'react';
import styled from 'styled-components'

const AditionalInfo = styled.div`
border: 5px black solid;
border-radius: 10px;
padding: 2%;
`

export class InformacaoAdicional extends React.Component {
    render () {
        return  <AditionalInfo>
                    <img src={this.props.pokeImage} alt='Not found!' />
                    <p><strong>type: </strong>{this.props.pokeType}</p>
                    <strong>Abilities: </strong><ul>{this.props.pokeAbilities}</ul>
                    <select>
                        <option value={''}>Moves List</option>
                        {this.props.pokeMoves}    
                    </select>
                </AditionalInfo>
    }
}