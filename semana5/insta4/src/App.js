import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;
