import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../img/logo.png'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
 
const MainHome = styled.section`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-areas:    'upper'
                            'main'
                            'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 8fr 1fr;
    background-image: url(https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/w_2560%2Cc_limit/pulsar-831502910.jpg) ;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); 
        font-family: 'Montserrat';
`

const UpperPage = styled.section`
    grid-area: upper;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    opacity: 85%;
`

const UserButton = styled.section`
    grid-area: main;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MainBox = styled.div`
    position: relative;
    height: 25%;
    width: 33%;
    background-color: darkgray;
    border-radius: 10px;
    opacity: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const Footer = styled.footer`
    grid-area: footer;
    color: white;
    display: flex;
    background-color: black;
    opacity: 909%;
    align-items: center;
    text-align: center;
    justify-content:center;
`

const AdminButton = styled.button`
    color: orange;
    background-color: black;
    align-content: flex-start;
    opacity: 100%;
    padding: 1%;
    margin-left: 2%;
    border-radius: 10px;
`

const ButtonEnter = styled.button`
    color: orange;
    background-color: black;
    padding: 1%;
    border-radius: 10px;
    width: 90%;
    height: 30%;
`

const LabexName = styled.h1`
    margin-right: 2%;
    color: white;
    letter-spacing: .7rem;
    font-weight: bold; 
    font-size: large;
`

const LogoDiv = styled.div`
    position: absolute;
    top: -35%;
    left: 0;
`

const LogoImage = styled.img`
    max-height: 150px;
    height: auto;
    width: auto;
`

const Going = styled.p`
    font-size: 120%;
    color: orange;
    font-weight: bold;
    letter-spacing: .7rem;
    text-shadow: 2px 2px black;
`

const DivLogin = styled.div`
    display: flex;
    flex-direction: column;
`

const HomePage = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    const goToTripsPage = () => {
        history.push('/viagens');
    };

    const goToAdminPage = () => {
        history.push('/adm');
    };


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const aoLogar = async () => {
        const body = {
            email: email,
            password: password
        };
        try {
            const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-oliari-julian/login`, body);

            localStorage.setItem('token', response.data.token);
            history.push('/adm');
        } catch (e) {
            alert('Login e/ou senha incorretos.')
        }
    };

    const LoginModal =  <div>       
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <DivLogin className={classes.paper}>
                                        <LogoImage src={Logo} />
                                        <input
                                            value={email}
                                            placeholder='E-mail'
                                            onChange={event => setEmail(event.target.value)}
                                            type='email'
                                        />
                                        <input 
                                            value={password}
                                            placeholder='senha'
                                            onChange={event => setPassword(event.target.value)}
                                            type='password'
                                        />
                                        <button onClick={aoLogar}>logar</button>
                                    </DivLogin>
                                </Fade>
                            </Modal>
                        </div>


    return (
        <MainHome>
            <UpperPage>
                <AdminButton type="button" onClick={handleOpen}>Área restrita</AdminButton>
                {LoginModal}
                <LabexName>LABEX</LabexName>
            </UpperPage>
            <UserButton>
                <MainBox>
            <LogoDiv>
            </LogoDiv>
                    <Going>GOING BEYOND</Going>
                    <ButtonEnter onClick={goToTripsPage}>entrar</ButtonEnter>
                </MainBox>
            </UserButton>
            <Footer>
                Ad aeternum
                <br />
                De profundis ad astra...
            </Footer>
        </MainHome>
    );
};

export default HomePage;