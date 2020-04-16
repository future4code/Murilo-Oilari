import React, {Component} from 'react'
import './SecaoCompartilhar.css'

import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import iconeFacebook from '../../img/facebook.svg'
import iconeTwitter from '../../img/twitter.svg'
import iconeInstagram from '../../img/instagram.svg'

export class SecaoCompartilhar extends Component {
	state = {
	}

	render() {
		return <div className={'share-container'}>
				<IconeSemContador 
					icone={iconeFacebook}
					onClickIcone={this.props.aoCompartilharFacebook}
				/>

				<IconeSemContador
					icone={iconeInstagram}
					onClickIcone={this.props.aoCompartilharInstagram}
				/>
					
				<IconeSemContador
					icone={iconeTwitter}
					onClickIcone={this.props.aoCompartilharTwitter}
				/>
		</div>
	}
}