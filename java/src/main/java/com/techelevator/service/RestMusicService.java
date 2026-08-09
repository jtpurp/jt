package com.techelevator.service;

import com.techelevator.dao.MusicDao;
import com.techelevator.exceptions.MusicAlreadyExistsException;
import com.techelevator.exceptions.MusicNotFoundException;
import com.techelevator.model.Music;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestMusicService implements MusicService {

    private final MusicDao musicDao;

    public RestMusicService(MusicDao musicDao) {
        this.musicDao = musicDao;
    }

    public List<Music> allMusicSuggestions() {
        return musicDao.listAllMusicSuggestions();
    }

    public Music musicSuggestionByMusicId(Integer musicId) {
        try {
            Optional<Music> musicData = Optional.ofNullable(musicDao.getMusicSuggestionByMusicId(musicId));
            if (musicData.isEmpty()) {
                throw new MusicNotFoundException("Music Suggestion Not Found!");
            }
        }
        catch (MusicNotFoundException mnfe){
            System.out.println(mnfe.getMessage());
        }

        return musicDao.getMusicSuggestionByMusicId(musicId);
    }

    public Music musicSuggestionByArtistAndSong(String artist, String song) {
        try {
            Optional<Music> musicData = Optional.ofNullable(musicDao.getMusicSuggestionByArtistAndSong(artist, song));
            if (musicData.isEmpty()) {
                throw new MusicNotFoundException("Music Suggestion Not Found! Incorrect Artist and/or Song.");
            }
        }
        catch (MusicNotFoundException mnfe){
            System.out.println(mnfe.getMessage());
        }

        return musicDao.getMusicSuggestionByArtistAndSong(artist, song);
    }

    public boolean create(Music musicSuggestion) {
        boolean isCreated = false;

        try {
            Optional<Music> musicData = Optional.ofNullable(musicDao.getMusicSuggestionByArtistAndSong(musicSuggestion.getArtist(), musicSuggestion.getSong()));
            if (musicData.isPresent()) {
                throw new MusicAlreadyExistsException("Music Suggestion Already Exists");
            } else {
                musicDao.createMusicSuggestion(musicSuggestion);
                isCreated = true;
            }
        }
        catch (MusicAlreadyExistsException maee){
            System.out.println(maee.getMessage());
        }

        return isCreated;
    }

    public boolean update(Music musicSuggestion, Integer musicId) {
        boolean isUpdated = false;

        try {
            Optional<Music> musicData = Optional.ofNullable(musicDao.getMusicSuggestionByMusicId(musicId));
            if (musicData.isEmpty()) {
                throw new MusicNotFoundException("Music Suggestion Not Found! Unable to update.");
            } else {
                musicDao.updateMusicSuggestion(musicSuggestion, musicId);
                isUpdated = true;
            }
        }
        catch (MusicNotFoundException mnfe){
            System.out.println(mnfe.getMessage());
        }

        return isUpdated;
    }

    public boolean delete(Integer musicId) {
        boolean isDeleted = false;

        try {
            Optional<Music> musicData = Optional.ofNullable(musicDao.getMusicSuggestionByMusicId(musicId));
            if (musicData.isEmpty()) {
                throw new MusicNotFoundException("Music Suggestion Not Found! Unable to delete.");
            } else {
                musicDao.deleteMusicSuggestion(musicId);
                isDeleted = true;
            }
        }
        catch (MusicNotFoundException mnfe){
            System.out.println(mnfe.getMessage());
        }

        return isDeleted;
    }
}
