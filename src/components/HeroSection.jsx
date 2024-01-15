"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center sm:text-left text-center justify-self-start">
          <h1 className="text-white lg:text-6xl text-4xl font-extrabold mb-4 lg:leading-tight">
            {/* leading-normal itu spasi antar baris */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Hello, I'm {""}
            </span>
            <br />

            {/* animasi  */}
            <TypeAnimation
              sequence={[
                "Umy",
                1000,
                "Web Developer",
                1500,
                "Mobile Developer",
                1500,
                "UI/UX Designer",
                1500,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base lg:text-lg text-md mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            expedita?
          </p>
          <div className="">
            <button className="w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-full p-2  lg:p-2 lg:px-4 px-4 mr-4 mb-4 hover:bg-slate-200">
              Hire Me
            </button>
            <button className="w-full sm:w-fit bg-gradient-to-br from-blue-600 via-purple-500 to-pink-600 rounded-full text-white p-1 px-1 lg:px-1 hover:bg-slate-800">
              <span className="block bg-[#121212] rounded-full lg:px-2 py-1 ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]  relative">
            <Image
              src={"/images/hero-image.png"}
              alt="..."
              width={500}
              height={500}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full lg:h-64 lg:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
