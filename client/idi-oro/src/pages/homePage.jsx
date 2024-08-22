import Footer from "../components/footer.components";
import Home from "../components/home.component";
import InfoSection from "../components/infoSection.components";
import JoinUsNow from "../components/joinUs.components";
import MissionSection from "../components/missionSection.components";
import SermonSection from "../components/sermonSection.component";
import SliderDisplay from "../components/sliderDisplay.component";


const HomePage = () => (
        <div className="w-full overflow-hidden">
            <SliderDisplay />
            <InfoSection />
            <MissionSection />
            <SermonSection />
            <JoinUsNow />
            <Home />
            <Footer />
            <h2>A loving </h2>
        </div>
    
)


export default HomePage;