import React from 'react';

const Careers = () => {
    return (
        <div className="w-full mx-auto mt-[70px] px-4 py-10 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl text-center mb-4 ">
                    Join Our <span className="text-malachite">Team</span>
                </h1>
                <p className="text-gray-600 max-w-4xl m-auto">
                    We are always looking for talented and passionate individuals. Although we don&apos;t have any open positions right now, we would love to hear from you!</p>
            </div>

            {/* Message Section */}
            <div className="max-w-2xl mx-auto text-center my-16">
                <h2 className="text-xl md:text-2xl text-prussion-blue mb-6">
                    No Current Openings
                </h2>
                <p className=" text-gray-600 mb-8">
                    If you&apos;re interested in joining our team, feel free to send us your resume.
                    We&apos;ll keep your details on file and reach out when a suitable role opens up.
                    feel free to send your resume to 
                    <a href="mailto:hr@tecorbitron.com" className="text-malachite underline ml-1">
                        hr@tecorbitron.com
                    </a>
                </p>

            </div>
        </div>
    );
};

export default Careers;
