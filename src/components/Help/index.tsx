import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';

import Styled from './Help.styles';

const Help = (): ReactElement => {
  return (
    <Styled.Help>
      <Typography variant="h2">Help</Typography>
    </Styled.Help>
  );
};

export default Help;
