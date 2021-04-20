import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import React, { ReactElement } from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import Toolbar from '@material-ui/core/Toolbar';
import TwitterIcon from '@material-ui/icons/Twitter';
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
};

const SocialIcons = ({ className }: { className?: string }): ReactElement => {
  return (
    <Styled.SocialIcons className={className}>
      <FacebookIcon />
      <TwitterIcon />
      <TelegramIcon />
    </Styled.SocialIcons>
  );
};

const Footer = (): ReactElement => {
  return (
    <Styled.Footer>
      <Toolbar>
        <Container maxWidth="lg">
          <SocialIcons className="toolbar-left" />
          <Copyright />
          <Typography className="toolbar-right" variant="body1" color="textSecondary">
            Built on Skynet
          </Typography>
        </Container>
      </Toolbar>
    </Styled.Footer>
  );
};

export default Footer;
