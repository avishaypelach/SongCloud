/**
 * Created by avishay on 28-Mar-17.
 */
import './root.scss';
import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import store from '../../store'
import Signup from '../signup/Signup';
import Signin from '../signin/Signin';
import Topbar from '../topbar/Topbar';
import Explore from '../explore/Explore';
import Playlists from '../playlists/Playlists';
import Player from '../player/Player';

export default class Root extends React.Component {

  constructor() {
    super();

    this.state = {};
  }


  render() {

    return (
      <div>
        <Topbar
          history={this.props.history}
        />
        <main>
          <Switch>
            <Route exact path="/" render={() =>
              <Redirect to="/explore/trance"/>
            }/>
            <Route path="/explore/:genre" render={(props) => {
              return <Explore
                {...props}
              />
            }}/>
            <Route exact path="/explore" render={() =>
              <Redirect to="/explore/trance"/>
            }/>
            <Route path="/playlists" component={ Playlists }/>
          </Switch>
        </main>
        <Player/>
      </div>
    );
  }
}
