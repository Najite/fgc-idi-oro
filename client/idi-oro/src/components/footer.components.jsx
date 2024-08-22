const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <img src="image/open_arms.jpeg" alt="logo" className="mb-4" />
                        <p>Fgc mushin</p>
                        <p>The praying church</p>
                    </div>

                        <div>
                            <h2 className="font-bold text-white mb-4">Useful Links</h2>
                            <ul>
                                <li>home</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Upcoming events</h2>
                            <ul>
                                <li>The experience</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Get in touch</h2>
                            <p>Get directions</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12v1m0 4v1m-4-6v1m0 4v1M12 5v1m0 4v1M8 3v1m0 4v1M4 7v1m0 4v1m0 4v1" />
              </svg>
              info@idioro
                            </p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2a2 2 0 012 2v10a2 2 0 01-2 2H3m18-4h-2a2 2 0 00-2 2v2m-6 2a2 2 0 01-2-2v-2m6-6a2 2 0 01-2 2h-2m6-6V5m-6 4h-2a2 2 0 01-2-2V5" />
              </svg>
              +2341234567890
                            </p>
                        </div>
                </div>
                <div>
                    <p>Copyright © FGC Mushin 2024. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;