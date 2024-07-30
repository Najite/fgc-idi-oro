import { useState } from "react";
import { createStream } from "../services/streamServices";


const StreamForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        streamUrl: ""
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createStream(formData);
            alert("stream updated successfully")
        }
     catch (error) {
        setError("Failed to create stream")
        console.log("failed to create stream:", error)
    }
};

    return (
        <div>
            <h1>Create Stream</h1>
            <form onSubmit={handleSubmit}>
                <label> Title </label>
                <input type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    /> <br /> <br />

                    <label>Stream Url</label>
                    <input type="text"
                        name="streamUrl"
                        value={formData.streamUrl}
                        onChange={handleChange}
                        required
                        />

                        <button type="submit">Create stream</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}

export default StreamForm
