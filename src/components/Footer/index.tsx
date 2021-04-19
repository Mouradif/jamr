import React, { ReactElement } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import Typography from '@material-ui/core/Typography';

import Styled from './Footer.styles';

const Copyright = (): ReactElement => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      {new Date().getFullYear()}
      {' - All Rights Reserved'}
    </Typography>
  );
}

const SocialIcons = ({ className }: { className?: string }): ReactElement => {
  return (
    <Styled.SocialIcons className={className}>
      <FacebookIcon />
      <TwitterIcon />
      <TelegramIcon />
    </Styled.SocialIcons>
  );
}

const Footer = (): ReactElement => {
  return (
    <Styled.Footer>
      <Toolbar>
        <SocialIcons className="toolbar-left"/>
        <Copyright />
        <Typography className="toolbar-right" variant="body1" color="textSecondary">Built on Skynet</Typography>
      </Toolbar>
    </Styled.Footer>
  );
}

export default Footer;