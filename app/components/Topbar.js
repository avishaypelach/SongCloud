/**
 * Created by avishay on 28-Mar-17.
 */
export default function Topbar() {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo-area">
          <a href="#" className="logo"> <i className="fa fa-mixcloud logo-img-header" aria-hidden="true"/> </a>
          <span className=""> SongCloud </span>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item"><a href="#" className="navigation-item-link"> Explore </a></li>
          <li className="navigation-item"><a href="#" className="navigation-item-link"> Playlist </a></li>
        </ul>
        <div className="search-song-area">
        <input type="" id="" placeholder="Song Name" className="search-song"/> <i className="fa fa-search" aria-hidden="true"/>
        </div>
        <button type="button" className="log-out-btn"> Logout </button>
      </nav>
    </header>
  );
};
