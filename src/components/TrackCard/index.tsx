import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React, { ReactElement } from 'react';

import Styled from './TrackCard.styles';

const TrackCardInfo = (): ReactElement => {
  return (
    <Styled.TrackCardInfo>
      <div className="info-line-1">
        <Typography variant="body2">BeeTwiin</Typography>
        <Typography variant="caption">2:22</Typography>
      </div>
      <div className="info-line-2">
        <Typography variant="caption">
          <FavoriteIcon />
          712
        </Typography>
        <Typography variant="caption">
          <PlayArrowIcon />
          99
        </Typography>
        <Typography variant="caption">
          <AudiotrackIcon />
          R&B & Soul
        </Typography>
      </div>
    </Styled.TrackCardInfo>
  );
};

const TrackCard = ({ trackId }: TrackCardProps): ReactElement => {
  return (
    <Styled.TrackCard>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography variant="body2">Refresh Type Beat</Typography>}
          subheader={<TrackCardInfo />}
        />
        <CardMedia
          image={`https://source.unsplash.com/random?music&${trackId}`}
          title="Image title"
        />
        <CardActions>
          <Button variant="outlined" fullWidth size="large" color="primary">
            Contribute to Track
          </Button>
        </CardActions>
      </Card>
    </Styled.TrackCard>
  );
};

interface TrackCardProps {
  trackId: string;
}

export default TrackCard;
