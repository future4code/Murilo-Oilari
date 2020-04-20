import React from 'react';

export class InformacoesEducacionais extends React.Component {
    state= {
        curso: '',
        unidade: ''
    }

    onChangeCurso = (event) => {
        this.setState({curso: event.target.value})
    }

    onChangeUnidade = (event) => {
        this.setState({unidade: event.target.value})
    }

    render () {
        return  <div className='App'>
                    
                    <h3>ETAPA 2 - Informações do Ensino Superior</h3>
                    <p>5. Qual curso?</p>
                    <input 
                        className={'input-curso'}
                        value={this.state.curso}
                        onChange={this.onChangeCurso}
                    />
                    <p>6. Qual a unidade de ensino?</p>
                    <input
                        className={'input-unidade'}
                        value={this.state.unidade}
                        onChange={this.onChangeUnidade}
                    />
                    <br/>
                    <br/>
                    <button>Próxima etapa</button>
                </div>
    }
}