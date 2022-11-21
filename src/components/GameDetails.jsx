import React from 'react'
import { useContext } from 'react';
import FetchContext from '../context/FetchContext';


const GameDetails = () => {
  const { currentGame } = useContext(FetchContext);
  const { background_image, genres, name, rating, released, short_screenshots, stores } = currentGame;

  return (
    <div>
      <div className="flex ml-20 mt-20 text-sm gap-4">
        <div className="game_released">{released}</div>
        <div className="stores">
          {
            stores.map((store) => {
              //return (
              //  <Stores key={store.id} name={store.store.name}/>
              //   switch (name) {
              //     case "Steam":
              //         <img src="./steam.png" alt="" />
              //         break;
              //     case "PlayStation Store":
              //         <img src="./playstation.jpg" alt="" />
              //         break;
              //     case "Xbox Store":
              //         <img src="./xbox 360.jpg" alt="" />
              //         break;
              //     case "App Store":
              //         <img src="./app store.png" alt="" />
              //         break;
              //     case "GOG":
              //         <img src="./gog.png" alt="" />
              //         break;
              //     case "Nintendo Store":
              //         <img src="./ninetendo.png" alt="" />
              //         break;
              //     case "Xbox 360 Store":
              //         <img src="./xbox 360.jpg" alt="" />
              //         break;
              //     case "Google Play":
              //         <img src="./google play.png" alt="" />
              //         break;
              //     case "itch.io":
              //         <img src="./itch.png" alt="" />
              //         break;
              //     case "Epic Games":
              //         <img src="./epic games.jpg" alt="" />
              //         break;
              //     default:
              //         console.log(name.name);
              // }
                //console.log(store.store.name),
                //Stores(store.store.name)
              //)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default GameDetails
