package com.techelevator.service;

import com.techelevator.dao.MusicDao;
import com.techelevator.model.Music;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestMusicService implements MusicService {

    private final MusicDao musicDao;

    public RestMusicService(MusicDao musicDao) {
        this.musicDao = musicDao;
    }

    public List<Music> allMusicSuggestions() {
        return musicDao.listAllMusicSuggestions();
    }

    public Music musicSuggestionByMusicId(Integer musicId) { return musicDao.getMusicSuggestionByMusicId(musicId); }

    public boolean create(Music musicSuggestion) {
        boolean isCreated = false;

        try {
            musicDao.createMusicSuggestion(musicSuggestion);
            isCreated = true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

        return isCreated;
    }

    public boolean update(Music musicSuggestion, Integer musicId) {
        boolean isUpdated = false;

        try {
            musicDao.updateMusicSuggestion(musicSuggestion, musicId);
            isUpdated = true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

        return isUpdated;
    }

    public boolean delete(Integer musicId) {
        boolean isDeleted = false;

        try {
            musicDao.deleteMusicSuggestion(musicId);
            isDeleted = true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

        return isDeleted;
    }
}
