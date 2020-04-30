import React from 'react';

export class PokemonInformacao extends React.Component {
    render () {
        return  <div>
                    <img src='sprites' />
                    <p>type</p>
                    <p>ability: {}</p>
                    <p>moves: </p><select></select>
                    <button onClick={this.props.aoFechar}>close</button>
                </div>
    }
}