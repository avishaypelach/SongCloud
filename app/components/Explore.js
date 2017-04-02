/**
 * Created by avishay on 28-Mar-17.
 */
import CreateSongList from './CreateSongList'
import Player from './Player'
import GenreChooseComponent from './GenreChooseComponent'

export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [],
      songsLoading: 'loading',
      props: {}
    };
  }

  GetXhr() {

    const xhr = new XMLHttpRequest();

    const genre = this.props.match.params.genre;

    xhr.open('GET', `https://create-bootcamp-songcloud-server.now.sh/tracks?genre=${genre}`);
    xhr.addEventListener('load', () => {
      this.setState({titles: JSON.parse(xhr.responseText), songsLoading: 'loaded'});
    });
    xhr.addEventListener('error', () => {
      this.setState({songsLoading: 'error'});
    });
    xhr.send();
  }

  componentDidMount() {
    this.GetXhr();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.genre === this.props.match.params.genre)
      return;

    this.GetXhr();
  }


  render() {
    switch (this.state.songsLoading) {
      case 'loading':
        return <div>Loading...</div>;
      case 'error':
        return <div>Error!</div>;
      case 'loaded':

        return (
          <div>

            <GenreChooseComponent
              genre = {this.props.match.params.genre}
            />

            <CreateSongList titles={this.state.titles}/>

            <div className="page-navigation">
              <button className="page-navigation-btn previous-btn"> Previous </button>
              <span className="page-number"> Page: 1 </span>
              <button className="page-navigation-btn next-btn"> Next </button>
            </div>

            <Player titles={this.state.titles}/>

          </div>
        );
    }
  };
}
