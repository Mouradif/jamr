import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { ReactElement } from 'react';

import userImg from '../../assets/user.png';
import LogoIcon from '../LogoIcon';
import NavMenu from '../NavMenu';
import Styled from './Navbar.styles';

const NavbarUser = (): ReactElement => {
  return (
    <div className="navbar-user">
      <Avatar alt="Remy Sharp" src={userImg} />
      <ExpandMoreIcon />
    </div>
  );
};

const Navbar = (): ReactElement => {
  return (
    <Styled.Navbar position="fixed">
      <Toolbar>
        <LogoIcon className="navbar-logo"/>
        <NavMenu />
        <NavbarUser />
      </Toolbar>
    </Styled.Navbar>
  );
}

export default Navbar;
