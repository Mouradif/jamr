import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './index.styled';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router>
            <CssBaseline/>
            <GlobalStyle />
            <App />
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
