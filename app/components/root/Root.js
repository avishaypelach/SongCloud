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

import Signup from '../signup/Signup';
import Signin from '../signin/Signin';
import Topbar from '../topbar/Topbar';
import Explore from '../explore/Explore';
import Playlists from '../playlists/Playlists';
import Player from '../player/Player';

export default class Root extends React.Component {

  constructor() {
    super();

    this.state = {
      currentTrack: {},
      playlist: []
    };

    this.updateCurrentTrack = this.updateCurrentTrack.bind(this);
  }


  updateCurrentTrack(newTrack) {
    this.setState({
      currentTrack: Object.assign({}, newTrack)
    })
  }

  // oops(){
  //   return <div> I dont know what did you want from me!</div>
  // }

  render() {

    return <div>
      <Topbar/>
      <main>
        <Switch>
          <Route exact path="/" render={() =>
            <Redirect to="/explore/trance"/>
          }/>
          <Route path="/explore/:genre" render={(props) => {
            return <Explore updateCurrentTrack={this.updateCurrentTrack}
                            {...props}/>
          }}/>

          <Route exact path="/explore" render={() =>
            <Redirect to="/explore/trance"/>
          }/>
          <Route path="/playlists" component={ Playlists }/>
          {/*<Route path="/Player" component={ Player }/>*/}
          {/*<Route component={ Oops }/>*/}
        </Switch>
      </main>
      <Player track={this.state.currentTrack}/>
    </div>
  }
}
