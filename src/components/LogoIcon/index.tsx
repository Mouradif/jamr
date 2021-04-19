import React, { ReactElement } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import Styled from './LogoIcon.styles';

const LogoIcon = ({ className }: LogoIconProps): ReactElement => {
  return (
    <Styled.LogoIcon className={className}>
      <SvgIcon component={Logo} viewBox="0 0 45 45" />
      <Typography variant="h5" color="inherit" noWrap>
        Jamr
      </Typography>
    </Styled.LogoIcon>
  );
};

interface LogoIconProps {
  className?: string;
}

export default LogoIcon;
