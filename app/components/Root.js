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

export default function Root() {

  return <BrowserRouter>
    <div>
      <Topbar/>
      <Switch>
        <Route exact path="/" render={() =>
          <Redirect to="/Explore/trance"/>
        }/>
        <Route path="/Explore/:genre" component={ Explore } />

        <Route exact path="/Explore" render={()=>
          <Redirect to="/Explore/trance"/>
        }/>
        <Route path="/Playlist" component={ Playlist } />
        <Route path="/Player" component={ Player } />
        <Route component={ Oops } />
      </Switch>
    </div>
  </BrowserRouter>;
  // return (
  //   <div>
  //     <Signup/>
  //     <Signin/>
  //
  //     <main>
  //       <Topbar/>
  //       <Explore/>
  //     </main>
  //
  //     <Playlist/>
  //     <Player/>
  //   </div>
  // );
}

function Oops () {
  return <div>Oops! Not sure I know what you want</div>;
}
