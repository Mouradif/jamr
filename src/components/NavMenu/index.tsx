import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as TrackListIcon } from '../../assets/grid.svg';
import { ReactComponent as MyTracksIcon } from '../../assets/track.svg';

import Styled from './NavMenu.styles';

const NavMenu = ({ className }: NavMenuProps): ReactElement => {
  return (
    <Styled.NavMenu className={className}>
      <Typography variant="subtitle1" color="textSecondary">
        <Button
          component={NavLink}
          to="/track-list"
          startIcon={<SvgIcon component={TrackListIcon} viewBox="0 0 24 24"/>}
        >
          Track List
        </Button>
        <Button
          component={NavLink}
          to="/my-tracks"
          startIcon={<SvgIcon component={MyTracksIcon} viewBox="0 0 24 18"/>}
        >
          My Tracks
        </Button>
        <Button
          component={NavLink}
          to="/help"
          startIcon={<HelpIcon />}
        >
          Help
        </Button>
      </Typography>
    </Styled.NavMenu>
  );
}

interface NavMenuProps {
  className?: string;
}

export default NavMenu;