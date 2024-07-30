import { useEffect, useState } from "react";
import { fetchStream, deleteStream } from "../services/streamServices";


const StreamList = () => {
    const [streams, setStreams] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadStream = async () => {
            try {
                const result = await fetchStream();
                setStreams(result.data);
            } catch (error) {
                setError("Failed to load stream");
                console.log("Error fetching stream", error);
            }
        }
        loadStream();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteStream(id);
            setStreams(prevStream => prevStream.filter(stream => stream._id !== id));
            alert("Stream deleted successfully");
        } catch (error) {
            setError("failed to delete stream");
            console.error("Error deleting stream:", error);
        }
    };

    return (
        <div>
            <h1>Live stream</h1>
            { error && <p>{error}</p> }
            { streams.length === 0 ? (
                <p>No live stream available </p>
            ) : (
                streams.map(stream => (
                    <div key={stream._id}>
                        <h2>{stream.title}</h2>
                        <a href={stream.streamUrl}>Listen live</a>
                        <button 
                        onClick={() => handleDelete(stream._id)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    )
}


export default StreamList;