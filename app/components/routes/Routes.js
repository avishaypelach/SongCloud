/**
 * Created by avishay on 04-Apr-17.
 */
import './routes.scss';
import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Signin from '../signin/Signin'
import Signup from  '../signup/Signup'
import Root from '../root/Root'


export default function Routes() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/signin" component={Signin}/>
      <Route exact path="/signup" component={Signup}/>
      <Route path="/" component={Root}/>
    </Switch>
  </BrowserRouter>
}
