import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imgProfile from './img/IMGeu.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {imgProfile} 
          nome="Murilo Oliari Ribeiro" 
          descricao="Sou o Murilo, estudante de Web Full-Stack na Labenu_ (Future4). Vindo da área contábil e finaceira. Agora um apaixonado por programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/792/792138.svg" 
          conteudo="murilo@oliari.dev"
        />

        <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/1692/1692037.svg"
          conteudo="Rua dos bobos nº 0, Massachusetts"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
          <CardGrande 
            imagem="https://image.flaticon.com/icons/svg/2802/2802833.svg"
            nome="Superior - Técnico" 
            descricao="Técnico Em Ánalise e Desenvolvimento de Sistemas - Atualmente trancado." 
          />

          <CardGrande 
            imagem="https://image.flaticon.com/icons/svg/2802/2802833.svg"
            nome="Superior" 
            descricao="Ciências Contábeis - Incompleto." 
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://image.flaticon.com/icons/svg/2811/2811180.svg"
          nome="Faculdade Opet" 
          descricao="Estagiei no Fab-Lab da instituição, fazendo parte de uma equipe de backend, usando python django-rest e um pouquinho de Java." 
        />
        
        <CardGrande 
          imagem="https://image.flaticon.com/icons/svg/1570/1570998.svg" 
          nome="Área Contábil" 
          descricao="Trabalhei anteriormente na área contábil e foi lá que descobri que não quero ser contador e sim programador." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/svg/2111/2111425.svg" 
          texto="Github" 
        />

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        

        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        
      </div>
    </div>
  );
}

export default App;
