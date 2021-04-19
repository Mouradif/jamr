import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';

import reactLogo from '../../logo.svg';
import Footer from '../Footer';
import Help from '../Help';
import MyTracks from '../MyTracks';
import Navbar from '../Navbar';
import TrackList from '../TrackList';
import Styled from './App.styles'

const App = (): ReactElement =>  {
  return (
    <>
      <Navbar />
      <Styled.App className="App">
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
        {/* <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </Styled.App>
      <Footer />
    </>
  );
}

export default App;
