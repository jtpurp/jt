package com.techelevator.dao;

import com.techelevator.model.Music;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcMusicDao implements MusicDao {
    //JDBC Template Instantiation
    private final JdbcTemplate jdbcTemplate;

    //Constructor
    public JdbcMusicDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Music> listAllMusicSuggestions() {
        List<Music> musicList = new ArrayList<>();

        String sql = "SELECT music_id, artist, song, album, link FROM music;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);

        while(results.next()) {
            Music musicSuggestion = mapRowToMusic(results);
            musicList.add(musicSuggestion);
        }
        return musicList;
    }

    @Override
    public Music getMusicSuggestionByMusicId(Integer musicId) {
        Music music = null;

        String sql = "SELECT music_id, artist, song, album, link FROM music WHERE music_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, musicId);

        if (results.next()) {
            music = mapRowToMusic(results);
        }
        return music;
    }

    @Override
    public Music getMusicSuggestionByArtistAndSong(String artist, String song) {
        Music music = null;

        String sql = "SELECT music_id, artist, song, album, link FROM music WHERE artist = ? AND song = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, artist, song);

        if (results.next()) {
            music = mapRowToMusic(results);
        }
        return music;
    }

    @Override
    public void createMusicSuggestion(Music musicSuggestion) {
        String sql = "INSERT INTO music (artist, song, album, link) " +
                "VALUES (?, ?, ?, ?);";
        jdbcTemplate.update(sql,
                musicSuggestion.getArtist(), musicSuggestion.getSong(), musicSuggestion.getAlbum(), musicSuggestion.getLink());
    }

    @Override
    public void updateMusicSuggestion(Music musicSuggestion, Integer musicId) {
        String sql = "UPDATE music SET artist = ?, song = ?, album = ?, link = ? " +
                "WHERE music_id = ?;";
        jdbcTemplate.update(sql, musicSuggestion.getArtist(), musicSuggestion.getSong(), musicSuggestion.getAlbum(), musicSuggestion.getLink(), musicId);
    }

    @Override
    public void deleteMusicSuggestion(Integer musicId) {
        String sql = "DELETE FROM music WHERE music_id = ?;";
        jdbcTemplate.update(sql, musicId);
    }

    private Music mapRowToMusic(SqlRowSet rs) {
        Music musicSuggestion = new Music();
        musicSuggestion.setMusicId(rs.getInt("music_id"));
        musicSuggestion.setArtist(rs.getString("artist"));
        musicSuggestion.setSong(rs.getString("song"));
        musicSuggestion.setAlbum(rs.getString("album"));
        musicSuggestion.setLink(rs.getString("link"));

        return musicSuggestion;
    }
}
