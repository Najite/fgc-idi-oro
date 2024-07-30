import { useEffect, useState } from "react";
import { fetchEvents, createEvent } from "../services/eventServices";
import EventForm from "../components/eventForm.component";
import EventList from "../components/eventList.components";

const EventsPage = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEvents = async() => {
            try {
                const result = await fetchEvents();
                setEvents(result.data);
            } catch (error) {
                setError("Failed to load events");
            } finally {
                setLoading(false);
            }
        };

        loadEvents();
    }, []);

    const handleEventCreation = async (newEvent) => {
        try {
            await createEvent(newEvent);

            const result = await fetchEvents()
            setEvents(result.data);
        } catch (err) {
            setError("Failed to create effect")
        }
    };


        if (loading) return <p>Loading events ...</p>
        if (error) return <p>{error}</p>

        return (
            <div className="w-1/2 mx-auto p-4 bg-red-500">
                <EventList events={events} setEvents={setEvents}/>
                <EventForm onEventCreated={handleEventCreation} />

            </div>
        )
    // }
}


export default EventsPage;