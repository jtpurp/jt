import React from 'react';
import Spinner from '../components/Spinner.js';
import MusicSuggestionService from '../services/MusicSuggestionService';
import '../styles/MusicDetail.css';

class MusicDetail extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      musicId: this.props.match.params.musicId,
      artist: '',
      song: '',
      album: '',
      link: '',

      isLoading: true
    }

    this.changeArtistHandler = this.changeArtistHandler.bind(this);
    this.changeSongHandler = this.changeSongHandler.bind(this);
    this.changeAlbumHandler = this.changeAlbumHandler.bind(this);
    this.changeLinkHandler = this.changeLinkHandler.bind(this);

    this.updateMusicSuggestion = this.updateMusicSuggestion.bind(this);
    this.deleteMusicSuggestion = this.deleteMusicSuggestion.bind(this);
    this.returnToMusic = this.returnToMusic.bind(this);
  }

  componentDidMount() {
    this.wait(1250);

    MusicSuggestionService.getMusicSuggestionByMusicId(this.state.musicId).then((response) => {
      let musicSuggestion = response.data;
      //console.log('musicSuggestion => ' + JSON.stringify(musicSuggestion));

      this.setState({ artist: musicSuggestion.artist, song: musicSuggestion.song, album: musicSuggestion.album, link: musicSuggestion.link });
    });
  }

  updateMusicSuggestion = (e) => {
    e.preventDefault();
    let musicSuggestion = { artist: this.state.artist, song: this.state.song, album: this.state.album, link: this.state.link };
    //console.log('musicSuggestion => ' + JSON.stringify(musicSuggestion));

    MusicSuggestionService.updateMusicSuggestion(musicSuggestion, this.state.musicId).then((response) => {
      this.returnToMusic();
    });
  }

  deleteMusicSuggestion() {
    MusicSuggestionService.deleteMusicSuggestion(this.state.musicId);//.then((response) => {
    //this.setState({ musicId: '', artist: '', song: '', album: '', link: '' });
    //this.returnToMusic();
    //});
    this.props.history.push('/music');
  }

  returnToMusic() {
    this.props.history.push('/music');
  }

  cancelMusicSuggestion() {
    this.setState({ artist: '' });
    this.setState({ song: '' });
    this.setState({ album: '' });
    this.setState({ link: '' });
  }

  changeArtistHandler = (event) => {
    this.setState({ artist: event.target.value });
  }

  changeSongHandler = (event) => {
    this.setState({ song: event.target.value });
  }

  changeAlbumHandler = (event) => {
    this.setState({ album: event.target.value });
  }

  changeLinkHandler = (event) => {
    this.setState({ link: event.target.value });
  }

  load = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  wait = async () => {
    await this.load(2250);
    this.setState({ isLoading: false });
  };

  render() {
    if (this.state.isLoading) {
      return <Spinner />
    } else {
      return (
        <div className="music-detail">
          <h1>Music Suggestion Details</h1>
          <div className="tables-table-container">
            <div className="detail-table-container">
              <table className="music-table">
                <thead className="table-head" id="detail-table-head">
                  <tr>
                    <th>Artist</th>
                    <th>Song</th>
                    <th>Album</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="detail-row" key={this.state.musicId}>
                    <td>{this.state.artist}</td>
                    <td>{this.state.song}</td>
                    <td>{this.state.album}</td>
                    <td><a href={this.state.link} target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="form-container">
            <h1>Update Music Suggestion</h1>
            <form className="update-suggestion-form">
              <label className="music-label" htmlFor="artist">Artist</label>
              <input className="input" type="text" placeholder={this.state.artist} name="artist" value={this.state.artist} onChange={this.changeArtistHandler} />
              <label className="music-label" htmlFor="song">Song</label>
              <input className="input" type="text" placeholder={this.state.song} name="song" value={this.state.song} onChange={this.changeSongHandler} />
              <label className="music-label" htmlFor="album">Album</label>
              <input className="input" type="text" placeholder={this.state.album} name="album" value={this.state.album} onChange={this.changeAlbumHandler} />
              <label className="music-label" htmlFor="link">Link</label>
              <input className="input" type="text" placeholder={this.state.link} name="link" value={this.state.link} onChange={this.changeLinkHandler} />
              <button className="music-button" id="form-button" onClick={this.updateMusicSuggestion}>Update</button>
              <button className="music-button" id="form-button" onClick={this.deleteMusicSuggestion}>Delete</button>
              <button className="music-button" id="form-button" onClick={this.returnToMusic}>Return to Music</button>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default MusicDetail