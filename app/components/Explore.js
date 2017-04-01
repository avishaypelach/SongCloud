/**
 * Created by avishay on 28-Mar-17.
 */
import CreateSongList from './CreateSongList'
import Player from './Player'
export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [],
      songsLoading: 'loading'
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://create-bootcamp-songcloud-server.now.sh/tracks?genre=trance');
    xhr.addEventListener('load', () => {
      this.setState({titles: JSON.parse(xhr.responseText), songsLoading: 'loaded'});
    });
    xhr.addEventListener('error', () => {
      this.setState({songsLoading: 'error'});
    });
    xhr.send();
  }



  render() {
    switch (this.state.songsLoading) {
      case 'loading':
        return <div>Loading...</div>;
      case 'error':
        return <div>Error!</div>;
      case 'loaded':
        console.info(this.state.titles);
        return (
          <div>
            <div className="janner-navigation-header">
              <ul className="janner-navigation">
                <li className="janner-navigation-li"> <a className="janner-navigation-a" href="#"> Genre </a> </li>
              </ul>
            </div>
            <h2 className="genre-title"> Genre: </h2>
            <CreateSongList titles = {this.state.titles}/>
            <div className="page-navigation">
              <button className="page-navigation-btn previous-btn"> Previous </button>
              <span className="page-number"> Page: 1 </span>
              <button className="page-navigation-btn next-btn"> Next </button>
            </div>

            <Player/>
          </div>
        );
    }
  };
}
