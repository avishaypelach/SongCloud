/**
 * Created by avishay on 26-Mar-17.
 */
import React from 'react'

export default class Greeting extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
      visible: true,
      people: [
        {
          name: 'John Doe',
          kills: 0
        },
        {
          name: 'Peter Pan',
          kills: 0
        }
      ]
    }
  }

  increment() {

    let count = this.state.counter;

    count++;

    const newPeople = this.state.people.map((value) =>
      Object.assign({}, value, {kills: count})
    );

    this.setState({people: newPeople, counter: count});
  }

  isToggleTrue() {
    let toggle = !this.state.visible;

    this.setState({visible: toggle})
  }

  createPeople() {
    return (
      <ul className="">
        {this.state.people.map((value) => {
          return <li key={value.name}> {value.name+' '+ value.kills} </li>;
        })}
      </ul>
    );
  }


  render() {
    let count;

    if (this.state.visible === false) {
      count = <h1> counter: {this.state.counter} </h1>;
    }
    else {
      count = null;
    }
    return (
      <div>
        {count}
        <p> Hi! my name is: {this.props.myName}. and my age is: {this.props.myAge}. </p>
        <input type="button" value={ this.props.ooohText || 'oooh' } onClick={this.props.myAlert}/>
        <input type="button" value={ 'plus' } onClick={() => this.increment()}/>
        <input type="button" value={ 'h2 visible?' } onClick={() => this.isToggleTrue()}/>
        {this.createPeople()}
      </div>
    )
  }
}


