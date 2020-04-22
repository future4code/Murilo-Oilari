import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    listaDePosts: this.listaDePosts = [],
    postagem: this.postagem = {
      usuario: '',
      fotoUsuario: '',
      fotoPost: ''
    },
    usuario: '',
    fotoUsuario: '',
    fotoPost: ''
  }

  onChangeUsuario = (event) => {
		this.setState({usuario: event.target.value})
  }
  
  onChangeFotoUsuario = (event) => {
		this.setState({fotoUsuario: event.target.value})
  }
  
  onChangeFotoPost = (event) => {
		this.setState({fotoPost: event.target.value})
  }
  
  populandoLista = () => {
    this.setState({
      curtido: this.state.curtido = !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas =  this.state.curtido ? (this.state.numeroCurtidas + 1) : (this.state.numeroCurtidas - 1)
    })
  }

  aoEnviarPost = (event) => {
    this.setState({
      postagem: this.state.postagem.usuario = this.state.usuario
    })
    this.setState({
      postagem: this.state.postagem.fotoUsuario = this.state.fotoUsuario
    })
    this.setState({
      postagem: this.state.postagem.fotoPost = this.state.fotoPost
    })

    const novoPost = this.state.listaDePosts
    novoPost.push(this.postagem)
    this.state.listaDePosts = novoPost
  }

  populandoLista = () => {
    const novoPost = this.state.listaDePosts
    
    const post01 = {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50?id/1',
      fotoPost: 'https://picsum.photos/200/150?id/1'
    }
    
     const post02 = {
       nomeUsuario: 'paulão',
       fotoUsuario: 'https://picsum.photos/50/50?id/2',
       fotoPost: 'https://picsum.photos/200/150?id/2&blur=1'
    }
   
     const post03 = {
       nomeUsuario: 'paulete',
       fotoUsuario: 'https://picsum.photos/50/50?id/3',
       fotoPost: 'https://picsum.photos/200/150?id/3&grayscale&blur=2'
   }

    novoPost.push(post01)
    novoPost.push(post02)
    novoPost.push(post03)

    this.state.listaDePosts = novoPost
  }

  render() {
    
    this.populandoLista()
    const listaDePostsExibidos = this.listaDePosts.map((post) => {
      return <Post 
                nomeUsuario={post.nomeUsuario}
                fotoUsuario={post.fotoUsuario}
                fotoPost={post.fotoPost}
              />
    })

    return (
      <div>
      <div className={'new-post-container'}>
        <input 
          className={'input-user'}
          placeholder={'Usuário'}
          value={this.state.usuario}
          onChange={this.onChangeUsuario}
        />
        <input 
          className={'input-photo-user'}
          placeholder={'URL da foto do usuário'}
          value={this.state.fotoUsuario}
          onChange={this.onChangeFotoUsuario}
        />
        <input 
          className={'input-photo-post'}
          placeholder={'URL da foto do post'}
          value={this.state.fotoPost}
          onChange={this.onChangeFotoPost}
        />
        <button onClick={this.props.aoEnviarPost}>Enviar</button>
      </div>

      <div className={'app-container'}>
        {listaDePostsExibidos}
      </div>
       </div>

      /**
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?id/1'}
          fotoPost={'https://picsum.photos/200/150?id/1'}
        />
        
        <Post
          nomeUsuario={'paulão'}
          fotoUsuario={'https://picsum.photos/50/50?id/2'}
          fotoPost={'https://picsum.photos/200/150?id/2&blur=1'}
        />

        <Post
          nomeUsuario={'paulete'}
          fotoUsuario={'https://picsum.photos/50/50?id/3'}
          fotoPost={'https://picsum.photos/200/150?id/3&grayscale&blur=2'}
        />
      </div>
      */
    );
  }
}

export default App;
