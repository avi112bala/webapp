"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import awsLogo from "@/assets/partners/aws-partner.png";
import metaLogo from "@/assets/partners/meta-business-partner.png";
import cloudLogo from "@/assets/partners/google-cloud-Partner.png";
import shopifyLogo from "@/assets/partners/Shopify-Partners.png";
import idfcLogo from "@/assets/partners/idfc-first-bank.png";
import johoLogo from "@/assets/partners/zoho-partners.png";
import logo from "@/assets/logo-dark.svg";
import Image from "next/image";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";


const AboutPartners = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (

        <div className="py-20 px-4">
            <h2 className="text-2xl md:text-3xl text-prussion-blue font-bold text-center ">
            Empowering <span className=" text-malachite">Success</span> Through Partnership
            </h2>
            <p className="max-w-4xl m-auto text-prussion-blue text-center mt-5 mb-10">
                At the heart of our journey lies a strong network of partnerships with globally recognized brands. Together, we share expertise, resources, and values to provide innovative, future-ready solutions that redefine possibilities.
            </p>
            <div
                className="relative flex md:w-1/2 m-auto items-center justify-center overflow-hidden rounded-lg  bg-background p-2"
                ref={containerRef}
            >
                <div className="flex size-full flex-col items-stretch justify-between gap-10">
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div1Ref} className="size-20">
                            <Image src={awsLogo} alt='' height={80} width={200} className=" object-contain" />
                        </Circle>
                        <Circle ref={div5Ref} className="size-20">
                            <Image src={metaLogo} alt='' height={80} width={200} className=" object-contain" />
                        </Circle>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div2Ref} className="size-20">
                            <Image src={cloudLogo} alt='' height={80} width={200} className=" object-contain" />
                        </Circle>
                        <Circle ref={div4Ref} className="size-24">
                            <Image src={logo} alt='' height={80} width={200} className="mt-2 ml-1 object-contain" />
                        </Circle>
                        <Circle ref={div6Ref} className="size-20">
                            <Image src={johoLogo} alt='' height={80} width={200} className="mt-2 ml-1 object-contain" />
                        </Circle>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div3Ref} className="size-20">
                            <Image src={shopifyLogo} alt='' height={80} width={200} className=" object-contain" />
                        </Circle>
                        <Circle ref={div7Ref} className="size-20">
                            <Image src={idfcLogo} alt='' height={80} width={200} className=" object-contain" />
                        </Circle>
                    </div>
                </div>

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div4Ref}
                    curvature={-75}
                    endYOffset={-10}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={div4Ref}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={div4Ref}
                    curvature={75}
                    endYOffset={10}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div5Ref}
                    toRef={div4Ref}
                    curvature={-75}
                    endYOffset={-10}
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div6Ref}
                    toRef={div4Ref}
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div7Ref}
                    toRef={div4Ref}
                    curvature={75}
                    endYOffset={10}
                    reverse
                />
            </div>
        </div>

    );
}


export default AboutPartners