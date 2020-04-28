import React from 'react';

export class ListaDeUsuarios extends React.Component {
    render () {
        return  <section>
                    <h3>Lista de Usuários Cadastrados</h3>
                    <ul>{this.props.listaDeUsuariosCadastrados}</ul>
                </section>
    }
}