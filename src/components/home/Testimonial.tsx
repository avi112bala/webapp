"use client";
import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import clientImg from "@/assets/client.png";
import quotationMark from "@/assets/logos/double-quote.png";
import startImg from "@/assets/logos/start.png";
import { Carousel, CarouselItem } from "../ui/carousel";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Savannah Nguyen",
            position: "CEO at Rimasu",
            message: "The IT solution provided by the team exceeded our expectations! It's efficient, reliable. Highly recommended!",
        },
        {
            name: "Cameron Williamson",
            position: "Business Student",
            message: "The best service we've ever received. Professional, timely, and always available when we needed support. Their solution helped us scale effortlessly.",
        },
        {
            name: "Brooklyn Simmons",
            position: "Project Manager",
            message: "Their IT solution brought our project management system to a whole new level. The automation features saved us a lot of time and resources.",
        },
        {
            name: "Leslie Alexander",
            position: "Marketing Director",
            message: "Amazing service! The team is highly skilled and delivered a solution that transformed our marketing strategies, allowing us to reach more customers.",
        },
        {
            name: "Eleanor Pena",
            position: "Operations Head",
            message: "Top-notch service and a very well-executed solution. The software integration was seamless, and it has drastically improved our operational efficiency.",
        },
    ];

    // Embla carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center", // Align center for better multi-item scrolling
        skipSnaps: false,
    }, [Autoplay({ delay: 3000, stopOnInteraction: true })]); // Auto-scroll plugin

    const [selectedIndex, setSelectedIndex] = useState(0);

    // Handle slide selection change
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    // Listen for embla events
    React.useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className="bg-[#EDF8FF]">
            <div className="flex flex-col items-center justify-center px-6 py-20 text-rich-black max-w-screen-xl m-auto">
                <h2 className="text-2xl md:text-3xl text-malachite font-bold text-center">
                    Testimonial’s <br />
                    <span className="text-prussion-blue">Trusted by Clients, Proven by Result</span></h2>
                <p className="max-w-4xl m-auto text-black text-center mt-10 mb-20 px-4">
                    Discover how Tecorbitron&apos;s expertise has transformed our clients&apos; challenges into achievements. Their success is our greatest accomplishment.
                </p>

                {/* Carousel */}
                <Carousel className="w-full">
                    <div className="overflow-hidden w-full" ref={emblaRef}>
                        <div className="flex w-full">
                            {testimonials.map((client, index) => (
                                <CarouselItem key={index} className="md:w-[30%] md:mx-4">

                                    <Card className="p-4 my-1 overflow-hidden text-center bg-white border-none rounded-3xl ">
                                        <Image
                                            src={quotationMark}
                                            height={10}
                                            width={50}
                                            alt="quotation mark"
                                            className=""
                                        />
                                        <CardHeader className="pb-10 md:pb-0 md:h-[180px] lg:h-[130px] m-auto">
                                            <CardDescription className="leading-relaxed font-light text-black text-[1rem] ">{client.message}</CardDescription>
                                        </CardHeader>
                                        <div className="flex justify-center gap-1">
                                            <Image src={startImg} alt="client pic" height={15} width={15} className="rounded-full" />
                                            <Image src={startImg} alt="client pic" height={15} width={15} className="rounded-full" />
                                            <Image src={startImg} alt="client pic" height={15} width={15} className="rounded-full" />
                                            <Image src={startImg} alt="client pic" height={15} width={15} className="rounded-full" />
                                            <Image src={startImg} alt="client pic" height={15} width={15} className="rounded-full" />
                                        </div>
                                        <CardFooter className="p-0 pt-4  m-auto">
                                            <div className="flex justify-center items-center w-full gap-3">
                                                <Image
                                                    src={clientImg}
                                                    alt="client pic"
                                                    height={60}
                                                    width={60}
                                                    className="rounded-full"
                                                />
                                                <div className="text-left">
                                                    <h2 className="font-semibold">{client.name}</h2>
                                                    <p className="text-sm font-light">{client.position}</p>
                                                </div>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </div>
                    </div>
                </Carousel>

                {/* Indicators */}
                <div className="flex justify-center items-center gap-2 mt-20">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${selectedIndex === index ? "bg-malachite scale-110" : "bg-malachite/50"
                                } transition-transform duration-300`}
                            onClick={() => emblaApi?.scrollTo(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
