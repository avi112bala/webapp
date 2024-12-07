import Image from "next/image";
import React from "react";
import logo from "@/assets/FullLogo-light.svg";
import fbLogo from "@/assets/social-media/Facebook.png";
import InstaLogo from "@/assets/social-media/Instagram.png";
import linkdLogo from "@/assets/social-media//LinkedIn.png";
import redLogo from "@/assets/social-media/Reddit.png";
import TwiLogo from "@/assets/social-media/TwitterX.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000D1D] text-white pt-10 relative font-light z-10">
      <div className="px-4 max-w-screen-xl m-auto">
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between mt-8 space-y-8 md:space-y-0">
          {/* About Company */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-2/6 lg:w-1/4 gap-2">
            <Image src={logo} width={200} height={200} alt="logo" />
            <p className="text-sm leading-relaxed">
              Tecorbitron provides website and app development services,
              leveraging customized digital strategies to produce solutions that
              increase engagement and propel growth across sectors.
            </p>
          </div>

          <div className="flex justify-around w-full md:w-4/6 lg:w-2/4 ">
            {/* Quick Links */}
            <div className="md:w-3/6 lg:w-2/6 flex flex-col items-center">
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="text-sm space-y-3 ">
                <li className="">
                  <Link
                    href="/about"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md "
                  >
                    About Us
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/services"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md "
                  >
                    Services
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/solutions"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md "
                  >
                    Solutions
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/#technologies"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md "
                  >
                    Technologies
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/portfolio"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md "
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Important links */}
            <div className="md:w-3/6 lg:w-2/6 ">
              <h4 className=" mb-4 px-2 font-semibold">Important Links</h4>
              <ul className="text-sm space-y-3 ">
                <li className="">
                  <Link
                    href="/"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md"
                  >
                    App Development
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md"
                  >
                    Software Development
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md"
                  >
                    UI UX CX Designing
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/"
                    className="hover:bg-malachite p-1 px-2 my-2 rounded-md"
                  >
                    Data Intelligence
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="w-full lg:w-1/6">
            <h4 className=" mb-2 font-semibold">Social Media</h4>
            <ul className="flex flex-wrap justify-around lg:justify-start lg:w-40 mt-4">
              <li className="hover:bg-malachite w-10 h-10 mx-1 mb-2 rounded-md duration-300 ease-in-out">
                <Link
                  href="https://www.linkedin.com/company/tecorbitrons"
                  target="_blank"
                >
                  <Image
                    src={linkdLogo}
                    width={100}
                    height={100}
                    alt="logo"
                    className="object-contain h-10 w-10"
                  />
                </Link>
              </li>
              <li className="hover:bg-malachite w-10 h-10 mx-1 mb-2 rounded-md duration-300 ease-in-out">
                <Link
                  href="https://www.facebook.com/tecorbitron"
                  target="_blank"
                >
                  <Image
                    src={fbLogo}
                    width={100}
                    height={100}
                    alt="logo"
                    className="object-contain h-10 w-10"
                  />
                </Link>
              </li>
              <li className="hover:bg-malachite w-10 h-10 mx-1 mb-2 rounded-md duration-300 ease-in-out">
                <Link
                  href="https://www.instagram.com/tecorbitron"
                  target="_blank"
                >
                  <Image
                    src={InstaLogo}
                    width={100}
                    height={100}
                    alt="logo"
                    className="object-contain h-10 w-10"
                  />
                </Link>
              </li>
              <li className="hover:bg-malachite w-10 h-10 mx-1 mb-2 rounded-md duration-300 ease-in-out">
                <Link href="https://x.com/tecorbitron" target="_blank">
                  <Image
                    src={TwiLogo}
                    width={100}
                    height={100}
                    alt="logo"
                    className="object-contain h-10 w-10"
                  />
                </Link>
              </li>
              <li className="hover:bg-malachite w-10 h-10 mx-1 mb-2 rounded-md duration-300 ease-in-out">
                <Link
                  href="https://www.reddit.com/user/tecorbitron"
                  target="_blank"
                >
                  <Image
                    src={redLogo}
                    width={100}
                    height={100}
                    alt="logo"
                    className="object-contain h-10 w-10"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 py-10 border-t-2 border-[#00D060] gap-3 flex flex-col-reverse items-center text-center md:flex-row md:justify-between text-sm">
          <p>Copyright © 2024 Tecorbitron. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/careers" className="hover:text-malachite">
              Careers
            </Link>
            <Link href="/terms" className="hover:text-malachite">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-malachite">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
