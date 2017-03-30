/**
 * Created by avishay on 28-Mar-17.
 */
import React from 'react';

import Greeting from './Greeting';
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

  // function alertMe() {
  //   alert('Ive made it!!');
  //   Root();
  // }
  //
  // const myDetails = {
  //   age: 30,
  //   name: 'Avishay'
  // };
  //
  // return (
  //   <div>
  //     <h1>Song Cloud</h1>
  //     <Greeting
  //       ooohText="oooh"
  //       myAge={ myDetails.age }
  //       myName={ myDetails.name }
  //       myAlert={alertMe}/>
  //   </div>
  // );

  return <BrowserRouter>
    <div>
      <Topbar/>
      <Switch>
        <Route exact path="/" render={() =>
          <Redirect to="/Explore"/>
        }/>
        <Route exact path="/Explore" component={ Explore } />
        <Route path="/Explore" component={ Explore } />
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
