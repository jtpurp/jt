package com.techelevator.service;

import com.techelevator.model.Music;

import java.util.List;

public interface MusicService {

    List<Music> allMusicSuggestions();

    Music musicSuggestionByMusicId(Integer musicId);

    Music musicSuggestionByArtistAndSong(String artist, String song);

    boolean create(Music musicSuggestion);

    boolean update(Music musicSuggestion, Integer musicId);

    boolean delete(Integer musicId);
}
