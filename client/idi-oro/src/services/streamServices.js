import axios from "axios";

const api_url = "http://localhost:5000/api/stream";


export const fetchStream = async () => {
    const response = await axios.get(api_url);
    return response.data
}


export const createStream = async (streamData) => {
    const response = await axios.post(api_url, streamData)
    return response.data
}


export const deleteStream = async (id) => {
    try {
    const response = await axios.delete(`${api_url}/${id}`);
    return response.data
    } catch (error) {
        console.log("Error deleting live: ", error)
    }
}