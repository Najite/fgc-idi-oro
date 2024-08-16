import { fetchBanner } from "../services/bannerService";
import { useState, useEffect } from "react";
import SlideShow from "./slider.component";

const SliderDisplay = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadBanners = async () => {
            try {
                const result = await fetchBanner();
                setBanners(result.data);
            } catch (error) {
                setError("Cant display banner")
            } finally {
                setLoading(false)
            }
        };

        loadBanners();
    }, []);

    if (loading) return <p>Loading ...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <SlideShow banners={banners} />
        </div>
    )
};


export default SliderDisplay;