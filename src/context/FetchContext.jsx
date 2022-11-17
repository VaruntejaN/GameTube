import React, { createContext } from "react";
import axios from "axios";
import { useReducer } from "react";
import FetchReducer from "./FetchReducer";
const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const intitialState = {
    defaultList: null,
    searchList: null,
  };

  const [state, dispatch] = useReducer(FetchReducer, intitialState);

  const fetchGames = async (searchKey) => {
    const {
      data: { results },
    } = await axios.get("https://api.rawg.io/api/games", {
      params: {
        key: process.env.REACT_APP_API_KEY,
        search: searchKey,
      },
    });
    return results;
  };

  return (
    <div>
      <FetchContext.Provider value={{ ...state, dispatch, fetchGames }}>
        {children}
      </FetchContext.Provider>
    </div>
  );
};

export default FetchContext;
