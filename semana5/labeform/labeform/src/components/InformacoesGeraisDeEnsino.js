import React from 'react';

export class InformacoesGeraisDeEnsino extends React.Component {
    state= {
        motivo: '',
        cursoComplementar: ''
    }

    onChangeMotivo = (event) => {
        this.setState({motivo: event.target.value})
    }

    onChangeCursoComplementar = (event) => {
        this.setState({cursoComplementar: event.target.value})
    }

    render () {
        return  <div className='App'>
                    
                    <h3>ETAPA 3 - Informações Gerais de Ensino</h3>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input 
                        className={'input-motivo'}
                        value={this.state.motivo}
                        onChange={this.onChangeMotivo}
                    />
                    <p>6. Você fez algum curso complementar?</p>
                    <select onChange={this.onChangeCursoComplementar}>
                        <option value={this.state.cursoComplementar}>Nenhum</option>
                        <option value={this.state.cursoComplementar}>Curso técnico</option>
                        <option value={this.state.cursoComplementar}>Curso de inglês</option>
                    </select>
                    <br/>
                    <br/>
                    <button>Próxima etapa</button>
                </div>
    }
}