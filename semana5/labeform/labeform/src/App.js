import React from 'react';
import './App.css';
import { DadosGerais } from './components/DadosGerais';
import { InformacoesEducacionais } from './components/InformacoesEducacionais';
import { InformacoesGeraisDeEnsino } from './components/InformacoesGeraisDeEnsino';
import { Agradecimento } from './components/Agradecimento';


class App extends React.Component {
  state = {
    etapa: ''
  }
  onProximaEtapaDois = () => {
    this.setState({etapa: 'educacional'})
  }
  onProximaEtapaTres = () => {
    this.setState({etapa: 'gerais'})
  }
  render () {
    switch(this.state.etapa) {
      case 'educacional':
        return <InformacoesEducacionais />
      case 'gerais':
        return <InformacoesGeraisDeEnsino />
      case 'CCC':
        return <Agradecimento />
      default:
        return <DadosGerais onProximaEtapaEducacional={this.onProximaEtapaDois} onProximaEtapaGerais={this.onProximaEtapaTres}/>
    }
  }
}

export default App;
