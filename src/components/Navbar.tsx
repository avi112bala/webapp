"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname hook
import logo from "@/assets/FullLogo.svg";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get the current pathname
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path: string) => pathname === path ? "bg-malachite text-white rounded-md" : "";

  return (
    <nav className="bg-white shadow-md fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-20 z-20 flex justify-between items-center p-4 rounded-b-lg max-w-screen-xl">

      <div className="w-full flex items-center justify-between ">
        <Link href="/">
          <Image src={logo} width={200} height={200} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex ">
          <li className={` ${isActive("/about")} duration-300 ease-in-out px-4 `}>
            <Link href="/about">About</Link>
          </li>
          <li
            className={` ${isActive("/services")} duration-300 ease-in-out px-4 `}
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={` ${isActive("/solutions")} duration-300 ease-in-out px-4 `}
          >
            <Link href="/solutions">Solutions</Link>
          </li>
          <li
            className={` ${isActive("/portfolio")} duration-300 ease-in-out px-4 `}
          >
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li
            className={` ${isActive("/blogs")} duration-300 ease-in-out px-4 `}
          >
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>

        {/* Right-side link - Contact */}
        <div className="hidden md:flex">
          <ul>
            <li>
              <Button asChild className="bg-malachite text-white">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li className={`${isActive("/about")} text-center w-24 m-auto`}>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className={`${isActive("/services")} text-center w-24 m-auto`}>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li className={`${isActive("/solutions")} text-center w-24 m-auto`}>
              <Link href="/solutions" onClick={() => setIsOpen(false)}>
                Solutions
              </Link>
            </li>
            <li className={`${isActive("/portfolio")} text-center w-24 m-auto`}>
              <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li className={`${isActive("/blogs")} text-center w-24 m-auto`}>
              <Link href="/blogs" onClick={() => setIsOpen(false)}>
                Blogs
              </Link>
            </li>
            <li className={`${isActive("/contact")} text-center w-fit m-auto`}>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
