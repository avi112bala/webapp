import Image from "next/image";
import awsLogo from "@/assets/partners/aws-partner.png";
import metaLogo from "@/assets/partners/meta-business-partner.png";
import cloudLogo from "@/assets/partners/google-cloud-Partner.png";
import shopifyLogo from "@/assets/partners/Shopify-Partners.png";
import idfcLogo from "@/assets/partners/idfc-first-bank.png";
import johoLogo from "@/assets/partners/zoho-partners.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
    {
        logo: awsLogo,
        alt: "AWS Logo",
        category: "Technology",
        title: "Cloud",
    },
    {
        logo: metaLogo,
        alt: "Meta Logo",
        category: "Marketing",
        title: "Ad Network",
    },
    {
        logo: cloudLogo,
        alt: "Google Cloud Logo",
        category: "Technology",
        title: "Cloud",
    },
    {
        logo: shopifyLogo,
        alt: "Shopify Logo",
        category: "E-commerce",
        title: "Ecommerce Partner",
    },
    {
        logo: idfcLogo,
        alt: "IDFC Logo",
        category: "Finance",
        title: "Bank Partner",
    },
    {
        logo: johoLogo,
        alt: "zoho Logo",
        category: "Infrastructure",
        title: "Assets",
    },
];


const TrustedPartners = () => {
    return (
        <section className="relative bg-[#0A377D] bg-cover bg-center">

            <div className="max-w-screen-xl mx-auto px-4 py-20 text-white relative z-1">
                <h2 className="text-2xl md:text-3xl text-malachite font-bold text-center">
                    Over Trusted Partner&apos;s<br />
                    <span className="text-white">Integration Across Platform</span>
                </h2>

                <div className="flex flex-col md:flex-row w-full py-10">
                    <div className="md:w-2/5">
                        <p className="md:text-xl max-w-6xl m-auto font-light text-center md:text-left md:mt-5 mb-10 md:mb-20 px-4">
                            We proudly collaborate with globally
                            recognized partners, sharing expertise
                            and resources to deliver innovative,
                            future-ready solutions. Together, we
                            strive to exceed expectations.
                        </p>
                        {/* view all btn  */}
                        <div className="hidden md:flex mt-10 w-fit  p-2 px-6 rounded-xl border justify-center items-center gap-4">
                            <Link href="/" className="inline-block">
                                See All Integrations
                            </Link>
                            <ArrowRight size={20} />
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <div className="flex justify-evenly flex-wrap text-black">
                            {partners.map((partner, index) => (
                                <div key={index} className="w-[45%] sm:w-2/5 md:w-[28%] bg-white my-2 md:my-4 flex-wrap rounded-xl p-2">
                                    <p className="text-center">{partner.category}</p>
                                    <p className="text-center text-sm text-malachite">{partner.title}</p>
                                    <div className="flex justify-center">
                                        <Image src={partner.logo} alt={partner.alt} height={80} width={200} className="w-40 h-20 object-contain p-5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden mt-10 w-fit m-auto  p-2 px-6 rounded-xl border flex justify-center items-center gap-4">
                        <Link href="/" className="inline-block">
                            See All Integrations
                        </Link>
                        <ArrowRight size={20} />
                    </div>
                </div>



            </div>
        </section>
    );
};

export default TrustedPartners;
