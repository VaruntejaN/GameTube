const FetchReducer = (state,action) => {
    switch(action.type){
        case 'GET_DEFAULT':
            return {
                ...state,
                defaultList:action.payload
            }
        case 'SEARCH_GAME':
            return {
                ...state,
                searchList:action.payload
            }
        default:
            return state
    }
}

export default FetchReducer