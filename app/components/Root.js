/**
 * Created by avishay on 28-Mar-17.
 */
import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Signup from './Signup';
import Signin from './Signin';
import Topbar from './Topbar';
import Explore from './Explore';
import Playlist from './Playlists';
import Player from './Player';

export default class Root extends React.Component {

  constructor() {
    super();

    this.state = {
      currentTrack: {},
      playlists:[{},{}]
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
          <Route path="/playlist" component={ Playlist }/>
          {/*<Route component={ Oops }/>*/}
        </Switch>
      </main>
      <Player track={this.state.currentTrack}/>
    </div>
  }
}
