/**
 * Created by avishay on 28-Mar-17.
 */
import MDSpinner from "react-md-spinner";
import CreateSongList from './CreateSongList'
import GenreChooseComponent from './GenreChooseComponent'

export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [],
      songsLoading: 'loading',
      props: {},
      offset: 0,
      limit: 15,
      onClickSong: {}

    };
  }

  GetXhr() {

    const xhr = new XMLHttpRequest();


    const genre = this.props.match.params.genre;
    const offset = this.state.offset;
    const limit = this.state.limit;

    console.info(offset);
    console.info(limit);

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&limit=${limit}&offset=${offset}&tags=${genre}`);

    xhr.addEventListener('load', () => {
      this.setState({titles: JSON.parse(xhr.responseText), songsLoading: 'loaded'});
    });

    xhr.addEventListener('error', () => {
      this.setState({songsLoading: 'error'});
    });
    xhr.send();
  }

  nextPage() {
    this.setState({
      offset: this.state.offset + this.state.limit
    })
  }

  previousPage() {
    this.setState({
      offset: this.state.offset - this.state.limit
    })
  }

  componentDidMount() {
    this.GetXhr();
  }

  componentDidUpdate(prevProps, prevState) {

    const prev = prevProps.match.params.genre;
    const changState = this.props.match.params.genre;

    if (prev !== changState) {
      this.setState({offset: 0}, () => {
        this.GetXhr();
      })
    }
    if (prevState.offset !== this.state.offset) {
        this.GetXhr();
    }
  }


  render() {
    switch (this.state.songsLoading) {
      case 'loading':
        return <div className="loading-time"><MDSpinner size={100}/></div>;
      case 'error':
        return <div>Error!</div>;
      case 'loaded':

        return (
          <div>
            <div className="explore-container">
              <GenreChooseComponent
                genre={this.props.match.params.genre}
              />

              <CreateSongList
                titles={this.state.titles}
              />

              <div className="page-navigation">
                <button className="page-navigation-btn previous-btn" onClick={this.previousPage.bind(this)}
                        disabled={this.state.offset === 0}> Previous
                </button>
                <span className="page-number"> Page: {(this.state.offset / this.state.limit) + 1} </span>
                <button className="page-navigation-btn next-btn" onClick={this.nextPage.bind(this)}> Next</button>
              </div>
            </div>
          </div>
        );
    }
  };
}
