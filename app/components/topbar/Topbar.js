/**
 * Created by avishay on 28-Mar-17.
 */
import './topbar.scss';
import {
  NavLink
} from 'react-router-dom'

export default function Topbar() {
  return (
    <header className="header topbar">
      <nav className="navigation">
        <div className="logo-area">
          <NavLink to="/" className="logo"> <i className="fa fa-mixcloud logo-img-header" aria-hidden="true"/> <span
            className="songcloud-logo"> SongCloud </span> </NavLink>
        </div>
        <ul className="navigation-list">

          <li className="navigation-item"><NavLink to="/Explore" activeClassName="selected"
                                                   className='navigation-item-link'> Explore </NavLink></li>

          <li className="navigation-item"><NavLink to="/Playlists" activeClassName="selected"
                                                   className='navigation-item-link'> Playlists </NavLink></li>

        </ul>
        <div className="topbar-right-area">
          <div className="search-area">
            <input type="" id="" placeholder="Song Name" className="search-song"/>
            <i className="fa fa-search search-icon" aria-hidden="true"/>
          </div>
            <button type="button" className="log-out-btn"> Logout</button>
        </div>

      </nav>
    </header>
  );
};
