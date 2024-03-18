import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const ProjectPage = () => {
  return (
    <div className="markdown-body mx-auto max-w-3xl py-8 px-4 lg:px-0 ">
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://i.ibb.co/xfMp0vC/cover.png"
          alt="Project Cover"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-300 mb-4 text-center">
        STRIVENEX
      </h1>
      <div className="flex justify-center items-center mb-12">
        <a
          href="https://github.com/GLTdotNS/strivenex"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 flex flex-col items-center text-slate-300 hover:text-orange-100 underline"
        >
          <span className="text-center">
            <FaGithub className="icon text-lg text-gray-300 " />
          </span>
          <span className="text-center">Source</span>
        </a>

        <a
          href="https://www.strivenex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 flex flex-col items-center text-slate-300 ml-2 hover:text-orange-100 underline"
        >
          <span className="text-center">
            <FaExternalLinkAlt className="icon text-lg text-gray-300 " />
          </span>
          <span className="text-center">Website</span>
        </a>
      </div>

      <p className="text-gray-300 text-lg mb-4">
        Strivene­x acts as my personal freelance­ platform, allowing me to
        establish connections with clie­nts. This repository stands as a central
        hub, facilitating the manage­ment of Strivenex's de­velopment process
        and e­nabling collaborative efforts on its feature­s and enhancements.
      </p>
      <div className="ttext-gray-300  mb-4">
        <h2 className="text-gray-300  text-2xl font-bold mb-2">
          Technologies Used:
        </h2>
        <div className="flex justify-start items-center mb-4">
          <FaReact
            className="tech-icon text-4xl text-sky-500 mr-4"
            title="React"
          />
          <SiTailwindcss className="flex justify-center text-sky-500 text-4xl items-center " />
          <IoLogoVercel className="flex justify-center text-slate-300 bg-black p-2 ml-2 rounded-full text-4xl items-center " />
        </div>
        <ul className="text-gray-300  list-disc pl-6">
          <li>Frontend - Next.js</li>
          <li>Backend - Backendless Solution</li>
          <li>Styling - Tailwind</li>
          <li>CMS - Headless CMS</li>
        </ul>
      </div>
      <div className="text-gray-300  mb-4">
        <h2 className="text-2xl font-bold mb-2">Project Highlights:</h2>
        <ul className="list-disc pl-6 mb-24">
          <li>
            Client-Me Connection: Seamless relationship with clients for project
            work.
          </li>
          <li>Project Management: Tools for managing projects efficiently .</li>
          <li>
            Customization: Tailor-made solutions for clients' specific needs.
          </li>
          <li>
            Quality: Commitment to delivering high-quality work that meets
            industry standards.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
