import axios from "axios";
import api from "./endPoint";

export async function getCategories() {
    const url = `${api.baseApi}/products/categories`
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log("Error", error);
    }
}