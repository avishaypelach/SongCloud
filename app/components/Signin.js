/**
 * Created by avishay on 28-Mar-17.
 */
export default function Signin() {
  return (
    <div className="main-signin">
      <div className="logo-area-signin"><i className="fa fa-mixcloud logo-img-signin" aria-hidden="true"/></div>
      <h1 className="signin-h1"> SongCloud </h1>
      <div className="signin-area">
        <h2 className="signin-h2"> sign in </h2>
        <span className="user-details"> email </span>
        <input type="email" name="email" id="" placeholder="user@" className="user-details-input"/>
        <span className="user-details"> password </span>
        <input type="password" name="password" placeholder="password" className="user-details-input"/>
      </div>
      <button className="continue-btn"> continue </button>
      <div className="is-there-an-account">
        <span className="is-there-an-account-question"> Don't have an account yet? </span>
        <span className="is-there-an-account-create-acount"> create account </span>
      </div>
    </div>
  );
};
