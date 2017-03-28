/**
 * Created by avishay on 28-Mar-17.
 */

import Greeting from './Greeting';

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

  return (
    <div>
      {/*<Signup/>*/}
      {/*<Signin/>*/}

      <main>
        <Topbar/>
        <Explore/>
      </main>

      {/*<Playlist/>*/}
      <Player/>
    </div>
  );

}


