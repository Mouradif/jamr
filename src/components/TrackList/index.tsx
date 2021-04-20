import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';

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
            <Card>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Refresh Type Beat"
                subheader="BeeTwiin"
              />
              <CardMedia
                image={`https://source.unsplash.com/random?music&${card}`}
                title="Image title"
              />
              <CardActions>
                <Button variant="outlined" fullWidth size="large" color="primary">
                  Contribute to Track
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Styled.TrackList>
  );
};

export default TrackList;
