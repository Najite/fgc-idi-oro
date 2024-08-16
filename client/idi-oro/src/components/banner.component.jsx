import PropTypes from "prop-types";
import { deleteBanner } from "../services/bannerService";

const BannerList = ({ banners, setBanners }) => {
    const handleDelete = async (id) => {
        try {
            await deleteBanner(id);
            setBanners(prevBanner => prevBanner.filter(banner => banner._id !== id));
            alert("banner deleted successfully");
        } catch (error) {
            console.log("failed deleting banner", error)
            alert("Failed to delete event")
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Banner list</h1>
            <div>
                {
                    banners.map(banner => {
                        return (
                        <div key={banner._id} className="bg-white-rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{banner.title}</h2>
                                 <img 
                                    src={banner.imageUrl}
                                    alt={banner.title}
                                    className="w-full h-48 objec-cover mb-4"
                                 />

                                 <button onClick={() => handleDelete(banner._id)} 
                                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button> 
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
};


BannerList.propTypes = {
    banners: PropTypes.array.isRequired,
    setBanners: PropTypes.func
}

export default BannerList;