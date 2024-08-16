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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">upcoming events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                events.map(event => {
                return (
                <div key={event._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                    {event.imageUrl ? (
                            <img
                                src={event.imageUrl}
                                alt={event.title}
                                className="w-full h-48 object-cover mb-4"
                            />
                        ) : (
                            <p className="text-gray-500 mb-4">No image available</p>
                        )}
                        <button onClick={() => handleDelete(event._id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">delete Event</button>
                </div>
                </div>
                )})
            }
            </div>
        </div>
    )
}


EventList.propTypes = {
    events: PropTypes.array.isRequired,
    setEvents: PropTypes.func.isRequired
}

export default EventList;