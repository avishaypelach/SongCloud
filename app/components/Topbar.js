/**
 * Created by avishay on 28-Mar-17.
 */
import {
  NavLink
} from 'react-router-dom'

export default function Topbar() {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo-area">
          <NavLink to="/" className="logo"> <i className="fa fa-mixcloud logo-img-header" aria-hidden="true"/> <span className=""> SongCloud </span> </NavLink>

        </div>
        <ul className="navigation-list">

          <li className="navigation-item"><NavLink to="/Explore" exact activeClassName="selected" className='navigation-item-link'> Explore </NavLink></li>
          <li className="navigation-item"><NavLink to="/Playlist" activeClassName="selected" className='navigation-item-link'> Playlist </NavLink></li>

        </ul>
        <div className="search-song-area">
        <input type="" id="" placeholder="Song Name" className="search-song"/> <i className="fa fa-search" aria-hidden="true"/>
        </div>
        <button type="button" className="log-out-btn"> Logout </button>
      </nav>
    </header>
  );
};
