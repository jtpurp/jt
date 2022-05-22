import React from 'react';
import Spinner from '../components/Spinner.js';
import MusicPlayer from '../components/MusicPlayer.js'
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
            link: '',

            isLoading: true,
            showForm: false
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
        this.wait(1250);

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

    load = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    wait = async (milliseconds = 1250) => {
        await this.load(milliseconds);
        this.setState({ isLoading: false });
    };

    render() {
        if (this.state.isLoading) {
            return <Spinner />
        } else {
            return (
                <div className="music-page">
                    <div className="music-play">
                        <h1>Music Player</h1>
                        <div>
                            <MusicPlayer />
                        </div>

                    </div>
                    <h1>Music Suggestions</h1>
                    <div className="tables-table-container">
                        <div className="table-container">
                            <table className="music-table">
                                <thead className="table-head">
                                    <tr>
                                        <th>Artist</th>
                                        <th>Song</th>
                                        <th>Album</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="music-row">
                                        <td>Lane 8</td>
                                        <td>Road</td>
                                        <td>Brightest Lights</td>
                                        <td><a href="https://open.spotify.com/track/6kckNpuM5oXZrObLExRg6d?si=413ba4a967544c38" target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                                    </tr>
                                    <tr className="music-row">
                                        <td>Liquid Stranger</td>
                                        <td>Busy</td>
                                        <td>Balance</td>
                                        <td><a href="https://open.spotify.com/track/6Z1U91V88D4Hs6zyttW8sr?si=fcf57759f59248f9" target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                                    </tr>
                                    <tr className="music-row">
                                        <td>Tash Sultana</td>
                                        <td>Can't Buy Happiness</td>
                                        <td>Flow State</td>
                                        <td><a href="https://open.spotify.com/track/5IwkralT3gnN9hL900X0Fr?si=3a91741d5c1240d6" target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                                    </tr>
                                    <tr className="music-row">
                                        <td>GRiZ</td>
                                        <td>Smash the Funk</td>
                                        <td>Mad Liberation</td>
                                        <td><a href="https://open.spotify.com/track/1kiEueR1jHSW2dD4LSD6X0?si=41af4a9635274c0b" target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                                    </tr>
                                    <tr className="music-row">
                                        <td>ODESZA, MARO</td>
                                        <td>Better Now</td>
                                        <td></td>
                                        <td><a href="https://open.spotify.com/track/1iSuktdIdWrdfq0slQ4auO?si=9b10d1a989fa4c06" target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                                    </tr>
                                    <tr className="music-row">
                                        <td>Seven Lions, Crystal Skies</td>
                                        <td>Sojourn</td>
                                        <td></td>
                                        <td><a href="https://open.spotify.com/track/1CxvAJLpvVXPt9lABVCwDC?si=7cc2311172bf4b86" target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                                    </tr>
                                    <tr className="music-row">
                                        <td>Nora En Pure</td>
                                        <td>Life on Hold</td>
                                        <td></td>
                                        <td><a href="https://open.spotify.com/track/0uTkVCAf8PxMo8NJ3tFYzH?si=d34a374041e34668" target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                                    </tr>
                                    <tr className="music-row">
                                        <td>NERO</td>
                                        <td>Me And You</td>
                                        <td>Welcome Reality +</td>
                                        <td><a href="https://open.spotify.com/track/0xIof5gmHjFY0t1eX7angP?si=030f18a1aa234bfb" target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                                    </tr>

                                    {
                                        this.state.music.map(
                                            music =>
                                                <tr className="music-row" key={music.musicId} onClick={() => this.editMusicSuggestion(music.musicId)}>
                                                    <td>{music.artist}</td>
                                                    <td>{music.song}</td>
                                                    <td>{music.album}</td>
                                                    <td><a href={music.link} target="_blank" rel="noreferrer" className="music-link">Listen!</a></td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="form-container">
                        <button className="music-button" onClick={() => { this.setState({ showForm: !this.state.showForm }) }}>Share Music!</button>
                        {
                            this.state.showForm ?
                                <form className="suggestion-form">
                                    <label className="music-label" htmlFor="artist">Artist</label>
                                    <input className="input" type="text" placeholder="Who created it?" name="artist" value={this.state.artist} onChange={this.changeArtistHandler} />
                                    <label className="music-label" htmlFor="song">Song</label>
                                    <input className="input" type="text" placeholder="What's it called?" name="song" value={this.state.song} onChange={this.changeSongHandler} />
                                    <label className="music-label" htmlFor="album">Album</label>
                                    <input className="input" type="text" placeholder="What album is it from?" name="album" value={this.state.album} onChange={this.changeAlbumHandler} />
                                    <label className="music-label" htmlFor="link">Link</label>
                                    <input className="input" type="text" placeholder="Share a link if you care to :)" name="link" value={this.state.link} onChange={this.changeLinkHandler} />
                                    <button className="music-button" id="form-button" onClick={this.shareMusicSuggestion}>Share</button>
                                    <button className="music-button" id="form-button" onClick={this.cancelMusicSuggestion}>Cancel</button>
                                </form> : null
                        }
                    </div>
                </div>
            )
        }
    }
}

export default Music;