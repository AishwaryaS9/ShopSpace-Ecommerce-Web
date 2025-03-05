import axios from "axios";
import api from "./endPoint";

export async function getAllProducts() {
    const url = `${api.baseApi}/products`;
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        console.log("Error", error)
    }
}

export async function getProductById(id: any) {
    const url = `${api.baseApi}/products/${id}`
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log("Error", error);
    }
}