import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext } from "react";
import FetchContext from "../context/FetchContext";
const SearchGame = () => {
  const [searchKey, setSearchKey] = useState("");
  const { fetchGames, dispatch } = useContext(FetchContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await fetchGames(searchKey);
    console.log(results);
    dispatch({ type: "SEARCH_GAME", payload: results });
  };

  return (
    <div className="flex items-center p-1 border-solid border-gray-200 border-2 rounded-3xl w-full ml-12 mr-12">
      <SearchIcon />
      <form className="w-full border-none outline-none" onSubmit={handleSubmit}>
        <input
          autoFocus
          className="border-none outline-none bg-transparent text-xs w-full ml-0.5"
          type="text"
          placeholder="Search for games..."
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchGame;
