import { Link } from "react-router-dom";
import { useContext } from "react";
import FetchContext from "../context/FetchContext";

const GameCard = ({ game }) => {
  const { dispatch } = useContext(FetchContext);
  const { background_image, name } = game;

  const handleClick = () => {
    dispatch({ type: "GET_CURRENT_GAME", payload: game });
  };

  return (
    <Link to="/gameDetails" className="flex mt-4">
      <div
        onClick={handleClick}
        className="gamecard flex flex-col items-start shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer "
      >
        {background_image && (
          <img className="w-full h-full pb-4" src={background_image} alt="" />
        )}
        <div className="game-name  text-lg pl-2 mb-4">{name}</div>
      </div>
    </Link>
  );
};

export default GameCard;
