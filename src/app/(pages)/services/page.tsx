import ContactForm from "@/components/home/ContactForm";
import Image from "next/image";
import headerImage from "@/assets/services/services-header.png";
import serviceWeb from "@/assets/services/services-web.jpg";
import Link from "next/link";

const Services = () => {

    return (
        <section className="bg-white" >
            {/* Services Header section   */}
            <div className='relative z-0 py-20 px-4 bg-cover bg-center bg-no-repeat'>
                <div className='flex flex-col md:flex-row justify-evenly items-center gap-10 py-10 max-w-screen-xl m-auto'>
                    <div className="md:text-right md:w-1/2 md:pr-6">
                        {/* for mobile screen  */}
                        <h2 className="md:hidden text-prussion-blue font-extrabold text-3xl ">
                            Service Empower Results That Inspire</h2>
                        {/* for tab, desktop screen  */}
                        <h2 className="hidden md:block text-prussion-blue font-extrabold text-3xl md:text-5xl lg:text-6xl">
                            <span className="block mt-4">Service</span>
                            <span className="block mt-4">Empower</span>
                            <span className="block mt-4">Results</span>
                            <span className="block mt-4">That Inspire</span>
                        </h2>

                        <p className="max-w-md text-[13px] md:float-end font-light mt-5 md:my-10 md:leading-loose">
                            Explore Tecorbitron&apos;s services crafted to redefine digital possibilities, fuel innovation, and empower your business with cutting-edge solutions designed to drive success and scalability
                        </p>
                    </div>
                    <div className="md:w-1/2 lg:w-1/2">
                        <Image src={headerImage} width={550} height={400} alt="services-image" className="object-cover" />
                    </div>
                </div>
            </div>


            {/* Services tab and All services sections */}
            <div className="hidden md:flex justify-center gap-10 flex-wrap mb-10">
                <Link href='#web' >
                    <div className="text-[#0A377D] border-[#0A377D] border cursor-pointer px-8 py-2 rounded-3xl">Web</div>
                </Link>
                <Link href='#app' >
                    <div className="text-[#05A508] border-[#05A508] border cursor-pointer px-8 py-2 rounded-3xl">App</div>
                </Link>
                <Link href='#soft' >
                    <div className="text-[#FF5757] border-[#FF5757] border cursor-pointer px-8 py-2 rounded-3xl">Software</div>
                </Link>
                <Link href='#ui' >
                    <div className="text-[#FFB700] border-[#FFB700] border cursor-pointer px-8 py-2 rounded-3xl">UI UX CX</div>
                </Link>
                <Link href='#cloud' >
                    <div className="text-[#0A377D] border-[#0A377D] border cursor-pointer px-8 py-2 rounded-3xl">Cloud</div>
                </Link>
                <Link href='#ai' >
                    <div className="text-[#FF2B75] border-[#FF2B75] border cursor-pointer px-8 py-2 rounded-3xl">AI & ML</div>
                </Link>
                <Link href='#data' >
                    <div className="text-[#FF2B75] border-[#FF2B75] border cursor-pointer px-8 py-2 rounded-3xl">Data Analytic</div>
                </Link>
            </div>

            {/* services  */}
            <div className="bg-[#0A377D] px-4">
                <div id="web" className="flex flex-col md:flex-row max-w-screen-xl m-auto min-h-[650px]">
                    <div className="flex flex-col justify-center md:w-1/2 md:p-4 py-20 text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold">Web Development</h3>
                        <p className="text-xl md:text-2xl font-baby">Drives Digital Excellence</p>
                        <p className="font-light text-lg mt-6">At Tecorbitron, we specialize in crafting high-performing, responsive, and visually stunning websites designed to meet your unique business needs. Our web development solutions blend modern design principles, intuitive user experiences, and robust functionality to ensure your online presence stands out in today’s competitive digital landscape. <br /> <br /> Partner with us to empower your business with a website that’s built for success</p>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <div className="w-fit  text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">E-Com web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <Image src={serviceWeb} width={550} height={400} alt="services-image" className="h-full m-auto object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-[#0A377D] px-4">
                <div id="app" className="flex flex-col md:flex-row-reverse max-w-screen-xl m-auto min-h-[650px]">
                    <div className="flex flex-col justify-center md:w-1/2 md:p-4 py-20 text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold">App Development</h3>
                        <p className="text-xl md:text-2xl font-baby">Drives Digital Excellence</p>
                        <p className="font-light text-lg mt-6">At Tecorbitron, we specialize in crafting high-performing, responsive, and visually stunning websites designed to meet your unique business needs. Our web development solutions blend modern design principles, intuitive user experiences, and robust functionality to ensure your online presence stands out in today’s competitive digital landscape. <br /> <br /> Partner with us to empower your business with a website that’s built for success</p>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">E-Com web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <Image src={serviceWeb} width={550} height={400} alt="services-image" className="h-full m-auto object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-[#0A377D] px-4">
                <div id="soft" className="flex flex-col md:flex-row max-w-screen-xl m-auto min-h-[650px]">
                    <div className="flex flex-col justify-center md:w-1/2 md:p-4 py-20 text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold">Software Development</h3>
                        <p className="text-xl md:text-2xl font-baby">Drives Digital Excellence</p>
                        <p className="font-light text-lg mt-6">At Tecorbitron, we specialize in crafting high-performing, responsive, and visually stunning websites designed to meet your unique business needs. Our web development solutions blend modern design principles, intuitive user experiences, and robust functionality to ensure your online presence stands out in today’s competitive digital landscape. <br /> <br /> Partner with us to empower your business with a website that’s built for success</p>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">E-Com web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <Image src={serviceWeb} width={550} height={400} alt="services-image" className="h-full m-auto object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-[#0A377D] px-4">
                <div id="ui" className="flex flex-col md:flex-row-reverse max-w-screen-xl m-auto min-h-[650px]">
                    <div className="flex flex-col justify-center md:w-1/2 md:p-4 py-20 text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold">UI UX CX</h3>
                        <p className="text-xl md:text-2xl font-baby">Drives Digital Excellence</p>
                        <p className="font-light text-lg mt-6">At Tecorbitron, we specialize in crafting high-performing, responsive, and visually stunning websites designed to meet your unique business needs. Our web development solutions blend modern design principles, intuitive user experiences, and robust functionality to ensure your online presence stands out in today’s competitive digital landscape. <br /> <br /> Partner with us to empower your business with a website that’s built for success</p>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">E-Com web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <Image src={serviceWeb} width={550} height={400} alt="services-image" className="h-full m-auto object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-[#0A377D] px-4">
                <div id="cloud" className="flex flex-col md:flex-row max-w-screen-xl m-auto min-h-[650px]">
                    <div className="flex flex-col justify-center md:w-1/2 md:p-4 py-20 text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold">Cloud</h3>
                        <p className="text-xl md:text-2xl font-baby">Drives Digital Excellence</p>
                        <p className="font-light text-lg mt-6">At Tecorbitron, we specialize in crafting high-performing, responsive, and visually stunning websites designed to meet your unique business needs. Our web development solutions blend modern design principles, intuitive user experiences, and robust functionality to ensure your online presence stands out in today’s competitive digital landscape. <br /> <br /> Partner with us to empower your business with a website that’s built for success</p>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">E-Com web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <Image src={serviceWeb} width={550} height={400} alt="services-image" className="h-full m-auto object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-[#0A377D] px-4">
                <div id="ai" className="flex flex-col md:flex-row-reverse max-w-screen-xl m-auto min-h-[650px]">
                    <div className="flex flex-col justify-center md:w-1/2 md:p-4 py-20 text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold">AI & ML</h3>
                        <p className="text-xl md:text-2xl font-baby">Drives Digital Excellence</p>
                        <p className="font-light text-lg mt-6">At Tecorbitron, we specialize in crafting high-performing, responsive, and visually stunning websites designed to meet your unique business needs. Our web development solutions blend modern design principles, intuitive user experiences, and robust functionality to ensure your online presence stands out in today’s competitive digital landscape. <br /> <br /> Partner with us to empower your business with a website that’s built for success</p>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">E-Com web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <Image src={serviceWeb} width={550} height={400} alt="services-image" className="h-full m-auto object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-[#0A377D] px-4">
                <div id="data" className="flex flex-col md:flex-row max-w-screen-xl m-auto min-h-[650px]">
                    <div className="flex flex-col justify-center md:w-1/2 md:p-4 py-20 text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold">Data Analytic</h3>
                        <p className="text-xl md:text-2xl font-baby">Drives Digital Excellence</p>
                        <p className="font-light text-lg mt-6">At Tecorbitron, we specialize in crafting high-performing, responsive, and visually stunning websites designed to meet your unique business needs. Our web development solutions blend modern design principles, intuitive user experiences, and robust functionality to ensure your online presence stands out in today’s competitive digital landscape. <br /> <br /> Partner with us to empower your business with a website that’s built for success</p>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">E-Com web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Landing page</div>
                            <div className="w-fit text-white border-white border cursor-pointer px-5 md:px-8 py-2 rounded-3xl">Custome web</div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <Image src={serviceWeb} width={550} height={400} alt="services-image" className="h-full m-auto object-cover" />
                    </div>
                </div>
            </div>


            <ContactForm />
        </section>)
}

export default Services