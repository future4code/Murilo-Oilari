import React from 'react'
import axios from 'axios'
import styled from "styled-components"

import { Pokemon } from '../Pokemon/Pokemon'
import { InformacaoAdicional } from '../InformacaoAdicional/InformacaoAdicional'

import  ActivePokeball  from '../../img/pokeball.svg'
import  InactivePokeball  from '../../img/empty-pokeball.svg'

const MainContent = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
const PokeList = styled.div`
text-align: left;
`


export class Home extends React.Component {
    state = {
        getGhosts: [],
        listaDeFantasmas: [],
        pokemon: [],
        mostrarInformacao: false,
        pokeSprite: '',
        pokeTypes: '',
        pokeMoves: '',
        pokeAbilities: ''
    }

    componentDidMount = () => {
        axios
            .get('https://pokeapi.co/api/v2/type/8/')
            .then(response => {
                this.setState({getGhosts: response.data.pokemon})
                this.state.getGhosts.forEach(ghost => {
                    ghost.pokemon['info'] = false
                })
                this.setState({listaDeFantasmas: this.state.listaDeFantasmas = this.state.getGhosts})
            })
            .catch(error =>{
                console.log(error)
            })
        }

    informacaoAdicional = (pokemon) => {

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => {
                this.setState({pokeSprite: response.data.sprites.front_default})
                this.setState({pokeTypes: response.data.types})
                this.setState({pokeMoves: response.data.moves})
                this.setState({pokeAbilities: response.data.abilities})
            })
            .catch(error => {
                console.log(error)
            })

        const infoAdicional = this.state.listaDeFantasmas.filter((pkmn) => {
            if(pkmn.pokemon.name === pokemon) {
                return pkmn.pokemon.info = !pkmn.pokemon.info, true
            } else {
                return pkmn.pokemon.info = false, true
            }
        })
        this.setState({listaDeFantasmas: infoAdicional})
    }
    
    render () {
        let pokemonTipo
        if(this.state.pokeTypes) {
            pokemonTipo = this.state.pokeTypes.map((tipo) => {
                return <i>{tipo.type.name} </i>
            })
        }

        let pokemonGolpes
        if(this.state.pokeMoves) {
            pokemonGolpes = this.state.pokeMoves.map((golpe) => {
                return <option key={golpe.move.name} value={golpe.move.name}>{golpe.move.name}</option>
            })
        }

        let pokemonHabilidades
        if(this.state.pokeAbilities) {
            pokemonHabilidades = this.state.pokeAbilities.map((habilidade) => {
                return <li>{habilidade.ability.name}</li>
            })
        }

        const listaDePokemonExibidos = this.state.listaDeFantasmas.map((pkmn) => {
            return  <Pokemon
                        botao={pkmn.pokemon.info ? '-' : '+'}
                        aoClicar={() => this.informacaoAdicional(pkmn.pokemon.name)}
                        pokemonNome={pkmn.pokemon.info ? <strong><i>{pkmn.pokemon.name}</i></strong> : pkmn.pokemon.name}
                        info={pkmn.pokemon.info && <InformacaoAdicional 
                                                        pokeImage={this.state.pokeSprite}
                                                        pokeType={this.state.pokeTypes && pokemonTipo}
                                                        pokeAbilities={this.state.pokeAbilities && pokemonHabilidades}
                                                        pokeMoves={this.state.pokeMoves && pokemonGolpes}
                                                    />} 
                    />            
        })
        return  <MainContent>
                    <div/>
                    <PokeList>
                        {listaDePokemonExibidos}
                        <img src={ActivePokeball} alt="dce"/>
                    </PokeList>
                    <div>

                        <img src={'https://vignette.wikia.nocookie.net/pokemon/images/0/05/Ghost_Lavender_Town_RBY.png/revision/latest/scale-to-width-down/340?cb=20180113101034'} alt="dce"/>
                    </div>
                </MainContent>
    }
}