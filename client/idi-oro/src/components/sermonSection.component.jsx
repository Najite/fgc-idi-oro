const SermonSection = () => {
    const sermons = [
        { id: 1,
            imageUrl: "image/aerial_view.jpg"
        },
        {
            id: 2,
            imageUrl: "image/praise_bg.jpg"
        },
        {
            id: 3,
            imageUrl: "image/prayer.jpg"
        }
    ]
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h2 className="text-2xl font-bold text-gray-900 mb-8">Listen to our sermons</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {
                sermons.map((sermon) => (
                    <div key={sermon.id} className="relative group">
                        <img src={sermon.imageUrl} alt="sermon image"
                        className="w-full h-full object-cover rounded-md transition-transform transform group-hover:scale-105"
                        />

                    </div>
                ))
            }
            </div>

            </div>

        </section>
    )
};

export default SermonSection;