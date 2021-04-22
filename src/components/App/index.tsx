import Container from '@material-ui/core/Container';
import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from '../Footer';
import Help from '../Help';
import MyTracks from '../MyTracks';
import Navbar from '../Navbar';
import TrackList from '../TrackList';
import Styled from './App.styles';

const App = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Styled.App className="App">
        <Container maxWidth="lg">
          <Switch>
            <Route path="/my-tracks">
              <MyTracks />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/">
              <TrackList />
            </Route>
          </Switch>
        </Container>
      </Styled.App>
      <Footer />
    </>
  );
};

export default App;
