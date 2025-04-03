import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Playlist from "./components/Playlist/Playlist";
import Player from "./components/Player/Player";

function App() {
  // you could have created all the routes here
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Playlist />
        <Player />
      </div>
    </div>
  );
}

export default App;
