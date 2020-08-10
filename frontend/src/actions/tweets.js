import axios from "axios";

const baseUrl = 'https://e0ghqtt7gd.execute-api.us-east-1.amazonaws.com/dev'

export const setTweets = (tweets) => {
    return {
        type: 'SET_TWEETS',
        payload: {
            tweets
        }
    }
}

export const setApprovedTweets = (approvedTweets) => {
    return {
        type: 'SET_APPROVED_TWEETS',
        payload: {
            approvedTweets
        }
    }
}



export const getTweets = (hashTag) => async (dispatch) => {
    const newHashTag = hashTag.replace("#", "")

    try {

        const response = await axios.get(`
            ${baseUrl}/tweets/search?hashTag=${newHashTag}
        `)
        dispatch(setTweets(response.data.result))

    } catch (err) {
        alert("Falha ao carregar os tweets.")
    }

}

export const getApprovedTweets = () => async (dispatch) => {
    try {
        const response = await axios.get(`
            ${baseUrl}/tweets/getapprovedtweet
        `)
        dispatch(setApprovedTweets(response.data.result))
    } catch (err) {
        alert("Falha ao carregar tweets aprovados.")
    }
}
export const approveTweet = (id, user_tweet, content_tweet, tag) => async (dispatch) => {
    const body = {
        user_tweet,
        content_tweet,
        tag
    }

    const accessToken = localStorage.getItem("accessToken");

    try {
        axios.post(`
            ${baseUrl}/tweets/approve/${id}
        `, body, {
            headers: {
                "Authorization": accessToken
            }
        })

        alert("Tweet aprovado com sucesso!")

    } catch (err) {
        alert("Falha ao aprovar tweet.")
    }
}