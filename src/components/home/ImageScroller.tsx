"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselItem } from "../ui/carousel";
import image1 from '@/assets/scroller-images/image1.jpg'
import image2 from '@/assets/scroller-images/image2.jpg'
import image3 from '@/assets/scroller-images/image3.jpg'
import image4 from '@/assets/scroller-images/image4.jpg'
import image5 from '@/assets/scroller-images/image5.jpg'
import image6 from '@/assets/scroller-images/image6.jpg'
import image7 from '@/assets/scroller-images/image7.jpg'
import image8 from '@/assets/scroller-images/image8.jpg'
import image9 from '@/assets/scroller-images/image9.jpg'
import image10 from '@/assets/scroller-images/image10.jpg'
import image11 from '@/assets/scroller-images/image11.jpg'
import image12 from '@/assets/scroller-images/image12.jpg'

const ImageScroller = () => {
    const scrollerImg = [
        {
            image: image1
        },
        {
            image: image2
        },
        {
            image: image3
        },
        {
            image: image4
        },
        {
            image: image5
        },
        {
            image: image6
        },
        {
            image: image7
        },
        {
            image: image8
        },
        {
            image: image9
        },
        {
            image: image10
        },
        {
            image: image11
        },
        {
            image: image12
        },
    ];

    // Embla carousel setup
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: "center", // Align center for better multi-item scrolling
        skipSnaps: false,
    }, [Autoplay({ delay: 3000, stopOnInteraction: true })]); // Auto-scroll plugin

    return (
        <div className="bg-white">
            <div className="flex flex-col items-center justify-center px-4 pb-20 max-w-screen-xl m-auto">

                {/* Carousel */}
                <Carousel className="w-full">
                    <div className="overflow-hidden w-full rounded-3xl" ref={emblaRef}>
                        <div className="flex w-full">
                            {scrollerImg.map((item, index) => (
                                <CarouselItem key={index} className="w-fit mx-1 md:mx-4 rounded-3xl">
                                    <Card className="relative overflow-hidden border-none rounded-3xl">
                                        <Image
                                            src={item.image}
                                            height={200}
                                            width={100}
                                            quality={100}
                                            alt="quotation mark"
                                            className="m-auto h-60 md:h-80 w-48 md:w-60 object-cover object-center"
                                        />
                                        <div className="bg-black inset-0 absolute opacity-10"></div>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default ImageScroller;
