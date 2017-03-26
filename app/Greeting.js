/**
 * Created by avishay on 26-Mar-17.
 */


export default function Greeting (props){
  return <div>
      <p> Hi! my name is: {props.myName}. and my age is: {props.myAge}. </p>
      <input type="button" value={ props.ooohText || 'oooh' } onClick={props.myAlert}></input>
    </div>;
}
