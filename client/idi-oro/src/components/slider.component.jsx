import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";



const SlideShow = ({ banners }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                {banners.map(banner => { 
                    return (
                    <div key={banner._id} className="relatve h-screen">
                        <img 
                            src={banner.imageUrl}
                            alt={banner.title}
                            className="w-full h-full object-cover"
                        />
                                    <div className="absolute inset-0 bg-purple-800 bg-opacity-30"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300 mb-6">
                            {banner.title}</h2>

                        </div>
                    
                    </div>
                )})}
            </Slider>
        </div>
    )
}


SlideShow.propTypes = {
    banners: PropTypes.array.isRequired
}

export default SlideShow;