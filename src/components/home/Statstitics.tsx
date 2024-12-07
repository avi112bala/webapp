import Image from 'next/image';
import clientsImg from '@/assets/Statstitics/clients.png'
import experienceImg from '@/assets/Statstitics/experience.png'
import projectImg from '@/assets/Statstitics/project.png'
import technologyImg from '@/assets/Statstitics/technology.png'
import NumberTicker from "@/components/ui/number-ticker";

export function NumberTickerDemo() {
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={100} />
    </p>
  );
}


const Statstitics = () => {

  return (
    <div className="bg-[#172D68] py-10 px-4">
      <div className="flex flex-col text-[#FFFFFF] md:items-center md:text-center justify-between gap-10 md:gap-0 md:flex-row py-20 max-w-screen-xl m-auto ">
        <div className="flex md:flex-col items-center gap-6 md:w-1/3 md:px-10 md:border-r-2">
          <div className="">
            <Image
              src={experienceImg}
              alt="icon"
              height={60}
              width={60}
              className="object-center object-cover"
            />
          </div>
          <div className="flex flex-col md:items-center md:gap-6">
            <p className="text-[#C4E2FF] text-4xl font-extrabold">
              <NumberTicker value={5.2} decimalPlaces={1} /> +
            </p>
            <h3 className="text-xl ">Year of Experience</h3>
          </div>
        </div>

        <div className="flex md:flex-col items-center gap-6 md:w-1/3 md:px-10 md:border-r-2">
          <div className="">
            <Image
              src={projectImg}
              alt="icon"
              height={60}
              width={60}
              className="object-center object-cover"
            />
          </div>
          <div className="flex flex-col md:items-center md:gap-6">
            <p className="text-[#C4E2FF] text-4xl font-extrabold">
              <NumberTicker value={82} /> +
            </p>
            <h3 className="text-xl ">Projects Delivered</h3>
          </div>
        </div>

        <div className="flex md:flex-col items-center gap-6 md:w-1/3 md:px-10 md:border-r-2">
          <div className="">
            <Image
              src={clientsImg}
              alt="icon"
              height={60}
              width={60}
              className="object-center object-cover"
            />
          </div>
          <div className="flex flex-col md:items-center md:gap-6">
            <p className="text-[#C4E2FF] text-4xl font-extrabold">
              <NumberTicker value={67} /> +
            </p>
            <h3 className="text-xl ">Global Clients Served</h3>
          </div>
        </div>

        <div className="flex md:flex-col items-center gap-6 md:w-1/3 md:px-10">
          <div className="">
            <Image
              src={technologyImg}
              alt="icon"
              height={60}
              width={60}
              className="object-center object-cover"
            />
          </div>
          <div className="flex flex-col md:items-center md:gap-6">
            <p className="text-[#C4E2FF] text-4xl font-extrabold">
              <NumberTicker value={30} /> +
            </p>
            <h3 className="text-xl  ">Hands-on Technology</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statstitics;
