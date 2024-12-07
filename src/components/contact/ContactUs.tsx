import Image from "next/image";
import { Button } from "../ui/button";
import contactImage from "@/assets/contact-us.png";
import contactbg from "@/assets/contact-us-bg.jpg";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
    return (
        <div className="border"
            style={{ backgroundImage: `url(${contactbg.src})` }}>

            <div className="max-w-screen-xl mx-auto pt-[100px] px-4 gap-10 lg:gap-0 flex flex-col justify-between lg:flex-row">

                {/* Left Section */}
                <div className="md:w-11/12 md:m-auto lg:w-1/3 lg:mt-5 md:px-6">
                    <h1 className="text-3xl md:text-4xl font-bold  text-rich-black mb-2">
                        <span className="text-malachite">Contact</span> & Join Together
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Have questions or need assistance? Reach out now, and our dedicated
                        team will provide a prompt, friendly, and helpful response.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-rich-black text-white p-4 rounded-full">
                                <MapPin />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Office Address :</h2>
                                <p className="text-gray-600">
                                    S9, 2nd Floor, Angel Mega Mall, Ghaziabad, Uttar Pradesh -
                                    INDIA PIN - 201012
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-rich-black text-white p-4 rounded-full">
                                <Phone />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Phone Number :</h2>
                                <p className="text-gray-600">Mobile: +91 9084800496</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-rich-black text-white p-4 rounded-full">
                                <Mail />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Mail Address :</h2>
                                <p className="text-gray-600">info@tecorbitron.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image and Form */}
                <div className="md:w-3/5 lg:w-2/5 mb-20">
                    <div className="w-full lg:w-3/4 bg-white px-10 py-16 m-auto rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold mb-4">Get In Touch !</h2>
                        <p className="text-gray-600 mb-6">
                            Contact us now, and our team will deliver a prompt, personable, and
                            insightful reply.
                        </p>
                        <form className="space-y-4">
                            <input placeholder="Your Name" className="w-full border p-2 rounded-md focus:outline-none" />
                            <input placeholder="Email" className="w-full border p-2 rounded-md focus:outline-none" />
                            <textarea placeholder="Enter Message" className="w-full border p-2 rounded-md focus:outline-none" />
                            <Button className="w-full bg-malachite text-white font-semibold hover:bg-rich-black">
                                SUBMIT MESSAGE
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Image */}
                <div className="hidden md:flex lg:w-1/3 relative">
                    <Image
                        src={contactImage}
                        alt="Contact Image"
                        width={400}
                        height={400}
                        className="object-contain absolute bottom-0 right-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
