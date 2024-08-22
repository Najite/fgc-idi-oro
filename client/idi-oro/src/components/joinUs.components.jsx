const JoinUsNow = () => {
    return (
        <div className="relatve h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(image/prayer.jpg)`}}>
            <div className=""></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-6xl md:text-8xl font-bold mb-10">Join us Now</h1>
                <div className="flex space-x-10">
                    <div className="flex flex-col items-center">
                    <div className="bg-green-500 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 4M3 8l9 6 9-6" />
              </svg>
                        </div>
                        <p className="mt-4">Ask your questions</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-green-500 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l1.75-1.75A4.992 4.992 0 0112 7c1.517 0 2.878.67 3.75 1.75L19 10m-7 0v8m-7 0a2 2 0 002 2h10a2 2 0 002-2v-8" />
              </svg>
                        </div>
                        <p className="mt-4">Get Directions</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-green-500 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.5 3-4.5 3V10zM4.5 3a1.5 1.5 0 000 18A19.98 19.98 0 0012 21c4.28 0 8.36-1.34 11.5-3.74a1.5 1.5 0 000-2.52A19.978 19.978 0 0012 3a19.978 19.978 0 00-7.5 0z" />
              </svg>
                        </div>
                        <p className="mt-4">Subscribe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUsNow;