package com.techelevator.model;

public class Music {

    //INSTANCE VARIABLES
    private Integer musicId;

    private String artist;

    private String song;

    private String album;

    private String link;

    //GETTERS
    public Integer getMusicId() {
        return musicId;
    }

    public String getArtist() {
        return artist;
    }

    public String getSong() {
        return song;
    }

    public String getAlbum() {
        return album;
    }

    public String getLink() {
        return link;
    }

    //SETTERS
    public void setMusicId(Integer musicId) {
        this.musicId = musicId;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public void setSong(String song) {
        this.song = song;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public void setLink(String link) {
        this.link = link;
    }

    //CONSTRUCTORS
    public Music() {};

    public Music(Integer musicId, String artist, String song, String album, String link) {
        this.musicId = musicId;
        this.artist = artist;
        this.song = song;
        this.album = album;
        this.link = link;
    }
}
