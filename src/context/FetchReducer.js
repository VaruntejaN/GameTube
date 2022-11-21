const FetchReducer = (state, action) => {
  switch (action.type) {
    case "GET_DEFAULT":
      return {
        ...state,
        defaultList: action.payload,
      };
    case "SEARCH_GAME":
      return {
        ...state,
        defaultList: action.payload,
      };
    case "GET_CURRENT_GAME":
      return {
        ...state,
        currentGame: action.payload,
      };
    default:
      return state;
  }
};

export default FetchReducer;
