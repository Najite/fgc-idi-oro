import PropTypes from "prop-types";

const InfoCard = ({ title, description, icon, borderColor }) => {
    return (
        <div className={`bg-white rounded-lg shadow-lg p-8 border-t-4 ${borderColor}`}>
            <div className="flex justify-center mb-4 text-5xl">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
            <p className="text-gray-700 text-center">{description}</p>
        </div>
    )
};

export default InfoCard;


InfoCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.object,
    borderColor: PropTypes.string
}
