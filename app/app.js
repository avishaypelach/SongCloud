import ReactDOM from 'react-dom';
import React from 'react';

import Greeting from './Greeting';

const myDetails = {
  age: 30,
  name: 'Avishay'
};

const Root = () => {
  return (
    <div>
      <h1>Song Cloud</h1>
      <Greeting
        ooohText = "oooh"
        myAge = { myDetails.age }
        myName = { myDetails.name }
        myAlert = {alertMe}/>
    </div>
  );
};

Root();

function alertMe() {
  alert('Ive made it!!');
  Root();
}

ReactDOM.render(<Root/>, document.querySelector('#root'));
