import React from 'react'
import styled from 'styled-components';

const TelaDeCadastro = styled.section`
border: 1px black solid;
`
const Button = styled.button`
width: 100%;
height: 7vh;
color: white;
background-color: black;
`

export class Cadastro extends React.Component {
    render () {
        return  <TelaDeCadastro>
                    <section>
                        <form>
                            <input
                                    placeholder={'E-mail'} 
                                    value={this.props.email}
                                    onChange={this.props.onChangeEmail}
                            />
                            <br/>
                            <input
                                    placeholder={'Nome Completo'}
                                    value={this.props.nome}
                                    onChange={this.props.onChangeNome}
                            />
                            <br/>  
                            <Button onClick={this.props.aoCadastrarUsuario}>Cadastar</Button>
                        </form>
                    </section>
                </TelaDeCadastro>
    }
}
