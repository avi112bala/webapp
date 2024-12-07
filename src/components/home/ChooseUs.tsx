"use client"
import Image from 'next/image';
import React, { useState } from "react";
import image from '@/assets/w-c-u.png'

type AccordionItemProps = {
    title: string;
    content: string;
    isActive: boolean;
    onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    content,
    isActive,
    onClick
}) => {
    return (
        <div className="overflow-hidden my-2">
            <button className={`w-full flex items-center gap-3 hover:text-malachite ${isActive && "text-malachite"} `} onClick={onClick}>
                <span className="text-2xl">{isActive ? "-" : "+"}</span>
                <span className="text-lg ">{title}</span>
            </button>
            <div className={` ${isActive ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-4">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};


const ChooseUs = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const data = [
        {
            title: "Innovative Approach",
            content:
                "We harness emerging technologies to craft innovative solutions, transforming your ideas into powerful digital experiences.",
        },
        {
            title: "Client-Centric Focus",
            content:
                "Your goals are our priority; we tailor every solution to address your unique business needs and challenges.",
        },
        {
            title: "Proven Expertise",
            content:
                "Our experienced team delivers reliable and scalable solutions, ensuring optimal performance and long-term growth for your business.",
        },
    ];

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <section className='bg-[#EDF8FF] '>
            <div className="max-w-screen-xl m-auto px-4 pt-20 pb-10">
                <h2 className="text-2xl md:text-3xl mb-4 text-malachite font-bold">Why Choose Us</h2>
                <h2 className="text-2xl md:text-3xl font-bold text-prussion-blue">The Role of Tecorbitron in & as Adaptation and Growth</h2>
                <div className="flex flex-col md:flex-row justify-between mt-10">
                    <div className="w-full md:w-1/2 p-4">
                        <p className=" mb-6">
                            Backed by tech enthusiasts and industry leaders, we create powerful digital assets with intuitive design, seamless performance, and top-tier security, ensuring your business stays ahead in a competitive landscape.
                        </p>

                        {data.map((item, index) => (
                            <AccordionItem
                                key={index}
                                title={item.title}
                                content={item.content}
                                isActive={activeIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}

                    </div>

                    <div className="w-full md:w-1/2 ">
                        <Image src={image} alt='image' width={600} height={200} className='m-auto' />
                    </div>

                </div>
            </div>
        </section>

    );
};



export default ChooseUs