import { useState } from "react";
import PropTypes from "prop-types";

const EventForm = ({ onEventCreated }) => {
    const [formData, setFormData] = useState({
        title: ""
    });
    const [image, setImage] = useState(null);

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
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
            await onEventCreated(data);
            alert("Event added successfully")
            setFormData({
                title: ""
            });
            setImage(null);
        } catch (error) {
            setError("Failed to create event")
        }
    };

    return (
        <div>
            <h1>Add new Events</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>Title: </label>
                <input 
                    type="text"
                    name="title"
                    value={formData.title} 
                    onChange={handleChange} 
                />

                <br />

                <label >Image: </label>
                <input 
                    id="image"
                    name="image"
                    type="file"
                    onChange={handleImageChange}
                />
                <button type="submit">Add Event</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
};

EventForm.propTypes = {
    onEventCreated: PropTypes.func.isRequired
}

export default EventForm;