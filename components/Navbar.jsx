"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaX } from "react-icons/fa6";

function Navbar() {
  const [windowWidthSize, setWidthWindowSize] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setWidthWindowSize(window.innerWidth);
    const handleWindowResize = () => {
      setWidthWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowWidthSize > 768) {
    return (
      <nav className="flex items-center justify-between py-[15px] px-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] m-auto">
        <Link href="/">
          <div className="flex items-center gap-[15px]">
            <Image src="/logo-icon.svg" width={34} height={34} alt="logo" />
            <h2 className="text-main text-[40px]">Interno</h2>
          </div>
        </Link>
        <ul className="flex items-center gap-[20px]">
          <li className="text-lg text-main font-jost">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg text-main font-jost">
            <Link href="#pages">Pages</Link>
          </li>
          <li className="text-lg text-main font-jost">
            <Link href="#services">Services</Link>
          </li>
          <li className="text-lg text-main font-jost">
            <Link href="">Project</Link>
          </li>
          <li className="text-lg text-main font-jost">
            <Link href="">Blog</Link>
          </li>
          <li className="text-lg text-main font-jost">
            <Link href="#contact">Contact</Link>
          </li>
          <li className="text-lg text-main font-jost">
            <Image
              src="/search-icon.svg"
              width={20}
              height={20}
              alt="search-icon"
            />
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="py-[15px] px-[10px] sm:px-[20px] md:px-[30px] relative">
        <div className="flex items-center justify-between border-b border-b-[#cda274]">
          <Link href="/">
            <div className="flex items-center gap-[15px]">
              <Image src="/logo-icon.svg" width={34} height={34} alt="logo" />
              <h2 className="text-main text-[40px]">Interno</h2>
            </div>
          </Link>
          <div
            onClick={() => {
              setIsNavOpen((isOpen) => !isOpen);
            }}
            className="border-2 p-[2px] border-[#cda274] text-xl rounded-md cursor-pointer"
          >
            {isNavOpen ? <FaX /> : <FaBars />}
          </div>
        </div>
        <div className="bg-[#cda274] overflow-hidden">
          <ul
            className={`flex flex-col items-center justify-center gap-[20px] ${
              !isNavOpen ? "h-0 opacity-0" : "h-[280px] opacity-1"
            } duration-700`}
          >
            <li className="text-lg text-white font-jost">
              <Link href="">Home</Link>
            </li>
            <li className="text-lg text-white font-jost">
              <Link href="">Pages</Link>
            </li>
            <li className="text-lg text-white font-jost">
              <Link href="">Services</Link>
            </li>
            <li className="text-lg text-white font-jost">
              <Link href="">Project</Link>
            </li>
            <li className="text-lg text-white font-jost">
              <Link href="">Blog</Link>
            </li>
            <li className="text-lg text-white font-jost">
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
