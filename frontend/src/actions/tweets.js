import axios from "axios";

const baseUrl = 'http://localhost:3333'

export const setTweets = (tweets) => {
    return {
        type: 'SET_TWEETS',
        payload: {
            tweets
        }
    }
}


export const getTweets = (hashTag) => async (dispatch) => {
    try {

        const response = await axios.get(`
            ${baseUrl}/tweets/search?hashTag=${hashTag}
        `)


        dispatch(setTweets(response.data.result))
        console.log(response.data)

    } catch (err) {
        alert("Falha ao carregar os tweets.")
    }

}