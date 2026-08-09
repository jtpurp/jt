package com.techelevator.controller;

import com.techelevator.model.Music;
import com.techelevator.service.RestMusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/music", method = RequestMethod.GET)
    public List<Music> listAllMusicSuggestions() {
        return musicService.allMusicSuggestions();
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/music/{musicId}", method = RequestMethod.GET)
    public Music getMusicSuggestionByMusicId(@PathVariable Integer musicId) {
        return musicService.musicSuggestionByMusicId(musicId);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/music/song", method = RequestMethod.GET)
    public Music getMusicSuggestionByArtistAndSong(@RequestParam String artist, @RequestParam String song) {
        return musicService.musicSuggestionByArtistAndSong(artist, song);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/music/create-music-suggestion", method = RequestMethod.POST)
    public boolean createMusicSuggestion(@RequestBody Music musicSuggestion) {
        return musicService.create(musicSuggestion);
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @RequestMapping(value = "/music/update-music-suggestion/{musicId}", method = RequestMethod.PUT)
    public boolean updateMusicSuggestion(@RequestBody Music musicSuggestion, @PathVariable Integer musicId) {
        return musicService.update(musicSuggestion, musicId);
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @RequestMapping(value = "/music/delete-music-suggestion/{musicId}", method = RequestMethod.DELETE)
    public boolean deleteMusicSuggestion(@PathVariable Integer musicId) {
        return musicService.delete(musicId);
    }

}
