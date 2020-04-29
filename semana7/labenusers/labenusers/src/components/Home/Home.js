import React from 'react';
import { Cadastro } from '../Cadastro/Cadastro';
import { ListaDeUsuarios } from '../ListaDeUsuarios/ListaDeUsuarios';
import { Usuario } from '../Usuario/Usuario'
import { EditarUsuario } from '../../EditarUsuario/EditarUsuario';
import axios from 'axios';
import styled from 'styled-components';

import trash from '../../img/trash.svg';

const TelaDeCadastro = styled.section`
display: flex;
height: 50vh;
width: 100vw;
align-items: center;
justify-content: center;

`

const ListaDeUsuariosExibidos = styled.li`
display: flex;
border-bottom: 1px black solid;
list-style-type: none;
margin-left: 30%;
margin-right: 30%;  
justify-content: space-between;
`

const NomeCadastrado = styled.p`
display: inline;
`

export class Home extends React.Component {
    state = {
        email: '',
        nome: '',
        listaDeUsuariosCadastrados: [],
        telaAtual: 'cadastro',
        usuario: [],
        editarUsuario: false
    }

    componentDidMount() {
        this.mostraLista()
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    onCadastrarUsuario = () => {
        this.criarUsuario(this.state.nome, this.state.email)
        this.trocarDeTela()
    }

    trocarDeTela = () => {
        const paginaAtual = this.state.telaAtual === "cadastro" ? "listaDeCadastro" : "cadastro"
        this.setState({ telaAtual: paginaAtual });
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
                this.setState({ listaDeUsuariosCadastrados: resposta.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    criarUsuario = (nomeDoUsuario, enderecoDoEmail) => {
        const body = {
            name: nomeDoUsuario,
            email: enderecoDoEmail
        }
        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                body,
                {
                    headers: {
                        Authorization: "murilo-oliari-julian"
                    }
                }
            )
            .then(resposta => {
                alert('Usuário cadastrado com sucesso \n success [' + resposta.status + ']');

                this.mostraLista()
            })
            .catch(error => {
                alert('Usuário não cadastrado \n erro [' + error.response.status + ']')
            })
    }

    confirmacaoDeDelecao = (idDoUsuario) => {
        if (window.confirm("deletar?")) {
            this.deletarUsuario(idDoUsuario)
        }
    }

    deletarUsuario = (idDoUsuario) => {
        const body = {
            id: idDoUsuario
        }
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idDoUsuario}`,
                {
                    headers: {
                        Authorization: "murilo-oliari-julian"
                    }
                }
            )
            .then(resposta => {
                alert('Usuário deletado com sucesso \n success [' + resposta.status + ']');
                this.trocarDeTela()
                this.mostraLista()
            })
            .catch(error => {
                alert('Não foi possível deletar o usuário \n erro [' + error.response.status + ']')
            })
    }


    bla = (idDoUsuario) => {
        this.setState({ telaAtual: 'usuario' })
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idDoUsuario}`,
                {
                    headers: {
                        Authorization: "murilo-oliari-julian"
                    }
                }
            )
            .then(resposta => {
                this.setState({ usuario: resposta.data })
                console.log(this.state.usuario)
            })
            .catch(error => {
                console.log(error)
            })

    }

    editarUsuario = () => {
        this.setState({editarUsuario: !this.state.editarUsuario})
    }

    render() {
        let componenteEditarUsario
        if(this.state.editarUsuario) {
            componenteEditarUsario = <EditarUsuario />
        }

        let botaoEditar
        if(!this.state.editarUsuario) {
            botaoEditar = <button onClick={this.editarUsuario}>editar</button>
        }


        const listaDeUsuariosExibidos = this.state.listaDeUsuariosCadastrados
            .map((usuario) => {
                return <ListaDeUsuariosExibidos>
                    <NomeCadastrado onClick={() => this.bla(usuario.id)}>{usuario.name}</NomeCadastrado>
                    <img onClick={() => this.confirmacaoDeDelecao(usuario.id)} src={trash} alt='[X]' />
                </ListaDeUsuariosExibidos>
            })




        let botaoRetorno = <button onClick={this.trocarDeTela}>{this.state.telaAtual === "cadastro" ?
            "cadastros de usuários" :
            "cadastrar novo usuário"}</button>


        let tela
        switch (this.state.telaAtual) {
            case 'cadastro':
                tela = <TelaDeCadastro>
                            <Cadastro
                                value={this.state.email}
                                onChangeEmail={this.onChangeEmail}
                                value={this.state.nome}
                                onChangeNome={this.onChangeNome}
                                aoCadastrarUsuario={this.onCadastrarUsuario}
                            />
                        </TelaDeCadastro>
                break;
            case 'listaDeCadastro':
                tela =  <ListaDeUsuarios
                            listaDeUsuariosCadastrados={listaDeUsuariosExibidos}
                        />
                break;
            case 'usuario':
                tela =  <div>
                            <Usuario
                                nomeUsuario={this.state.usuario.name}
                                emailUsuario={this.state.usuario.email}
                                aoDeletarUsuario={() => this.confirmacaoDeDelecao(this.state.usuario.id)}
                            />
                            {botaoEditar}
                            {componenteEditarUsario}
                        </div>
                break;
            default:
                break;
        }
        return  <div>
                    {botaoRetorno}
                    {tela}
                </div>
    }
}