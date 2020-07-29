import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './Components/Header';
import MainBanner from './Components/MainBanner';
import About from './Components/About';
import Projects from './Components/Projects';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'white',
      main: '#3dace3',
      dark: '#5c7dcc',
      contrastText: 'white',
    },
    secondary: {
      main: '#cc0033'
    }
  },
  typography: {
    fontFamily: "Helvetica Neue",
    h6: {
      "fontWeight": 0
    }
  }
});



class App extends React.Component {
  render () {

    return (
      <ThemeProvider theme={theme}>
        <Header/>
        <div id="Main">
          <MainBanner/>
        </div>
        <div id="Projects">
          <Projects/>
        </div>
        <div id="About">
          <About/>
        </div>
        <Container maxWidth="lg">
          <Box mb={0} pb={10} pt={15} textAlign="center">
            <Typography>Coded in React by Su Min Kim :))</Typography>
          </Box>
        </Container>
      </ThemeProvider>   
    )
  }
}


export default App;
