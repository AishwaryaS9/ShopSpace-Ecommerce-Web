import axios from "axios";
import api from "./endPoint";

export async function userLogin(username: string, password: string) {
    const url = `${api.baseApi}/auth/login`
    try {
        const response = await axios.post(url, {
            "username": username,
            "password": password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log("Error", error)
    }
}


