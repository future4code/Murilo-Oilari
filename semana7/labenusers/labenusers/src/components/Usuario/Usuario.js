import React from 'react';

export class Usuario extends React.Component {
    render () {
        return  <section>
                    <h4>Usuário:</h4>
                    <p>{this.props.nomeUsuario}</p>
                    <h4>E-mail:</h4>
                    <p>{this.props.emailUsuario}</p>
                    <button onClick={this.props.aoDeletarUsuario}>deletar</button>
                </section>
    }
}