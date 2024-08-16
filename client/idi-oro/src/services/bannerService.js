import axios from "axios";
const api_url = "http://localhost:5000/api/banner";

// list banner
export const fetchBanner = async () => {
    try {
        const response = await axios.get(api_url);
        return response.data
    } catch (error) {
        console.log("failed to fetch banner")
    }
}

// create banner
export const createBanner = async (bannerData) => {
    const response = await axios.post(api_url, bannerData)
    return response.data
}


// delete banner
export const deleteBanner = async (id) => {
    try {
        const response = await axios.delete(`${api_url}/${id}`);
    return response.data
    } catch (error) {
        console.log("Error deleting banner:", error)
    }
}
