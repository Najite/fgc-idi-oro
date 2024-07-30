import axios from "axios";

const api_url = 'http://localhost:5000/api/events';

export const fetchEvents = async () => {
    const response =  await axios.get(api_url);
    return response.data;
}

export const createEvent = async (eventData) => {
    const response = await axios.post(api_url, eventData);
    return response.data;
}

export const deleteEvent = async (id) => {
    try {
    const response = await axios.delete(`${api_url}/${id}`);
    return response.data
    } catch (error) {
        console.log("Error deleting event: ", error)
    }

}