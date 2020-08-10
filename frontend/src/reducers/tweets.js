const initialState = {
    tweets: []
}


const tweet = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TWEETS": {
            return { ...state, tweets: action.payload.tweets }
        }
        default:
            return state
    }

}

export default tweet;