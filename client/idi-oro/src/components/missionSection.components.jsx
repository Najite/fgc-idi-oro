const MissionSection = () => {

    return (
        <section className="py-6 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main heading */}
                <h2 className="text-2xl md:text-2xl font-extrabold text-gray-900 mb-4">Connection hearts, changing lives <br />Embracing faith</h2>
                <p className="text-lg text-gray-600 mb-12">Together, we connect hearts and change lives, <br />
                and we embrace with open arms</p>

                {/* image section */}
                <div className="flex justify-center space-x-4 mb-12">
                    <div className="w-1/3 h-80">
                        <img src="image/aerial_view.jpg" alt="mission image" 
                        className="w-full h-full object-cover rounded-lg"/>
                    </div>   

                    <div className="w-1/3 h-80 transform translate-y-1/2 mt-8">
                        <img src="image/praise_bg.jpg" alt="dance image"
                        className="w-full h-full object-cover rounded-lg"
                        />
                        
                    </div>

                    <div className="w-1/3 h-80">
                        <img src="image/praise_bg.jpg" alt="dance image" 
                        className="w-full h-full object-cover rounded-lg"
                        />

                    </div>
                </div>

                    <a href="" className="text-indigo-600 font-semibold hover:underline mb-12 block">Read more</a>

                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold text-gray-900">Our mission and vision</h3>
                        <h4 className="text-xl font-bold text-gray-600 mt-4 mb-8">Celebrate with us</h4>
                        <p className="text-lg text-gray-600 mt-4 mb-8">Our mission is to share God`s love, serve our community
                            and norture spiritual growth through worship, fellowship and outreach
                        </p>
                        <a href="">Read more &rarr;</a>
                    </div>
            </div>
        </section>
    )
}

export default MissionSection;