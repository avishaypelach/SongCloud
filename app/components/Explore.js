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
                <li className="janner-navigation-li"><a className="janner-navigation-a" href="#"> Janner </a></li>
              </ul>
            </div>
            <CreateSongList titles = {this.state.titles}/>
            <div>
              <button> Previous</button>
              <button> Next</button>
            </div>
            {/*<div>*/}
              {/*<span> Page Number: 1 </span>*/}
            {/*</div>*/}
            {/*<Player/>*/}
          </div>
        );
    }
  };
}
