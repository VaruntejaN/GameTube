import React from 'react'
import { useContext } from 'react';
import FetchContext from '../context/FetchContext';


const GameDetails = () => {
  const { currentGame } = useContext(FetchContext);
  const { background_image, genres, name, rating, released, short_screenshots, stores } = currentGame;

  return (
    <div>
      This game
    </div>
  )
}

export default GameDetails
