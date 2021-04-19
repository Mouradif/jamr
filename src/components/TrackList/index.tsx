import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';

import Styled from './TrackList.styles';

const TrackList = (): ReactElement => {
  return (
    <Styled.TrackList>
      <Typography variant="h2">TrackList</Typography>
    </Styled.TrackList>
  );
}

export default TrackList;