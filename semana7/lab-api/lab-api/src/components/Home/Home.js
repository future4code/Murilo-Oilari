import React from 'react';
import axios from 'axios';
import { Pokemon } from '../Pokemon/Pokemon';
import { PokemonInformacao} from '../PokemonInformacao/PokemonInformacao'

export class Home extends React.Component {
    state = {
        pkmnGhostList: [],
        informacao: false
    }
    componentDidMount = () => {
        axios
            .get('https://pokeapi.co/api/v2/type/8/')
            .then(response => {
                this.setState({pkmnGhostList: response.data.pokemon})
            })
            .catch(error => {
                console.log(error)
            })
    }

    aoAlterarEstadoDaInformacao = () => {
        this.setState({informacao: !this.state.informacao})
    }

    render () {


console.log(this.state.pkmnGhostList)
        const digimon = this.state.pkmnGhostList.map((pkmn) => {
            return  <li>
                        <button onClick={this.aoAlterarEstadoDaInformacao}>+</button>
                        <strong>{pkmn.pokemon.name}</strong>
                        {this.state.informacao && <PokemonInformacao aoFechar={this.aoAlterarEstadoDaInformacao} />}
                    </li>        
        })

        return  <div>        
                    <Pokemon 
                        pokemon={digimon}
                    />
                </div>
    }
}