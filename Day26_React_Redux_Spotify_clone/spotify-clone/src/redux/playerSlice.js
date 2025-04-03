import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [
    { id: 1, title: "Song One", artist: "Artist One", url: "/music/song1.mp3" },
    { id: 2, title: "Song Two", artist: "Artist Two", url: "/music/song2.mp3" },
    { id: 3, title: "Song Three", artist: "Artist Three", url: "/music/song3.mp3" },
  ],
  currentSong: null,
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    pauseSong: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { playSong, pauseSong } = playerSlice.actions;
export default playerSlice.reducer;
