import React from 'react';

export class DadosGerais extends React.Component {
    state = {
        nome: '',
        idade: '',
        email: '',
        escolaridade: ''
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onChangeIdade = (event) => {
        this.setState({idade: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    onChangeEscolaridade = (event) => {
        this.setState({escolaridade: event.target.value})
    }

    render() {
        escolaridadeTrue = () => {
            if(this.state.escolaridade === 'Ensino superior completo') {
                return true
            }
        }

        return  <div className='App'>
                    <h3>ETAPA 1 - Dados Gerais</h3>
                    <p>1. Qual o seu nome?</p>
                    <input 
                        className={'input-nome'}
                        value={this.state.nome}
                        onChange={this.onChangeNome}
                    />
                    <p>2. Qual sua idade?</p>
                    <input
                        className={'input-idade'}
                        value={this.state.idade}
                        onChange={this.onChangeIdade}
                    />
                    <p>3. Qual seu email?</p>
                    <input
                        className={'input-email'}
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                    <p>4. Qual a sua escolaridade?</p>
                    <select onChange={this.onChangeEscolaridade}>
                        <option value={this.state.esolaridade}>Ensino médio incompleto</option>
                        <option value={this.state.esolaridade}>Ensino médio completo</option>
                        <option value={this.state.esolaridade}>Ensino superior incompleto</option>
                        <option value={this.state.esolaridade}>Ensino superior completo</option>
                    </select>
                    <br/>
                    <br/>
                    <button onClick={this.state.escolaridade === 'Ensino superior completo' ? 
                                    this.props.onProximaEtapaEducacional : this.props.onProximaEtapaGerais}>Próxima etapa</button>
                </div>
    }
} 