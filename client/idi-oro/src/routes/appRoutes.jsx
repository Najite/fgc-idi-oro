import { Route, Routes } from "react-router-dom";
import EventsPage from "../pages/eventsPage";
import HomePage from "../pages/homePage";


const AppRoutes = () => (
    <Routes>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/" element={<HomePage />} />
    </Routes>
);

export default AppRoutes;