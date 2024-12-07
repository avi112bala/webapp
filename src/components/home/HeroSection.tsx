"use client";
import Image from "next/image";
import bg from "@/assets/her--sec-bg.jpg";


const HeroSection = () => {
  return (
    <div className="relative m-auto  bg-cover bg-center">
      {/* Overlay for low-opacity effect */}
      <Image
        src={bg}
        alt="bg"
        className="object-center object-cover absolute inset-0 min-h-[500px] h-screen w-full "
      />

      <div className="relative z-1 w-full min-h-[500px] h-screen flex flex-col justify-center">
        <div className="text-center text-white px-4">
          <h1 className="hidden md:block font-bold text-2xl md:text-7xl leading-snug md:leading-tight ">
            Unlock Limitless Potential, <br /> Fueled by
            <span className="bg-gradient-to-r from-[#07FF7A] to-[#BA9EFF] text-transparent bg-clip-text">
              {" "}
              Next-Gen <br />
            </span>{" "}
            Technology
          </h1>
          <h1 className="md:hidden font-bold text-4xl md:text-7xl leading-snug md:leading-tight ">
            Unlock Limitless Potential, Fueled by
            <span className="bg-gradient-to-r from-[#07FF7A] to-[#BA9EFF] text-transparent bg-clip-text">
              {" "}
              Next-Gen
            </span>{" "}
            Technology
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
