import React, { ReactElement } from 'react';

import Styled from './MyTracks.styles';
import Demo from '../Demo/Demo';

const MyTracks = (): ReactElement => {
  return (
    <Styled.MyTracks>
      <Demo />
    </Styled.MyTracks>
  );
};

export default MyTracks;
