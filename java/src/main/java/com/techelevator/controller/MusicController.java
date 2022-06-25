package com.techelevator.controller;

import com.techelevator.model.Music;
import com.techelevator.service.RestMusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class MusicController {

    private final RestMusicService musicService;

    public MusicController(RestMusicService musicService) {
        this.musicService = musicService;
    }

    @RequestMapping(value = "/music", method = RequestMethod.GET)
    public List<Music> listAllMusicSuggestions() {
        return musicService.allMusicSuggestions();
    }

    @RequestMapping(value = "/music/{musicId}", method = RequestMethod.GET)
    public Music getMusicSuggestionByMusicId(@PathVariable Integer musicId) {
        return musicService.musicSuggestionByMusicId(musicId);
    }

    @RequestMapping(value = "/music/song", method = RequestMethod.GET)
    public Music getMusicSuggestionByArtistAndSong(@RequestParam String artist, @RequestParam String song) {
        return musicService.musicSuggestionByArtistAndSong(artist, song);
    }

    @RequestMapping(value = "/music/create-music-suggestion", method = RequestMethod.POST)
    public boolean createMusicSuggestion(@RequestBody Music musicSuggestion) {
        return musicService.create(musicSuggestion);
    }

    @RequestMapping(value = "/music/update-music-suggestion/{musicId}", method = RequestMethod.PUT)
    public boolean updateMusicSuggestion(@RequestBody Music musicSuggestion, @PathVariable Integer musicId) {
        return musicService.update(musicSuggestion, musicId);
    }

    @RequestMapping(value = "/music/delete-music-suggestion/{musicId}", method = RequestMethod.DELETE)
    public boolean deleteMusicSuggestion(@PathVariable Integer musicId) {
        return musicService.delete(musicId);
    }

}
