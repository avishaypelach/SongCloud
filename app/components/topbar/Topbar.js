/**
 * Created by avishay on 28-Mar-17.
 */
import './topbar.scss';
import {
  NavLink
} from 'react-router-dom'

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(event) {
    event.preventDefault();
    let mySearch = this.search.value;
    this.props.history.push(`/explore/${mySearch}?search=true`);
  }

  render() {
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
            <form className="search-area" onSubmit={this.handleSearch}>
              <input placeholder="Song Name" className="search-song" ref={(searchValue) => this.search = searchValue}/>
              <i className="fa fa-search search-icon" aria-hidden="true"/>
            </form>
            <button type="button" className="log-out-btn"> Logout</button>
          </div>

        </nav>
      </header>
    );

  }
}
