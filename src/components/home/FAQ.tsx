
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const faqs = [
    {
        question: 'What services does Tecorbitron offer?',
        answer: 'Tecorbitron provides comprehensive IT solutions, including web development, app development, software development, cloud computing, AI, and data analytics, tailored to meet your specific business needs.',
    },
    {
        question: 'Do you offer custom solutions for specific industries?',
        answer: 'Yes, we deliver tailored solutions for various industries like e-commerce, retail, healthcare, education, and more to address their unique challenges and goals.',
    },
    {
        question: 'Do you provide post-launch support and maintenance?',
        answer: 'Absolutely. We offer continuous support, updates, and maintenance to ensure that your digital assets stay secure, optimized, and up-to-date.',
    },
    {
        question: 'How do you ensure the security of my data and digital assets?',
        answer: 'We prioritize data security by implementing industry-standard encryption, secure coding practices, and regular security audits to safeguard your digital assets.',
    },
    {
        question: ' Can you scale the solution as my business grows?',
        answer: 'Absolutely. Our solutions are designed to be scalable, allowing you to expand and adapt as your business grows without hassle.',
    },
    {
        question: 'Do you work with startups as well as large enterprises?',
        answer: 'Yes, we cater to businesses of all sizes, from startups to large enterprises, offering customized solutions that fit their unique requirements and goals.',
    },
];

const FAQ = () => {

    return (
        <div id="faq" className=" bg-white">
            <div className="flex flex-col text-rich-black items-center py-20 bg-light-gray p-6 max-w-screen-xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-malachite font-bold text-center">FAQ&apos;s <br />  <span className="text-prussion-blue">Everything You Need to Know</span></h2>
                <p className="max-w-6xl m-auto text-center my-10 px-4">
                    Discover insights about our offerings and how we can assist in transforming your business.
                </p>
                <div className="md:w-3/5 mt-5">

                    <Accordion type="single" collapsible>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <AccordionItem value={"item" + index}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            </div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
