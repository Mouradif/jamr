import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';

import Styled from './MyTracks.styles';

const MyTracks = (): ReactElement => {
  return (
    <Styled.MyTracks>
      <Typography variant="h2">MyTracks</Typography>
    </Styled.MyTracks>
  );
};

export default MyTracks;
