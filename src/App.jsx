import React, { useEffect, useState } from 'react';
import './App.css';
import Songcard from './Songcard/Songcard';

const App = () => {
  const [songs, setSongs] = useState([]);

  const loadSongs = async () => {
    try {
      const response = await fetch("https://api-practice-snowy.vercel.app/songs");
      const data = await response.json();

      // If data contains 'data' array, use data.data
      if (data?.data) {
        setSongs(data.data);
      } else {
        setSongs(data);
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  useEffect(() => {
    loadSongs();
  }, []);

  return (
    <>
      <h1 className="title">Song List</h1>
      <div className="song-container">
        {songs.map((songInfo, index) => (
          <Songcard key={index} info={songInfo} />
        ))}
      </div>
    </>
  );
};

export default App;
