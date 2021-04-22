import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#131419',
      paper: '#1C1C24',
    },
    text: {
      primary: '#FFF',
      secondary: '#5F5F6F',
    },
    primary: {
      main: '#4447E2',
    },
    secondary: {
      main: '#F62E5E',
    },
  },
  shape: {
    borderRadius: 15,
  },
});

export default theme;
