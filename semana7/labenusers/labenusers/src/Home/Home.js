import React from 'react';
import { Cadastro } from '../Cadastro/Cadastro';
import { ListaDeUsuarios } from '../ListaDeUsuarios/ListaDeUsuarios';
import axios from 'axios';
import styled from 'styled-components';

const ListaDeUsuariosExibidos = styled.li`
list-style-type: none;
padding: 1%;
`

export class Home extends React.Component {
    state = {
        listaDeUsuariosCadastrados: []
    }

    componentDidMount() {
        this.mostraLista()
    }

    mostraLista = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {
                    headers: {
                        Authorization: "murilo-oliari-julian"
                    }
                }
            )
            .then(resposta => {
                this.setState({listaDeUsuariosCadastrados: resposta.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render () {
        const listaDeUsuariosExibidos = this.state.listaDeUsuariosCadastrados
        .map((usuario) => {
            return  <ListaDeUsuariosExibidos>
                        <li>
                            {usuario.name} - [X]
                        </li>
                    </ListaDeUsuariosExibidos>
        })

        return  <div>
                    <Cadastro />
                    <ListaDeUsuarios
                        listaDeUsuariosCadastrados={listaDeUsuariosExibidos}
                    />
                </div>
    }
}