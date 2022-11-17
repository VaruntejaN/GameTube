import React from "react";
import { useEffect, useContext } from "react";
import GameCard from "../components/GameCard";
import FetchContext from "../context/FetchContext";

const MainContainer = () => {
  const { defaultList, dispatch, fetchGames } = useContext(FetchContext);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchGames();
      dispatch({ type: "GET_DEFAULT", payload: results });
    };

    fetchData();
  }, []);

  return (
    <div className="mainContainer w-full mx-auto grid grid-cols-2 md:grid-cols-4 p-4 gap-4">
      {defaultList &&
        defaultList.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
    </div>
  );
};

export default MainContainer;
