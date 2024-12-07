import Image from 'next/image';
import vismalImage from '@/assets/about/vishal-image.png';
import adityaImage from '@/assets/about/aditya-image.png';
import hrishabImage from '@/assets/about/hrishab-image.png';
import rahulImage from '@/assets/about/rahul-image.png';
import shubhamImage from '@/assets/about/shubham-image.png';
import avinashImage from '@/assets/about/avinash-image.png';
import rajenderImage from '@/assets/about/rajender.png';
import vipinImage from '@/assets/about/vipin-image.jpg';

const OurTeam = () => {

  const teamMembers = [
    { name: 'Vishal Rajput', role: 'Managing Director', img: vismalImage },
    { name: 'Aditya Poddar', role: 'Chief Operating Officer', img: adityaImage },
    { name: 'Hrishab Raj', role: 'Chief Technical Officer', img: hrishabImage },
    { name: 'Rahul Kumar', role: 'Executive Officer', img: rahulImage },
    { name: 'Shubham Kumar', role: 'Sr. Designer', img: shubhamImage },
    { name: 'Avinash Mishra', role: 'Sr. Developer', img: avinashImage },
    { name: 'Rajender Patel', role: 'Sr. Developer', img: rajenderImage },
    { name: 'Vipin Pundir', role: 'Developer', img: vipinImage },
  ];

  return (
    <div className="bg-[#E5F5FF] py-20 px-4">
         <h2 className="text-center text-3xl font-bold text-prussion-blue">Our Team</h2>
         <p className="max-w-4xl m-auto text-prussion-blue text-center mt-5 mb-10">Our team is a perfect blend of creativity, expertise, and passion. Get to know the people behind our success, working together to bring your ideas to life.</p>
      <div className="flex flex-wrap justify-between md:justify-center max-w-screen-xl m-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white w-[46%] md:w-[20%] m-[1%] my-3 rounded-2xl p-2 pb-4 flex flex-col items-center filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          >
            <div className="w-full relative">
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-2xl h-40 md:h-64 w-full m-auto object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
