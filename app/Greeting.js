/**
 * Created by avishay on 26-Mar-17.
 */

export default class Greeting extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      visible: true
    }
  }

  handleIncrementAge() {
    let count = this.state.counter;

    count++;

    this.setState({ counter: count });
  }

  isToggleTrue() {
    let toggle = !this.state.visible;

    this.setState({visible: toggle})
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
        <input type="button" value={ 'plus' } onClick={() => this.handleIncrementAge()}/>
        <input type="button" value={ 'h2 visible?' } onClick={() => this.isToggleTrue()}/>

      </div>
     )
  }
}


