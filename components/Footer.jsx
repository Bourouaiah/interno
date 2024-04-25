import Image from "next/image";
import { footerLinks } from "@/constants";

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaHeart,
} from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mb-[25px] px-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[50px] mb-[100px]">
        <div>
          <Link href='/'>
            <div className="flex items-center justify-center sm:justify-start gap-[15px]">
              <Image src="/logo-icon.svg" width={34} height={34} alt="logo" />
              <h2 className="text-main text-[35px]">Interno</h2>
            </div>
          </Link>
          <p className="text-[#4D5053] text-[18px] my-[20px] text-center sm:text-left">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <ul className="flex items-center justify-center sm:justify-start gap-[25px]">
            <li className="text-[#4D5053] text-xl cursor-pointer">
              <FaFacebookF />
            </li>
            <li className="text-[#4D5053] text-xl cursor-pointer">
              <FaXTwitter />
            </li>
            <li className="text-[#4D5053] text-xl cursor-pointer">
              <FaLinkedinIn />
            </li>
            <li className="text-[#4D5053] text-xl cursor-pointer">
              <FaInstagram />
            </li>
          </ul>
        </div>
        {footerLinks.map((item) => (
          <div id={item.id} className="text-center sm:text-left">
            <h2 className="text-main text-[22px] font-semibold mb-[10px]">
              {item.section}
            </h2>
            <ul className="flex flex-col gap-[5px]">
              {item.content.map((e) => (
                <li className="text-[18px] text-[#4D5053]">
                  {e.href ? (
                    <Link href={e.href}>{e.title}</Link>
                  ) : (
                    <>{e.title}</>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <span className="flex items-center justify-center gap-[5px]">
        <p>Developed By Abdelaziz Bourouaiah</p>
        <FaHeart className="text-[#4D5053]" />
      </span>
    </footer>
  );
}

export default Footer;
