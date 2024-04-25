"use client";
import { useState } from "react";
import Image from "next/image";

import { RiDoubleQuotesL } from "react-icons/ri";
import { aboutDetailsData, aboutPersonsData } from "@/constants";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

function AboutPage() {
  const [divStates, setDivStates] = useState(
    Array(aboutPersonsData.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = true;
    setDivStates(newDivStates);
  };

  const handleMouseLeave = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = false;
    setDivStates(newDivStates);
  };

  return (
    <main>
      <section className="w-full h-[400px] about-hero-bg overflow-hidden" />
      <section className="mx-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] lg:mx-auto my-[100px] text-center border-[15px] border-[#F4F0EC] rounded-[50px] px-[30px] py-[60px]">
        <RiDoubleQuotesL className="text-3xl w-full text-main" />
        <p className="text-3xl text-main font-semibold italic my-[20px]">
          I like an interior that defies labeling. I don't really want someone
          to walk into a room and know that I did it
        </p>
        <p className="text-[#4D5053] text-lg">-BUNNY WILLIAMS</p>
      </section>
      <section className="mx-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] lg:mx-auto my-[100px]">
        {aboutDetailsData.map((item, i) => (
          <div
            className={`flex flex-wrap sm:flex-nowrap items-center justify-between gap-[50px] ${
              i > 0 ? "mt-[100px]" : ""
            } ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
          >
            <div className={`${i % 2 !== 0 ? "sm:flex-1" : "sm:w-[50%]"}`}>
              <h1 className="text-4xl text-main">{item.title}</h1>
              <p className="text-md text-[#4D5053] my-[30px]">
                {item.description}
              </p>
              <button className="flex items-center gap-[10px] text-white bg-main p-[10px] rounded-2xl">
                <p>{item.buttonText}</p>
                <Image
                  src="/vector-icon.svg"
                  width={15}
                  height={15}
                  alt="vector"
                />
              </button>
            </div>
            <div className={`${i % 2 === 0 ? "sm:flex-1" : "sm:w-[50%]"}`}>
              <Image
                className="rounded-[50px] w-full"
                src={item.imageUrl}
                width={400}
                height={400}
                alt={item.imageUrl}
              />
            </div>
          </div>
        ))}
      </section>
      <section className="bg-[#F4F0EC] py-[100px]">
        <h1 className="text-main text-3xl md:text-[50px] lg:leading-snug text-center">
          What does people think
          <br />
          About Us
        </h1>
        <div className="mt-[50px] mx-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] lg:mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[25px]">
          {aboutPersonsData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative overflow-hidden rounded-[25px]"
            >
              <Image
                src={item.imageUrl}
                width={600}
                height={450}
                alt="person"
              />
              <div
                className={`absolute w-full h-full ${
                  divStates[index] ? "top-0" : "top-[2000px]"
                } left-0 bg-[#ffffffd6] flex flex-col items-center justify-center duration-500`}
              >
                <h2 className="text-main text-2xl text-center font-medium">
                  {item.name}
                </h2>
                <p className="text-[#4D5053] text-center">{item.job}</p>
                <ul className="flex items-center justify-center gap-[25px] text-main my-[30px]">
                  <li className="cursor-pointer">
                    <FaFacebookF />
                  </li>
                  <li className="cursor-pointer">
                    <FaXTwitter />
                  </li>
                  <li className="cursor-pointer">
                    <FaLinkedinIn />
                  </li>
                  <li className="cursor-pointer">
                    <FaInstagram />
                  </li>
                </ul>
                <p className="text-[#4D5053] text-center">{item.number}</p>
                <p className="text-[#4D5053] text-center">{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-[100px] mx-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] lg:mx-auto">
        <h1 className="text-main text-3xl md:text-4xl lg:text-[50px] lg:leading-snug text-center">
          Creative project? Let's have
          <br />a productive talk.
        </h1>
        <form className="gap-[25px]" action="">
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <input
                className="outline-none border-b border-main placeholder:text-[#4D5053]"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col">
              <input
                className="outline-none border-b border-main placeholder:text-[#4D5053]"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
              <textarea
                className="outline-none border-b border-main placeholder:text-[#4D5053]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Hello Iam Intrested in.."
              ></textarea>
              <button></button>
            </div>
        </form>
      </section>
    </main>
  );
}

export default AboutPage;
