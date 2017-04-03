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
import Playlist from './Playlist';
import Player from './Player';

export default class Root extends React.Component {

  constructor() {
    super();

    this.state = {
      currentTrack: {}
    };
  }


  updateCurrentTrack(newTrack){
    this.setState({
      currentTrack: Object.assign.currentTrack({},newTrack)
    })
  }

  oops(){
    return <div> I dont know what did you want from me!</div>
  }

  render() {

    return <BrowserRouter>
      <Switch>
        <Route exact path="/Signin" component={ Signin }/>
        <Route exact path="/Signup" component={ Signup }/>

        <Route path="/" component={() => {

          return  <div>
              <Topbar/>
              <main>
                <Switch>
                  <Route exact path="/" render={() =>
                    <Redirect to="/Explore/trance"/>
                  }/>
                  <Route path="/Explore/:genre" component={ Explore }/>

                  <Route exact path="/Explore" render={() =>
                    <Redirect to="/Explore/trance"/>
                  }/>
                  <Route path="/Playlist" component={ Playlist }/>
                  {/*<Route path="/Player" component={ Player }/>*/}
                  {/*<Route component={ Oops }/>*/}
                </Switch>
              </main>
              <Player track={this.state.currentTrack }/>
            </div>
        } }/>
      </Switch>
    </BrowserRouter>;
  }
}
