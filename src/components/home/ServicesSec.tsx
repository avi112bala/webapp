import Image from 'next/image';
import React from 'react';
import webImg from '@/assets/services/web-dev.png';
import appImg from '@/assets/services/app-dev.png';
import softImg from '@/assets/services/software-dev.png';
import uiUxImg from '@/assets/services/ui-ux.png';
import cloudImg from '@/assets/services/cloud.png';
import aiImg from '@/assets/services/ai.png';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ServicesSec = () => {

  const services = [
    {
      title: "Web Development",
      description: "Crafting dynamic, high-impact websites that captivate users and drive growth with cutting-edge designs and seamless, responsive functionality",
      image: webImg
    },
    {
      title: "App Development",
      description: "Building powerful, feature-rich mobile apps for iOS and Android that engage users, boost retention, and elevate your brand's presence",
      image: appImg
    },
    {
      title: "Software Development",
      description: "Designing innovative, tailored software solutions that streamline processes, ignite productivity, and push your business to new heights",
      image: softImg
    },
    {
      title: "UI UX CX Designing",
      description: "Creating stunning, user centred designs that deliver unforgettable experiences, turning users into loyal customers and driving engagement",
      image: uiUxImg
    },
    {
      title: "Cloud Solutions",
      description: "Empowering businesses with flexible, secure cloud infrastructure for unrivaled scalability, lightning-fast access, and game-changing efficiency",
      image: cloudImg
    },
    {
      title: "AI ML & GenerativeAi",
      description: "Harnessing advanced AI and machine learning to fuel smarter insights, automate processes, and redefine what's possible for your business",
      image: aiImg
    }
  ];


  return (
    <div className=" bg-white">
      <div className="px-4 py-20 max-w-screen-xl m-auto leading-snug md:leading-relaxed ">
        {/* section heading  */}
        <h2 className="text-2xl md:text-3xl text-prussion-blue font-bold text-center">Our
          <span className="text-malachite"> Services! </span>
          We can help you with </h2>

        <p className="max-w-4xl m-auto text-prussion-blue text-center my-10 px-4">
          From concept to execution, designing to deployment, Tecorbitron delivers customised web, apps, software and many more services that address your industry’s unique challenges and goals.
        </p>

        {/* services  */}
        <div className="flex w-full flex-wrap justify-around lg:justify-between text-prussion-blue py-4">
          {services?.map((service, index) => (
            <div key={index} className="w-full md:w-[45%] my-4 lg:w-[32%] p-6 bg-[#EAF6FF] rounded-3xl"
              style={{
                backgroundColor: index % 2 === 0
                  ? '#EAF6FF' // Even index color
                  : '#E6FAEF', // Odd index color
              }}>
              <div className="flex gap-6 items-center mb-4">
                <Image src={service.image} alt='web icon' height={50} width={50} />
                <h3 className="font-medium text-2xl max-w-40">{service.title}</h3>
              </div>
              <p className="mb-4">{service.description}</p>
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

export default ServicesSec;
