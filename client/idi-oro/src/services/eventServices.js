import axios from "axios";

const api_url = 'http://localhost:5000/api/events';


// list events
export const fetchEvents = async () => {
    const response =  await axios.get(api_url);
    return response.data;
}


// create events
export const createEvent = async (eventData) => {
    const response = await axios.post(api_url, eventData);
    return response.data;
}


// delete events
export const deleteEvent = async (id) => {
    try {
    const response = await axios.delete(`${api_url}/${id}`);
    return response.data
    } catch (error) {
        console.log("Error deleting event: ", error)
    }

}




