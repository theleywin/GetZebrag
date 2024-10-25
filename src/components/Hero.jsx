import video2 from "../assets/video2.mp4";

const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                 Build tools
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}
                    for developers
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Empower your creativity and bring your ideas to life with our
                intuitive development tool. Get started today and turn your imagination
                into reality!
            </p>
            <div className="flex justify-center my-10">
                <a
                    href="#"
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:text-black">
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:bg-black">
                    Documentation
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
                    <source src={video2} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Hero;