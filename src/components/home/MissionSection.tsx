
const MissionSection = () => {
    return (
        <div className="bg-[#002C25]">

            <div className="flex flex-col md:flex-row gap-10 text-center justify-evenly items-center text-rich-black py-10 px-6 max-w-screen-xl m-auto">

                {/* Middle Section: Mission Statement */}
                <div className="flex justify-center w-full md:w-1/2">
                    <div className="flex flex-col item-center justify-center gap-6 text-white bg-[#52D800] md:w-[390px] w-[300px] md:h-[390px] h-[300px] rounded-full p-5 md:p-10">
                        <h2 className="text-3xl  md:text-5xl font-bold text-[#172D68]">Mission</h2>
                        <h2 className="text-xl md:text-3xl font-semibold">We Aim For You!</h2>
                        <p className="md:text-lg mt-4">
                            Crafting Digital Excellence from Concept to Completion.
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Statistics */}
                <div className="flex flex-col lg:flex-row justify-around items-center text-white">
                    <div className="w-full my-5 space-y-5 md:m-2">
                        <div className="text-xl rounded-full flex items-center justify-center m-auto">
                            <div className="relative size-24">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-800" strokeWidth="2"></circle>
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white" strokeWidth="2" strokeDasharray="100" strokeDashoffset="65" strokeLinecap="round"></circle>
                                </svg>

                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <span className="text-center text-2xl">R</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xl text-malachite md:text-2xl mt-2">Research</p>
                        <p className="font-light">Laying the Foundation with Data and Discovery</p>
                    </div>

                    <div className="w-full my-5 space-y-5 md:m-2">
                        <div className="text-xl rounded-full flex items-center justify-center m-auto">
                            <div className="relative size-24">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-800" strokeWidth="2"></circle>
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white" strokeWidth="2" strokeDasharray="100" strokeDashoffset="30" strokeLinecap="round"></circle>
                                </svg>

                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <span className="text-center text-2xl">S</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xl text-malachite md:text-2xl mt-2">Streatigy</p>
                        <p className="font-light">Turning Insights into Actionable Roadmaps</p>
                    </div>

                    <div className="w-full my-5 space-y-5 md:m-2">
                        <div className="text-xl rounded-full flex items-center justify-center m-auto">
                            <div className="relative size-24">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-800" strokeWidth="2"></circle>
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white" strokeWidth="2" strokeDasharray="100" strokeDashoffset="0" strokeLinecap="round"></circle>
                                </svg>

                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <span className="text-center text-2xl">D</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xl text-malachite md:text-2xl mt-2">Deployment</p>
                        <p className="font-light">Seamless Execution for Flawless Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionSection;
