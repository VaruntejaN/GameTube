const GameCard = ({ game }) => {
  return (
    <div className="gamecard flex flex-col items-start shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer ">
        {game.background_image && <img className="w-full h-full pb-4" src={game.background_image} alt="" />}
        <div className="game-name  text-lg pl-2 mb-4">{game.name}</div>
    </div>
  )
}

export default GameCard
