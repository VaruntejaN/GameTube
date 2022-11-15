import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";

const MainContainer = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const {
      data: { results },
    } = await axios("https://api.rawg.io/api/games", {
      params: {
        key: process.env.REACT_APP_API_KEY,
      },
    });

    setGames(results);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="mainContainer w-full mx-auto grid grid-cols-2 md:grid-cols-4 p-4 gap-4">
      {games.map((game) => {
        return <GameCard key={game.id} game={game}/>;
      })}
    </div>
  );
};

export default MainContainer;
