import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import bgImage from '@/assets/our-solution-bg.jpg'

const OurSolutions = () => {

    const services = [
        {
            bgColour: "FFFFFF",
            title: "Custom Websites"
        },
        {
            bgColour: "E6FAEF",
            title: "Web Apps - PWA"
        },
        {
            bgColour: "FFFFFF",
            title: "Cross Platform Apps"
        },
        {
            bgColour: "E6FAEF",
            title: "Web Portals"
        },
        {
            bgColour: "E6FAEF",
            title: "Enterprise Application"
        },
        {
            bgColour: "FFFFFF",
            title: "Desktop Application"
        },
        {
            bgColour: "E6FAEF",
            title: "E-Commerce"
        },
        {
            bgColour: "FFFFFF",
            title: "Trading Terminal"
        },
        {
            bgColour: "FFFFFF",
            title: "Financial Management"
        },
        {
            bgColour: "E6FAEF",
            title: "HR Software"
        },
        {
            bgColour: "FFFFFF",
            title: "Assets Management"
        },
        {
            bgColour: "E6FAEF",
            title: "Learning Platform"
        },
        {
            bgColour: "E6FAEF",
            title: "Inventory System"
        },
        {
            bgColour: "FFFFFF", 
            title: "CRM System"
        },
        {
            bgColour: "E6FAEF",
            title: "Maintenance & Upgrade"
        },
        {
            bgColour: "FFFFFF",
            title: "Digital Marketing"
        },
        {
            bgColour: "FFFFFF",
            title: "Business Automation"
        },
        {
            bgColour: "E6FAEF",
            title: "Business Intelligence (BI)"
        },
        {
            bgColour: "FFFFFF",
            title: "Data Analytics"
        },
        {
            bgColour: "E6FAEF",
            title: "Data Visualisation & Dashboard"
        },
        {
            bgColour: "E6FAEF",
            title: "Cloud Migration"
        },
        {
            bgColour: "FFFFFF",
            title: "Cloud Infrastructure"
        },
        {
            bgColour: "E6FAEF",
            title: "UI UX Research & Streatigy"
        },
        {
            bgColour: "FFFFFF",
            title: "Brand Identity Design"
        },
    ];

    return (
        <div className="relative z-0 bg-[#f3ffec] py-20 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bgImage.src})`,
            }}>

            <div className="bg-white inset-0 absolute opacity-70"></div>

            <div className="max-w-screen-xl m-auto relative z-10">
                {/* section heading  */}
                <h2 className="text-2xl md:text-3xl text-prussion-blue font-bold text-center">Our
                    <span className="text-malachite"> Solutions! </span>
                    Powered By Technology</h2>
                <p className="max-w-4xl m-auto text-prussion-blue text-center my-10 px-4">
                    Building powerful, secure, and innovative digital solutions through a fusion of technologies, standard of excellence, and an In-depth research of your business challenges to ensure long-term success.
                </p>

                {/* Services grid  */}
                <div className="flex flex-wrap gap-y-2 md:gap-5 justify-evenly md:justify-center text-[#0A377D] md:py-10">
                    {services.map((service, index) => (
                        <div key={index} style={{ backgroundColor: `#${service.bgColour}` }}
                            className={`relative w-[45%] md:w-1/4 lg:w-[22%] h-14 md:h-[4.5rem] flex items-center justify-between text-xs md:text-base px-4 rounded-lg shadow-[#95BEFF] shadow-md`}>
                            <p className="text-center w-fit m-auto font-medium">{service.title}</p>
                        </div>
                    ))}
                </div>

                {/* view all btn  */}
                <div className="mt-10 w-fit m-auto p-2 px-6 rounded-xl text-[#0A377D] border-[#0A377D] border flex justify-center items-center gap-4 text-sm">
                    <Link href="/" className="inline-block font-medium">
                        View All
                    </Link>
                    <ArrowRight size={20} />
                </div>

            </div>
        </div>
    );
};

export default OurSolutions;
