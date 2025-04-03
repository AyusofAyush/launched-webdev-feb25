import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong } from '../../redux/playerSlice';
import './Playlist.css';

const Playlist = () => {
  const playlist = useSelector((state) => state.player.playlist);
  const dispatch = useDispatch();

  const handlePlay = (song) => {
    dispatch(playSong(song));
  };

  return (
    <div className="playlist">
      <h2>Your Playlist</h2>
      <ul>
        {playlist.map((song) => (
          <li key={song.id} className="song-item">
            <div className="song-info">
              <span>{song.title}</span> - <span>{song.artist}</span>
            </div>
            <button onClick={() => handlePlay(song)} className="play-btn">Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
