import { useState } from "react";
import PropTypes from "prop-types";


const BannerForm = ({ onBannerCreated }) => {
    const [formData, setFormData] = useState({
        title: ""
    });
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value}));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        if (image) {
            data.append("image", image);
        }

        try {
            await onBannerCreated(data);
            alert("Banner created successfully");
            setFormData({
                title: ""
            });
            setImage(null);
        } catch (error) {
            setError("Failed to create banner")
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">create banner</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    
                <label htmlFor="title"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >Title: 
                </label>
                <input 
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="shadow
                    appearance-none border rounded 
                    w-fully py-2 px-3 text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline"
                    /> <br /> <br />

                <label htmlFor="image"
                    className="block text-gray-700 
                    text-sm font-bold mb-2"
                >image: </label>
                <br /> <br />
                <input 
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"

                    />

                    <button type="submit">create banner</button>
                </div>    
            </form>
            {error && <p>{error}</p>}
        </div>
    )
};

BannerForm.propTypes = {
    onBannerCreated: PropTypes.func
}

export default BannerForm;