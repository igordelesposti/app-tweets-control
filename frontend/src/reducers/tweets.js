const initialState = {
    tweets: [],
    approvedTweets: []
}


const tweet = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TWEETS": {
            return { ...state, tweets: action.payload.tweets }
        }
        case "SET_APPROVED_TWEETS": {
            return { ...state, approvedTweets: action.payload.approvedTweets }
        }
        default:
            return state
    }
}

export default tweet;