import Image from 'next/image';
import React from 'react';
import directorImg from '@/assets/about/director.png';
import rating1Img from '@/assets/about/rating1.png';
import rating2Img from '@/assets/about/rating2.png';
import fbLogo from '@/assets/social-media/Facebook.png';
import InstaLogo from '@/assets/social-media/Instagram.png';
import linkdLogo from '@/assets/social-media//LinkedIn.png';
import redLogo from '@/assets/social-media/Reddit.png';
import TwiLogo from '@/assets/social-media/TwitterX.png';
import bg from "@/assets/header-bg.jpg";

import Link from 'next/link';


const AboutCompany = () => {

    return (
        <section>
            {/* About Header section   */}
            <div className='relative z-0 py-20 px-4 bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}>

                <div className='max-w-screen-xl m-auto relative z-1 pt-20'>
                    <h2 className="text-white font-extrabold text-center text-3xl md:text-6xl leading-snug md:leading-tight">
                        Who We Are, <br />  <span className='text-4xl md:text-7xl'>What Drives Us</span> </h2>
                    <p className="md:text-xl text-[#FFF1F1] max-w-4xl m-auto font-light text-center my-10">
                        Discover Tecorbitron’s journey, mission, and the passionate team behind our innovative solutions—dedicated to transforming your ideas into exceptional digital experiences.
                    </p>
                </div>
            </div>

            {/* Company Section  */}
            <div className="bg-[#E5F5FF] py-20 px-4">
                <div className=" m-auto text-center">
                    <h2 className="text-3xl font-bold text-[#005281]">About Tecorbitron</h2>
                    <p className="text-prussion-blue mt-6 mb-10 leading-loose max-w-4xl m-auto">
                        Welcome to Tecorbitron, your premier partner in IT development solutions across diverse industries sectors. Founded by a team of seasoned tech experts, Tecorbitron is dedicated to transforming your digital vision into reality with innovation and precision.
                    </p>
                    <div className="flex justify-center gap-8">
                        <Image src={rating1Img} alt='image' width={150} height={100} quality={100} className=' bg-white rounded-lg object-center object-contain' />
                        <Image src={rating2Img} alt='image' width={150} height={100} quality={100} className=' bg-white rounded-lg object-center object-contain pb-1' />
                    </div>
                </div>
            </div>

            {/* Founder, CEO SECTION  */}
            <div className=" bg-[#172D68]">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl m-auto">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <Image
                            src={directorImg}
                            alt="Profile"
                            width={200}
                            height={400}
                            className="m-auto w-full h-full object-cover"
                            quality={100}
                        />

                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-3/5 md:ml-8 text-white p-4">
                        <h2 className="text-xl md:text-3xl font-semibold mb-2">The Director</h2>
                        <p className="font-medium mb-4">Founder &  CEO @ Tecorbitron</p>
                        <p className="leading-loose font-light mb-4">
                            We’re the face of a pioneering startup redefining development practices. Armed with a background in CS & IT and a passion for emerging technologies drove me to establish Tecorbitron, where I lead a dynamic team committed to creating innovative applications and scalable solutions. At Tecorbitron, our mission is to revolutionize digital experiences and empower businesses through innovative solutions. We are committed to pushing the boundaries of what is possible in the tech industry.
                            <br /><br /> Let&apos;s drive the future of technology together!
                        </p>
                        <ul className="flex space-x-4 mt-4">
                            <li className='shadow-md w-12 h-12 rounded-md duration-300 ease-in-out' >
                                <Link href="https://linkedin.com" target="_blank">
                                    <Image src={linkdLogo} width={100} height={100} alt="logo" className='object-contain h-12 w-12' />
                                </Link>
                            </li>
                            <li className='shadow-md w-12 h-12 rounded-md duration-300 ease-in-out' >
                                <Link href="https://facebook.com" target="_blank" >
                                    <Image src={fbLogo} width={100} height={100} alt="logo" className='object-contain h-12 w-12' />
                                </Link>
                            </li>
                            <li className='shadow-md w-12 h-12 rounded-md duration-300 ease-in-out' >
                                <Link href="https://twitter.com" target="_blank" >
                                    <Image src={InstaLogo} width={100} height={100} alt="logo" className='object-contain h-12 w-12' />
                                </Link>
                            </li>
                            <li className='shadow-md w-12 h-12 rounded-md duration-300 ease-in-out' >
                                <Link href="https://twitter.com" target="_blank" >
                                    <Image src={TwiLogo} width={100} height={100} alt="logo" className='object-contain h-12 w-12' />
                                </Link>
                            </li>
                            <li className='shadow-md w-12 h-12 rounded-md duration-300 ease-in-out' >
                                <Link href="https://twitter.com" target="_blank" >
                                    <Image src={redLogo} width={100} height={100} alt="logo" className='object-contain h-12 w-12' />
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutCompany;
