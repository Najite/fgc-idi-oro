import { useEffect, useState } from "react";
import { createBanner, fetchBanner } from "../services/bannerService";
import BannerForm from "../components/bannerForm.component";
import BannerList from "../components/banner.component";


const BannerPage = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadBanner = async () => {
            try {
                const result = await fetchBanner();
                setBanners(result.data);
            } catch (error) {
                setError("failed to load banner");
            } finally {
                setLoading(false);
            }
        };

        loadBanner();
    }, []);


    const handleBannerCreation = async (newBanner) => {
        try {
            await createBanner(newBanner);
            const result = await fetchBanner() ;
            setBanners(result.data);
        } catch (error) {
            setError("Failed to create banner")
        }
    };

    if (loading) return <p>Loading banner ...</p>
    if (error) return <p>{error}</p>

    return (
        <div className="w-1/2 mx-auto p-4 bg-red-500">
            <BannerList banners={banners} setBanners={setBanners} />
            <BannerForm onBannerCreated={handleBannerCreation} />
        </div>
    )
} 

export default BannerPage;