import Home from "../components/home.component";
import InfoSection from "../components/infoSection.components";
import MissionSection from "../components/missionSection.components";
import SliderDisplay from "../components/sliderDisplay.component";


const HomePage = () => (
        <div className="w-full overflow-hidden">
            <SliderDisplay />
            <InfoSection />
            <MissionSection />
            <Home />
            <h2>A loving </h2>
        </div>
    
)


export default HomePage;