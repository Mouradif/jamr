import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';

import TrackCard from '../TrackCard';
import Styled from './TrackList.styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TrackList = (): ReactElement => {
  return (
    <Styled.TrackList>
      <Typography variant="h5" component="h1">
        Track list
      </Typography>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
            <TrackCard trackId={`${card}`} />
          </Grid>
        ))}
      </Grid>
    </Styled.TrackList>
  );
};

export default TrackList;
