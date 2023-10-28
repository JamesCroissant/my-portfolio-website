"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="text-center flex flex-col mx-15 md:text-left md:flex-row justify-around items-center my-10 mx-10">
        <div className="home-left">
          <Image 
            src="/images/icon_profile.JPG" 
            alt="my profile icon"
            className="rounded-full"
            width={250}
            height={250}
          />
        </div>
        <div className="home-right mx-8 my-8">
          <h2 className="text-white text-5xl sm:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-300">
              Hello! I'm {" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Yu Hamada',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'Teacher',
                1000,
                'Web3 Researcher',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <button className="my-5 px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-300 hover:bg-slate-200 text-white">Hire Me</button>
        </div>
      </div>
      {/* <div class="chevron-down">
        <i class="fa-solid fa-chevron-down"></i>
        <i class="fa-solid fa-chevron-down"></i>
        <i class="fa-solid fa-chevron-down"></i>
      </div> */}
    </section>
    
  )
}

export default HeroSection;