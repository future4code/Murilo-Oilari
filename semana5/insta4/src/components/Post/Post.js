import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeFavoritoEscuro from '../../img/bookmark.svg'
import iconeFavoritoClaro from '../../img/bookmark-white.svg'
import iconeCompartilhar from '../../img/share.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    favorito: false,
    compartilhando: false,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    this.setState({
      curtido: this.state.curtido = !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas =  this.state.curtido ? (this.state.numeroCurtidas + 1) : (this.state.numeroCurtidas - 1)
    })
  }

  onClickFavorito = () => {
    this.setState({
      favorito: this.state.favorito = !this.state.favorito
    })
  }
  
  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeFavorito

    if(this.state.favorito) {
      iconeFavorito = iconeFavoritoEscuro
    } else {
      iconeFavorito = iconeFavoritoClaro
    }

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar />
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClick={this.onClickCompartilhar}
        />

        <IconeSemContador
          icone={iconeFavorito}
          onClickIcone={this.onClickFavorito}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteCompartilhar}
      {componenteComentario}
    </div>
  }
}

export default Post