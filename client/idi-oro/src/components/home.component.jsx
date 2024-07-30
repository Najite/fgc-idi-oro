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
        <div className="container mx-auto p-4">
            <h2>Latest event</h2>
            <div>
            {
                latestEvent ? (
                    <div className="flex items-start space-x-4 border p-4 rounded-lg shadow-lg">
                        
                        {latestEvent.imageUrl ? (
                            <img className="w-1/3 h-auto rounded-lg"
                            src= {latestEvent.imageUrl} 
                            alt= {latestEvent.title}
                            />
                        ) : (
                            <p className="text-gray-500">No image available</p>
                        )}

                        <div className="w-2/3">
                        <h3 className="text-2xl font-bold mb-2">{latestEvent.title}</h3>

                        </div>
                    
                    </div>
                ) : (
                    <p>No event available</p>
                )
            }
            </div>
        </div>
    );
};

export default Home;