import InfoCard from "./infoCard.components";
import { FaChurch, FaHandsHelping, FaHeart } from "react-icons/fa";
const InfoSection = () => {
    const cards = [
        {
            title: "About us",
            description: "Let us love God together",
            borderColor: "border-yellow-400",
            icon: <FaChurch className="text-pink-600" />
        },

        {
            title: "Get ready",
            description: "Are you ready to server",
            borderColor: "border-yellow-400",
            icon: <FaHandsHelping className="text-pink-600" />
        },


        {
            title: 'GIVING BACK',
            description: 'Partner with us through giving to support our ministries and community projects.',
            icon: <FaHeart className="text-pink-600" />,
            borderColor: 'border-purple-600',
          },
    ]

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">A place of worship and spiritual growth</h2>

                <div className="grid gap-8 md:grid-cols-3">
                    { cards.map((card, index) => (
                        <InfoCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            borderColor={card.borderColor}
                            icon={card.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default InfoSection;