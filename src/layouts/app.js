import React, {Component} from 'react'
import { CssBaseline } from '@material-ui/core';
import GuestLayout from './layout_guest'
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../assets/themes/theme';
import './app.css'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <GuestLayout />
        </BrowserRouter>
      </MuiThemeProvider>
    )
  };
}

export default App