// "use client";
// import Link from "next/link";
// import React, { useState, ChangeEvent } from "react";
// import projectImage from "@/assets/projects/it-solutions.jpg";
// import Image, { StaticImageData } from "next/image";
// import { ArrowRight } from "lucide-react";

// export interface Project {
//     id: number;
//     title: string;
//     description: string;
//     techStack: string;
//     image: string | StaticImageData;
//     category: string;
// }

// // Sample Data with Categories
// export const projects: Project[] = [
//     {
//         id: 1,
//         title: "E-commerce Platform",
//         description:
//             "Developed a custom e-commerce solution for a retail brand to manage products and orders online.",
//         techStack: "Next.js, Tailwind CSS, Stripe, PostgreSQL",
//         image: projectImage,
//         category: "Web Development",
//     },
//     {
//         id: 2,
//         title: "Real-Time Dashboard",
//         description:
//             "Created a real-time dashboard to track logistics and shipment statuses globally.",
//         techStack: "React, MUI, Context API, AWS",
//         image: projectImage,
//         category: "Cloud Solutions",
//     },
//     {
//         id: 3,
//         title: "Portfolio Website",
//         description:
//             "Designed a portfolio site to showcase the agency’s creative works and attract new clients.",
//         techStack: "Next.js, Tailwind CSS, Vercel",
//         image: projectImage,
//         category: "Web Development",
//     },
//     {
//         id: 4,
//         title: "Mobile App Development",
//         description: "Developed a cross-platform mobile app for e-commerce.",
//         techStack: "React Native, Firebase",
//         image: projectImage,
//         category: "App Development",
//     },
//     {
//         id: 5,
//         title: "Data Analytics Platform",
//         description: "Built a platform for data analytics and visualization.",
//         techStack: "Python, AWS, React",
//         image: projectImage,
//         category: "Cloud Solutions",
//     },
//     {
//         id: 6,
//         title: "E-commerce Platform",
//         description:
//             "Developed a custom e-commerce solution for a retail brand to manage products and orders online.",
//         techStack: "Next.js, Tailwind CSS, Stripe, PostgreSQL",
//         image: projectImage,
//         category: "Web Development",
//     },
//     {
//         id: 7,
//         title: "Real-Time Dashboard",
//         description:
//             "Created a real-time dashboard to track logistics and shipment statuses globally.",
//         techStack: "React, MUI, Context API, AWS",
//         image: projectImage,
//         category: "Cloud Solutions",
//     },
//     {
//         id: 8,
//         title: "Portfolio Website",
//         description:
//             "Designed a portfolio site to showcase the agency’s creative works and attract new clients.",
//         techStack: "Next.js, Tailwind CSS, Vercel",
//         image: projectImage,
//         category: "Web Development",
//     },
//     {
//         id: 9,
//         title: "Mobile App Development",
//         description: "Developed a cross-platform mobile app for e-commerce.",
//         techStack: "React Native, Firebase",
//         image: projectImage,
//         category: "App Development",
//     },
//     {
//         id: 10,
//         title: "Data Analytics Platform",
//         description: "Built a platform for data analytics and visualization.",
//         techStack: "Python, AWS, React",
//         image: projectImage,
//         category: "Cloud Solutions",
//     },
//     {
//         id: 11,
//         title: "Portfolio Website",
//         description:
//             "Designed a portfolio site to showcase the agency’s creative works and attract new clients.",
//         techStack: "Next.js, Tailwind CSS, Vercel",
//         image: projectImage,
//         category: "Web Development",
//     },
//     {
//         id: 12,
//         title: "Portfolio Website",
//         description:
//             "Designed a portfolio site to showcase the agency’s creative works and attract new clients.",
//         techStack: "Next.js, Tailwind CSS, Vercel",
//         image: projectImage,
//         category: "Web Development",
//     },
//     {
//         id: 13,
//         title: "Portfolio Website",
//         description:
//             "Designed a portfolio site to showcase the agency’s creative works and attract new clients.",
//         techStack: "Next.js, Tailwind CSS, Vercel",
//         image: projectImage,
//         category: "Web Development",
//     },
//     {
//         id: 14,
//         title: "Data Analytics Platform",
//         description: "Built a platform for data analytics and visualization.",
//         techStack: "Python, AWS, React",
//         image: projectImage,
//         category: "Cloud Solutions",
//     },
//     {
//         id: 15,
//         title: "Mobile App Development",
//         description: "Developed a cross-platform mobile app for e-commerce.",
//         techStack: "React Native, Firebase",
//         image: projectImage,
//         category: "App Development",
//     },
// ];


