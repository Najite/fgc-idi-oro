import { useEffect, useState } from "react";
import { fetchEvents } from "../services/eventServices";


const Home = () => {
    const [latestEvent, setLatestEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLatestEvent = async () => {
            try {
                const response = await fetchEvents();
                if (response && response.data.length > 0) {
                    setLatestEvent(response.data[0]);
                }
            } catch (error) {
                setError("failed to fetch event");
                console.log('Error fetching event', error);
            } finally {
                setLoading(false)
            }
        };

        getLatestEvent();
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h2>Latest event</h2>
            {
                latestEvent ? (
                    <div>
                        <h3>{event.title}</h3>
                        {latestEvent.imageUrl ? (
                            <img 
                            src= {latestEvent.imageUrl} 
                            alt= {latestEvent.title}
                            style={{ maxWidth: '50%'}}
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                ) : (
                    <p>No event available</p>
                )
            }
        </div>
    );
};

export default Home;