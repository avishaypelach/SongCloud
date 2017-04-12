/**
 * Created by avishay on 28-Mar-17.
 */
import './signup.scss';
import React from 'react'

export default function Signup() {

  return (
    <div className="main-signup signup">
      <div className="logo-area-signup"><i className="fa fa-mixcloud logo-img-signup" aria-hidden="true"/></div>
      <h1 className="signup-h1"> SongCloud </h1>
      <div className="create-account-area">
        <h2 className="signup-h2"> Create account </h2>
        <span className="user-details"> email </span>
        <input type="email" name="email" id="" placeholder="user@" className="user-details-input"/>
        <span className="user-details"> password </span>
        <input type="password" name="password" placeholder="password" className="user-details-input"/>
      </div>
      <button className="continue-btn"> continue </button>
      <div className="is-there-an-account">
        <span className="is-there-an-account-question"> Don't have an account yet? </span>
        <span className="is-there-an-account-signin"> sign in </span>
      </div>
    </div>
  );
};
