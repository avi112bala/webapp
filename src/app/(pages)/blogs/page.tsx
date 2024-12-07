import React from 'react'
import bg from "@/assets/header-bg.jpg";
import ContactForm from '@/components/home/ContactForm';

const Blogs = () => {
    return (
        <section className="" >
            {/* About Header section   */}
            <div className='relative z-0 py-20 px-4 bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}>

                <div className='max-w-screen-xl m-auto relative z-1 pt-20'>
                    <h2 className="text-white font-extrabold text-center text-3xl md:text-6xl leading-snug md:leading-tight">
                        Blog&apos;s <br />  <span className='text-4xl md:text-7xl'> The Knowledge Nexus</span> </h2>
                    <p className="md:text-xl text-[#FFF1F1] max-w-4xl m-auto font-light text-center my-10">
                        Dive deep into industry insights, innovation solutions, and expert tips to empower your digital transformation journey
                    </p>
                </div>
            </div>
            <ContactForm />

        </section>
    )
}

export default Blogs