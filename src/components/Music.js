import React from 'react';
//import ReactPlayer from 'react-player';
import MusicSuggestionService from '../services/MusicSuggestionService';
import '../styles/Music.css';

class Music extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            music: [],

            musicId: '',
            artist: '',
            song: '',
            album: '',
            link: ''
        }

        this.changeArtistHandler = this.changeArtistHandler.bind(this);
        this.changeSongHandler = this.changeSongHandler.bind(this);
        this.changeAlbumHandler = this.changeAlbumHandler.bind(this);
        this.changeLinkHandler = this.changeLinkHandler.bind(this);

        this.editMusicSuggestion = this.editMusicSuggestion.bind(this);
        this.shareMusicSuggestion = this.shareMusicSuggestion.bind(this);
        this.cancelMusicSuggestion = this.cancelMusicSuggestion.bind(this);
    }

    componentDidMount() {
        MusicSuggestionService.getMusicSuggestions().then((response) => {
            this.setState({ music: response.data })
        });
    }

    editMusicSuggestion(musicId) {
        this.props.history.push(`/music/${musicId}`);
    }

    shareMusicSuggestion = (e) => {
        e.preventDefault();
        let musicSuggestion = { artist: this.state.artist, song: this.state.song, album: this.state.album, link: this.state.link };
        //console.log('musicSuggestion => ' + JSON.stringify(musicSuggestion));

        if (musicSuggestion.song === '') {
            alert("How am I going to know what song it is?");
        } else {
            MusicSuggestionService.createMusicSuggestion(musicSuggestion).then(response => {
                this.componentDidMount();
            });
        }
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

    render() {
        return (
            <div>
                <div>
                    <h1>Music Player</h1>
                    {/* <div className='music-player'>
                        <ReactPlayer className='react-player'
                            url='../songs/PartsLabour.mp4'
                            playing={false}
                            loop={true}
                            volume={0.5}
                            controls={true}
                            width={300}
                            height={100}
                        />
                    </div> */}
                    <h1>Music Suggestions</h1>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <td>Artist</td>
                                    <td>Song</td>
                                    <td>Album</td>
                                    <td>Link</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.music.map(
                                        music =>
                                            <tr className="music-row" key={music.musicId} onClick={() => this.editMusicSuggestion(music.musicId)}>
                                                <td >{music.artist}</td>
                                                <td >{music.song}</td>
                                                <td >{music.album}</td>
                                                <td >{music.link}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <h1>Share Music Suggestions!</h1>
                <form className="suggestion-form">
                    <label htmlFor="artist">Artist</label>
                    <input type="text" placeholder="Who created it?" name="artist" value={this.state.artist} onChange={this.changeArtistHandler} />
                    <label htmlFor="song">Song</label>
                    <input type="text" placeholder="What's it called?" name="song" value={this.state.song} onChange={this.changeSongHandler} />
                    <label htmlFor="album">Album</label>
                    <input type="text" placeholder="What album is it from?" name="album" value={this.state.album} onChange={this.changeAlbumHandler} />
                    <label htmlFor="link">Link</label>
                    <input type="text" placeholder="Share a link if you care to :)" name="link" value={this.state.link} onChange={this.changeLinkHandler} />
                    <button className="share-button" onClick={this.shareMusicSuggestion}>Share</button>
                    <button className="cancel-button" onClick={this.cancelMusicSuggestion}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default Music;