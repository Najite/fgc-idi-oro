import { Route, Routes } from "react-router-dom";
import EventsPage from "../pages/eventsPage";
import HomePage from "../pages/homePage";
import StreamPage from "../pages/streamPage";


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/stream" element={<StreamPage />} />
    </Routes>
);

export default AppRoutes;