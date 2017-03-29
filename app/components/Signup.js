/**
 * Created by avishay on 28-Mar-17.
 */
export default function Signup() {

  return (
    <div className="main-signup">
      <div className="logo-area-signup"><i className="fa fa-mixcloud logo-img-signup" aria-hidden="true"/></div>
      <h1 className="signup-h1"> SongCloud </h1>
      <div className="create-account-area">
        <h2 className="signup-h2"> create account </h2>
        <span className="user-signup-details"> email </span>
        <input type="email" name="name" id="" placeholder="email" className="user-details-input"/>
        <span className="user-signup-details"> password </span>
        <input type="password" name="password" placeholder="password" className="user-details-input"/>
      </div>
      <button className="continue-btn"> continue </button>
      <div className="is-there-an-account">
        {/*<Span> Already have an account? </Span>*/}
        {/*<Span> sign in </Span>*/}
      </div>
    </div>
  );
};