// // Component starts here

// const PortfolioSec = () => {
//     const [searchQuery, setSearchQuery] = useState<string>("");
//     const [visibleCount, setVisibleCount] = useState<number>(6); // Initial visible cards count

//     // Handle search input change
//     const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setSearchQuery(e.target.value.toLowerCase());
//     };

//     // Filter projects based on search query
//     const filteredProjects = projects.filter((project) =>
//         project.title.toLowerCase().includes(searchQuery) ||
//         project.techStack.toLowerCase().includes(searchQuery)
//     )

//     // Show more projects (6 at a time)
//     const showMoreProjects = () => {
//         setVisibleCount((prev) => prev + 6);
//     };

//     return (
//         <section className="py-[100px] max-w-screen-xl m-auto">
//             <div className="container mx-auto px-8">
//                 <h2 className="text-3xl md:text-4xl text-center mb-4 ">
//                     Our Work & <span className="text-malachite">Projects</span>
//                 </h2>
//                 <p className="text-center text-lg text-gray-600 mb-10">
//                     Search our previous projects and see what we have delivered for our
//                     amazing clients.
//                 </p>

//                 {/* Search Input */}
//                 <div className="mb-20 flex justify-center">
//                     <input
//                         type="text"
//                         placeholder="Search by title, or tech stack..."
//                         value={searchQuery}
//                         onChange={handleSearchChange}
//                         className="w-full max-w-lg p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                     />
//                 </div>

//                 {/* Project Cards */}
//                 <div className="flex gap-6 justify-evenly flex-wrap">
//                     {filteredProjects.length > 0 ? (
//                         filteredProjects.slice(0, visibleCount).map((project) => (
//                             <div
//                                 key={project.id}
//                                 className="w-full md:w-2/5 lg:w-1/4 my-2 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
//                             >
//                                 <Image
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="h-52 w-full object-cover"
//                                 />
//                                 <div className="p-6 flex flex-col flex-1">
//                                     <h3 className="text-2xl mb-2">
//                                         {project.title}
//                                     </h3>
//                                     <div className="flex flex-wrap gap-2 mb-4">
//                                       <p>{project.techStack}</p>
//                                     </div>
//                                     <span className="text-sm text-gray-500 mb-2">
//                                         Category: {project.category}
//                                     </span>
//                                     <Link href={`/portfolio/${project.id}`}>
//                                         <button className="w-full border text-rich-black font-semibold py-2 px-4 rounded mt-5">
//                                             View Case Study
//                                         </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div>No matching projects found. Please try different keywords...</div>
//                     )}
//                 </div>

//                 {/* Show More Button */}
//                 {visibleCount < filteredProjects.length && (
//                     <div className="mt-20 flex text-malachite justify-center items-center gap-2 text-sm">
//                         <button onClick={showMoreProjects} className="inline-block border-rich-black border-b text-rich-black font-medium hover:text-malachite ">
//                             VIEW MORE
//                         </button>
//                         <ArrowRight size={17} />
//                     </div>

//                 )}
//             </div>
//         </section>
//     );
// };

// export default PortfolioSec;

import React from 'react'

const PortfolioSec = () => {
  return (
    <div>PortfolioSec</div>
  )
}

export default PortfolioSec