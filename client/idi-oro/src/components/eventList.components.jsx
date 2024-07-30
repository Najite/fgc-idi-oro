import PropTypes from "prop-types";
import { deleteEvent } from "../services/eventServices";

const EventList = ({ events, setEvents }) => {
    const handleDelete = async (id) => {
        try {
            await deleteEvent(id);

            setEvents(prevEvents => prevEvents.filter(event => event._id !== id));
            alert("Event deleted successfully");
        } catch (error) {
            console.error("Error deleting event:", error);
            alert("Failed to delete event")
        }
    };

    return (
        <div>
            <h1>upcoming events</h1>
            {
                events.map(event => {
                return (
                <div key={event._id}>
                    <h2 >{event.title}</h2>
                    {event.imageUrl ? (
                            <img
                                src={event.imageUrl}
                                alt={event.title}
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                        <button onClick={() => handleDelete(event._id)}>delete Event</button>
                </div>
                )})
        }
        </div>
    )
}


EventList.propTypes = {
    events: PropTypes.array.isRequired,
    setEvents: PropTypes.func.isRequired
}

export default EventList;