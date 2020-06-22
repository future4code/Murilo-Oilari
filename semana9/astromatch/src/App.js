import React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import orange from '@material-ui/core/colors/orange'
import grey from '@material-ui/core/colors/grey'

import AppContainer from './components/AppContainer'

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: grey,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppContainer />
    </MuiThemeProvider>
  );
}

export default App;