import React from 'react'
import axios from 'axios'

export class Cadastro extends React.Component {
    state = {
        email: '',
        nome: ''
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onCadastrarUsuario = () => {
        this.criarUsuario(this.state.nome, this.state.email)
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
            })
            .catch(error => {
                alert('Usuário não cadastrado \n erro [' + error.response.status + ']')
            })
    }

    render () {
        return  <section>
                    <input
                        placeholder={'E-mail'} 
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                    <input
                        placeholder={'Nome Completo'}
                        value={this.state.nome}
                        onChange={this.onChangeNome}
                    />
                    <button onClick={this.onCadastrarUsuario}>Cadastar</button>
                </section>
    }
}
