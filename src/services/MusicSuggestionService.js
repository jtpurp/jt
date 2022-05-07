import axios from 'axios';

const MUSIC_SUGGESTIONS_REST_API_URL = 'http://localhost:8080/music';

class MusicSuggestionService {
    
    getMusicSuggestions() {
        return axios.get(MUSIC_SUGGESTIONS_REST_API_URL);
    }

    getMusicSuggestionByMusicId(musicId) {
        return axios.get(MUSIC_SUGGESTIONS_REST_API_URL + '/' + musicId);
    }

    createMusicSuggestion(musicSuggestion) {
        return axios.post(MUSIC_SUGGESTIONS_REST_API_URL + '/create-music-suggestion', musicSuggestion);
    }

    updateMusicSuggestion(musicSuggestion, musicId) {
        return axios.put(MUSIC_SUGGESTIONS_REST_API_URL + '/update-music-suggestion/' + musicId, musicSuggestion);
    }

    deleteMusicSuggestion(musicId) {
        return axios.delete(MUSIC_SUGGESTIONS_REST_API_URL + '/delete-music-suggestion/' + musicId);
    }

}

export default new MusicSuggestionService();