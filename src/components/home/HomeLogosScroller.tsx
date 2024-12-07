import Image from "next/image";
import logo1 from "@/assets/logos/schroller/img1.png";
import logo2 from "@/assets/logos/schroller/img2.png";
import logo3 from "@/assets/logos/schroller/img3.png";
import logo4 from "@/assets/logos/schroller/img4.png";
import logo5 from "@/assets/logos/schroller/img5.png";
import logo6 from "@/assets/logos/schroller/img6.png";
import logo7 from "@/assets/logos/schroller/img7.png";
import logo8 from "@/assets/logos/schroller/img8.png";
import logo9 from "@/assets/logos/schroller/img9.png";
import logo10 from "@/assets/logos/schroller/img10.png";
import logo11 from "@/assets/logos/schroller/img11.png";
import logo12 from "@/assets/logos/schroller/img12.png";
import logo13 from "@/assets/logos/schroller/img13.png";
import logo14 from "@/assets/logos/schroller/img14.png";
import logo15 from "@/assets/logos/schroller/img15.png";
import logo16 from "@/assets/logos/schroller/img16.png";
import logo17 from "@/assets/logos/schroller/img17.png";
import logo18 from "@/assets/logos/schroller/img18.png";



const HomeLogosScroller = () => {
  const logos = [
    { id: 1, src: logo1, alt: 'logo1' },
    { id: 2, src: logo2, alt: 'logo2' },
    { id: 3, src: logo3, alt: 'logo3' },
    { id: 4, src: logo4, alt: 'logo4' },
    { id: 5, src: logo5, alt: 'logo5' },
    { id: 6, src: logo6, alt: 'logo6' },
    { id: 7, src: logo7, alt: 'logo7' },
    { id: 8, src: logo8, alt: 'logo8' },
    { id: 9, src: logo9, alt: 'logo9' },
  ];
  const logos2 = [
    { id: 10, src: logo10, alt: 'logo10' },
    { id: 11, src: logo11, alt: 'logo11' },
    { id: 12, src: logo12, alt: 'logo12' },
    { id: 13, src: logo13, alt: 'logo13' },
    { id: 14, src: logo14, alt: 'logo14' },
    { id: 15, src: logo15, alt: 'logo15' },
    { id: 16, src: logo16, alt: 'logo16' },
    { id: 17, src: logo17, alt: 'logo17' },
    { id: 18, src: logo18, alt: 'logo18' },
  ];

  return (
    <div className="bg-[#EDF8FF]">
      <div className="relative overflow-hidden max-w-screen-xl m-auto py-10 md:py-14">
        <div className="flex w-max animate-scroll-restart ">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex items-center w-[150px] h-[40px] md:mx-5"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-14 md:h-16 object-contain p-4 "
              />
            </div>
          ))}
        </div>
      </div>

      <p className="md:text-2xl font-Orbit text-center text-[#003A54]">Elevate, Engage, and Excel In The Digital World</p>

      {/* Reverse Scroller */}
      <div className="relative overflow-hidden max-w-screen-xl m-auto py-10 md:py-14">
        <div className="flex w-max animate-scroll-reverse">
          {logos2.concat(logos2).map((logo, index) => (
            <div
              key={index}
              className="flex items-center w-[150px] h-[40px] md:mx-5"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-14 md:h-16 object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLogosScroller;
