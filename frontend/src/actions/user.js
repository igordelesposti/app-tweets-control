import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

const baseUrl = 'https://e0ghqtt7gd.execute-api.us-east-1.amazonaws.com/dev';

export const signUpAdministrator = (body) => async (dispatch) => {

    try {
        const response = await axios.post(`${baseUrl}/user/signup`, body)

        alert("Usuário criado com sucesso")

        localStorage.setItem("accessToken", response.data.accessToken)

        dispatch(push(routes.administratorScreen))
    } catch (err) {
        alert(err)
    }


}

export const login = (body) => async (dispatch) => {

    try {
        const response = await axios.post(`${baseUrl}/user/login`, body)

        localStorage.setItem("accessToken", response.data.accessToken)

        dispatch(push(routes.administratorScreen))
    } catch (err) {
        alert(err)
    }
}