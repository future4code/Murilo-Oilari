import React from 'react'

export class EditarUsuario extends React.Component {
    state = {
        novoNome: '',
        novoEmail: ''
    }

    onChangeNovoNome = (event) => {
        this.setState({novoNome: event.target.value})
    }
    
    onChangeNovoEmail = (event) => {
        this.setState({novoEmail: event.target.value})
    }

    render () {
        return  <div>
                    <input
                        placeholder={'Nome Completo'}
                        value={this.state.novoNome}
                        onChange={this.onChangeNovoNome}
                    />
                    <input
                        placeholder={'e-mail'}
                        value={this.state.novoEmail}
                        onChange={this.onChangeNovoEmail}
                    />
                    <button onClick={this.props.aoEnviar}>Enviar</button>
                </div>
    }
}