import React from "react";
import me from "./me.png";
import { PiGithubLogoFill } from "react-icons/pi";
import Portfolio3D from "../Canvas/Cube";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 ">
      <svg
        className="absolute inset-0 -z-10 h-64 w-64 stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,red,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="200"
            height="200"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth="0"
          ></path>
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        ></rect>
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)]  -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div className="aspect-[1108/632] w-[69.25rem]  bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-40"></div>
      </div>

      <div className=" flex h-screen items-center justify-center z-64 ">
        <section className="lg:mt-4  mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" lg:flex flex-col lg:flex-row">
            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 ">
              <Portfolio3D />
            </div>
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block  uppercase  text-slate-50">Georgi</span>
                <span className="block  xl:inline  from-cyan-500 via-orange-400 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h1>
              <p className="mt-3 w-full text-base text-left text-slate-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                In short about me - a motivated and responsible person with a
                passion for web application development. I am a completely
                self-educated programmer and I have experience with the
                programming languages , Javascript (as well as the related tools
                NextJS and React) , Python. In my free time I write articles on
                my personal blog about Scandinavian mythology
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    <PiGithubLogoFill className="mr-2" />
                    Github
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 mb-36">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
