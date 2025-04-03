import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pauseSong } from '../../redux/playerSlice';
import './Player.css';

const Player = () => {
  const currentSong = useSelector((state) => state.player.currentSong);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  // life cycle of the component
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]); // if you pass something in the [] dependency array, if isPlaying changes this component will re-render 

  if (!currentSong) {
    return <div className="player">No song selected</div>;
  }

  return (
    <div className="player">
      <div className="player__song-info">
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
      </div>
      <audio ref={audioRef} src={currentSong.url} className="audio-control" />
      <div className="player__controls">
        <button onClick={() => dispatch(pauseSong())} className="control-btn">
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default Player;
