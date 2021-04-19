import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

const Navbar = styled(AppBar)`
  background-color: ${({theme}) => theme.palette.background.paper};
  
  .MuiToolbar-root {
    display: flex;
    justify-content: center;

    ${({theme})=> theme.breakpoints.up('sm')} {
      min-height: ${({theme}) => theme.spacing(10)}px;
    }

    .navbar-logo, .navbar-user {
      flex: 1;
    }

    .navbar-user {
      align-items: center;
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;

const Styled = { Navbar };

export default Styled;