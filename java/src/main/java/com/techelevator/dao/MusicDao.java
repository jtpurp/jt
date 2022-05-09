package com.techelevator.dao;

import com.techelevator.model.Music;

import java.util.List;

public interface MusicDao {

    List<Music> listAllMusicSuggestions();

    Music getMusicSuggestionByMusicId(Integer musicId);

    void createMusicSuggestion(Music musicSuggestion);

    void updateMusicSuggestion(Music musicSuggestion, Integer musicId);

    void deleteMusicSuggestion(Integer musicId);
}
