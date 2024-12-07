import AboutCompany from '@/components/about/AboutCompany'
import AboutPartners from '@/components/about/AboutPartners'
import OurTeam from '@/components/about/OurTeam'
import ContactForm from '@/components/home/ContactForm'
import React from 'react'

const About = () => {
    return (
        <section>
            <AboutCompany />
            <AboutPartners />
            <OurTeam />
            <ContactForm />
        </section>
    )
}

export default About