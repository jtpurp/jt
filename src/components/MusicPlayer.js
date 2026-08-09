import React, { useState, useRef, useEffect } from 'react';
import { BsSkipForward } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import { BsPauseCircle } from "react-icons/bs";
import { BsSkipBackward } from "react-icons/bs";
import Road from "../songs/Road.mp3";
import BetterNow from "../songs/BetterNow.mp3";
import Busy from "../songs/Busy.mp3";
import CantBuyHappiness from "../songs/CantBuyHappiness.mp3";
import LifeOnHold from "../songs/LifeOnHold.mp3";
import MeAndYou from "../songs/MeAndYou.mp3";
import SmashTheFunk from "../songs/SmashTheFunk.mp3";
import Sojourn from "../songs/Sojourn.mp3";
import '../styles/MusicPlayer.css';

const MusicPlayer = () => {
    //Songs
    const songs = [Road, BetterNow, Busy, CantBuyHappiness, LifeOnHold, MeAndYou, SmashTheFunk, Sojourn];
    const road = "Road by Lane 8";
    const betterNow = "Better Now by ODESZA, MARO";
    const busy = "Busy by Liquid Stranger";
    const cantBuyHappiness = "Can't Buy Happiness by Tash Sultana";
    const lifeOnHold = "Life on Hold by Nora En Pure";
    const meAndYou = "Me And You by NERO";
    const smashTheFunk = "Smash the Funk by GRiZ";
    const sojourn = "Sojourn by Seven Lions, Crystal Skies";
    const songInfoList = [road, betterNow, busy, cantBuyHappiness, lifeOnHold, meAndYou, smashTheFunk, sojourn];

    //States
    const [songsIndex, setSongsIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    //References
    const musicPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    //Time
    useEffect(() => {
        const seconds = Math.floor(musicPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [musicPlayer?.current?.loadedmetadata, musicPlayer?.current?.readyState]);

    const calcTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnedMinutes}:${returnedSeconds}`;
    }

    //Toggle Play/Pause & Progress Bar Range
    const togglePlayPause = () => {
        const previousValue = isPlaying;
        setIsPlaying(!previousValue);

        if (previousValue) {
            musicPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            musicPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const togglePlay = () => {
        musicPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const togglePause = () => {
        musicPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
    }

    const whilePlaying = () => {
        progressBar.current.value = musicPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const changeRange = () => {
        musicPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    //Skip Backward & Forward
    const skipBackward = () => {
        setIsPlaying(true);
        if (songsIndex === 0) {
            setSongsIndex(songs.length - 1);
        } else {
            setSongsIndex(songsIndex - 1);
        }
        changeRange();
    }

    const skipForward = () => {
        setIsPlaying(true);
        if (songsIndex === songs.length - 1) {
            setSongsIndex(0);
        } else {
            setSongsIndex(songsIndex + 1);
        }
        changeRange();
    }

    return (
        <div className="music-player">
            {/* Music Reference */}
            <audio ref={musicPlayer} src={songs[songsIndex]} preload="metadata"></audio>

            {/* Music Player Controls */}
            <div className="controls">
                <button className="forward-backward" onClick={skipBackward}><BsSkipBackward /></button>
                <button className="play-pause" onClick={togglePlayPause}>
                    {isPlaying ? <BsPlayCircle className="button-background"/> : <BsPauseCircle className="button-background"/>}
                </button>
                <button className="forward-backward" onClick={skipForward}><BsSkipForward /></button>
            </div>

            {/* Time Bar */}
            <div className="bar">
                {/* Current Time */}
                <div id="time">{calcTime(currentTime)}</div>
                {/* Progress Bar */}
                <input id="slider" type="range" defaultValue="0" ref={progressBar} onChange={changeRange} onMouseDown={togglePause} onMouseUp={isPlaying ? togglePause : togglePlay} />
                {/* Duration */}
                <div id="time">{(duration && !isNaN(duration)) && calcTime(duration)}</div>
            </div>

            {/* Song Info */}
            <div className="song-info">{songInfoList[songsIndex]}</div>
        </div>
    )
}

export default MusicPlayer