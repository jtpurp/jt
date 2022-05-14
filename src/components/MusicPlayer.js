import React, { useState, useRef } from 'react';
import '../styles/MusicPlayer.css';

const MusicPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div>MusicPlayer</div>
    )
}

export default MusicPlayer