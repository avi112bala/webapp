import Image from "next/image";
import Link from "next/link";
import cloudSecurityImg from "@/assets/projects/cloud.jpg";
import dataAnalyticsImg from "@/assets/projects/data-ana.jpg";
import itConsultancyImg from "@/assets/projects/it-solutions.jpg";
import { ArrowRight } from "lucide-react";

const Projects = () => {
    return (
        <section id="ourprojects" className="py-20 bg-honey-dew ">
            <div className="max-w-screen-xl  lg:w-11/12 mx-auto text-center px-4 text-rich-black">
                <h2 className="text-3xl md:text-4xl "><span className="text-malachite">Discover</span> Our Latest Projects</h2>
                <p className="max-w-4xl m-auto md:text-lg my-6">We proudly collaborate with globally recognized partners, sharing expertise and resources to deliver innovative, future-ready solutions. Together, we strive to exceed expectations.</p>
                <div className="flex flex-col md:flex-row justify-around items-center py-16 gap-10 cursor-pointer">

                    <div className="bg-white shadow-md rounded-lg text-rich-black overflow-hidden w-full lg:w-1/4">
                        <Image src={cloudSecurityImg} alt="Cloud Security" className="w-full h-40 object-cover" />
                        <div className="py-12">
                            <p className="text-sm text-gray-600">Security</p>
                            <h3 className="text-xl">Cloud Security Service</h3>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg text-rich-black overflow-hidden w-full lg:w-1/4">
                        <Image src={dataAnalyticsImg} alt="Data Analytics" className="w-full h-40 object-cover" />
                        <div className="py-12">
                            <p className="text-sm text-gray-600">Networking</p>
                            <h3 className="text-xl ">Data Analytics System</h3>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg text-rich-black overflow-hidden w-full lg:w-1/4">
                        <Image src={itConsultancyImg} alt="IT Consultancy" className="w-full h-40 object-cover" />
                        <div className="py-12">
                            <p className="text-sm text-gray-600">Solution</p>
                            <h3 className="text-xl">IT Solution & Consultancy</h3>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex text-malachite justify-center items-center gap-2 text-sm">
                    <Link href="/" className="inline-block border-rich-black border-b text-rich-black font-medium hover:text-malachite ">
                        ALL CASE STUDIES
                    </Link>
                    <ArrowRight size={17} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
