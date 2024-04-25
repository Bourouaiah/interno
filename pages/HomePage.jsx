"use client";

import { useState } from "react";

import Image from "next/image";
import {
  homeWorkData,
  homeTestimonialData,
  homeBrandData,
  homeProjectsData,
  homeCounterData,
  homeNewsData,
} from "../constants";

function HomePage() {
  const [divStates, setDivStates] = useState(
    Array(homeNewsData.length).fill(false)
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
      <section className="mx-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] xl:mx-auto home-hero-bg px-[20px] py-[100px] mt-[25px] mb-[50px]">
        <h1 className="text-3xl	md:text-4xl lg:text-[65px] lg:leading-snug text-main">
          Let Your Home
          <br />
          Be Unique
        </h1>
        <p className="text-[#4D5053] text-base md:text-md lg:text-lg max-w-[340px] mt-[15px] mb-[20px]">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <button className="bg-main text-white flex items-center justify-center gap-[10px] rounded-2xl p-[10px]">
          <p>Get Started</p>
          <Image src="/vector-icon.svg" width={15} height={15} alt="vector" />
        </button>
      </section>
      <section className="px-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] mx-auto my-[100px] grid grid-cols-1 sm:grid-cols-3 gap-[30px] sm:gap-[15px]">
        {homeWorkData.map((item, index) => (
          <div key={index} className="text-center">
            <h1 className="text-main text-3xl font-medium">{item.title}</h1>
            <p className="text-[#4D5053] text-xl my-[20px]">{item.desc}</p>
            <button className="flex items-center justify-center gap-[10px] w-full">
              <p>Read More</p>
              <Image
                src="/vector-icon.svg"
                width={15}
                height={15}
                alt="vector"
              />
            </button>
          </div>
        ))}
      </section>
      <section className="px-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] mx-auto my-[50px] flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:justify-start gap-[70px]">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-main text-center lg:text-left lg:leading-snug">
            We Create The Art
            <br />
            Of Stylish Living
            <br />
            Stylishly
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#4D5053] my-[20px] text-center lg:text-left">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-[15px]">
            <Image
              src="/call-icon.svg"
              width={60}
              height={60}
              alt="call-icon"
            />
            <div>
              <p className="font-bold text-[#4D5053]">0553329164</p>
              <p className="text-[#4D5053]">Call Us Anytime</p>
            </div>
          </div>
          <button className="bg-main text-white flex items-center justify-center gap-[10px] rounded-2xl p-[10px] mt-[20px] w-full lg:w-auto">
            <p>Get Free Estimate</p>
            <Image src="/vector-icon.svg" width={15} height={15} alt="vector" />
          </button>
        </div>
        <div className="sm:w-[400px] w-auto lg:min-w-[40%]">
          <Image
            className="rounded-tr-[200px] rounded-bl-[100px]"
            src="/home/home-page-one.png"
            width={732}
            height={800}
            alt="home"
          />
        </div>
      </section>
      <section className="mx-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] xl:mx-auto my-[100px] bg-[#F4F0EC] p-[40px] rounded-[50px]">
        <h1 className="text-main text-3xl md:text-4xl lg:text-[50px] lg:leading-snug text-center">
          What People Think
          <br />
          About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[25px]">
          {homeTestimonialData.map((item, index) => (
            <div key={index} className="bg-white p-[20px] rounded-[30px]">
              <div className="flex items-center gap-[15px]">
                <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full border-2 border-[#cda274] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    width={80}
                    height={80}
                    alt="person"
                  />
                </div>
                <div>
                  <h3 className="text-main font-semibold">{item.title}</h3>
                  <p className="text-[#4D5053]">{item.subTitle}</p>
                </div>
              </div>
              <p className="mt-[15px] mb-[30px] text-[#4D5053]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] mx-auto my-[100px] grid grid-cols-1 gap-[50px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-0 items-center">
        {homeBrandData.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image src={item.imageUrl} width={150} height={150} alt="brand" />
          </div>
        ))}
      </section>
      <section className="px-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] mx-auto">
        <h1 className="text-main text-3xl md:text-4xl lg:text-[50px] lg:leading-snug text-center">
          Follow Our Projects
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-[#4D5053] my-[20px] text-center">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
        <div className="my-[100px] grid grid-cols-1 sm:grid-cols-2 gap-[50px]">
          {homeProjectsData.map((item, index) => (
            <div>
              <div className="h-[500px] sm:h-[335px] lg:h-[500px] overflow-hidden">
                <Image
                  className={`${
                    index % 2 === 0 ? "rounded-tr-[50px]" : "rounded-tl-[50px]"
                  } overflow-hidden`}
                  src={item.imageUrl}
                  width={600}
                  height={600}
                  alt="project-image"
                />
              </div>
              <div className="flex items-center justify-between pt-[20px]">
                <div>
                  <h2 className="text-2xl	text-main">{item.title}</h2>
                  <p className="text-[#4D5053]">Decor / {item.decorModel}</p>
                </div>
                <div>
                  <Image
                    src="/arrow-icon.svg"
                    width={50}
                    height={50}
                    alt="arrow-icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-[100px] py-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-0 bg-[#F4F0EC]">
        {homeCounterData.map((item, index) => (
          <div
            key={index}
            className={`text-center ${
              index > 0 ? "sm:border-l sm:border-l-[#CDA274]" : ""
            }`}
          >
            <h1 className="text-[#CDA274] text-7xl">{item.number}</h1>
            <h4 className="text-[#4D5053] text-lg mt-[10px]">{item.title}</h4>
          </div>
        ))}
      </section>
      <section className="my-[100px] px-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] mx-auto">
        <h1 className="text-main text-3xl md:text-4xl lg:text-[50px] lg:leading-snug text-center">
          Articles & News
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-[#4D5053] my-[20px] text-main text-center">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px]">
          {homeNewsData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="p-[20px] border rounded-[50px] hover:bg-[#F4F0EC] duration-200"
            >
              <div className="relative">
                <Image
                  className="rounded-t-[50px]"
                  src={item.imageUrl}
                  width={700}
                  height={900}
                  alt="article-photo"
                />
                <button className="absolute bottom-[10px] left-[10px] text-[#4D5053] bg-white rounded-t-[10px] rounded-br-[10px] px-[10px] py-[5px]">
                  {item.buttonText}
                </button>
              </div>
              <div>
                <h1 className="text-2xl mt-[15px] text-main">{item.title}</h1>
                <div className="flex items-center justify-between">
                  <p className="my-[30px] text-[#4D5053]">{item.date}</p>
                  <Image
                    src={`${!divStates[index] ? '/arrow-icon.svg' : '/arrow-white-icon.svg'}`}
                    width={30}
                    height={30}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-[100px] mx-[10px] sm:px-[20px] md:px-[30px] xl:w-[1120px] xl:mx-auto bg-main p-[50px] rounded-[25px]"> 
        <h1 className="text-white text-3xl md:text-4xl lg:text-[50px] lg:leading-snug text-center">Wanna join the interno?</h1>
        <p className="text-base md:text-lg lg:text-xl text-white my-[20px] text-center">It is a long established fact  will be distracted.</p>
        <button className="bg-[#CDA274] flex items-center justify-center gap-[10px] rounded-2xl p-[10px] m-auto">
          <p className="text-base	text-white lg:text-lg">Contact With Us</p>
          <Image src='/black-vector.svg' width={15} height={15} alt="vector" />
        </button>
      </section>
    </main>
  );
}

export default HomePage;
