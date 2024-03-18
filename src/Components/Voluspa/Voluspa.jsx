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
          src="https://voluspa.noncreativeblog.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvoluspa.0c3d8755.png&w=2048&q=75"
          alt="Project Cover"
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-300 mb-4 text-center">
        Völuspá
      </h1>
      <div className="flex justify-center items-center mb-4">
        <FaReact
          className="tech-icon text-4xl text-blue-500 mr-4"
          title="React"
        />
        <FaHtml5
          className="tech-icon text-4xl text-red-500 mr-4"
          title="HTML5"
        />
        <FaCss3Alt
          className="tech-icon text-4xl text-blue-500 mr-4"
          title="CSS3"
        />
        <IoLogoVercel className="flex justify-center text-slate-300 bg-black p-2 ml-2 rounded-full text-4xl items-center " />
      </div>
      <p className="text-gray-300 text-lg mb-4">
        It is an inspiring translation of the epic poem Völuspá. This
        translation, by Aegir Sverison and Yana Chankova, combines mastery and
        devotion to the original text. The book tells of the prophecy of a
        mysterious fortune-teller , who guides the reader through ancient times
        and awakens in him the excitement and curiosity about the hidden stories
        of the world. The content is enriched with symbolism and mysticism,
        which make Völuspá an incomparable literary work. It is important to
        emphasize that this translation is subject to copyright, ensuring
        respect for the intellectual property and work of the translators.
      </p>
      <div className="ttext-gray-300  mb-4">
        <h2 className="text-gray-300  text-2xl font-bold mb-2">
          Technologies Used:
        </h2>
        <ul className="text-gray-300  list-disc pl-6">
          <li>Frontend - Next.js</li>
          <li>Backend - Backendless Solution</li>
          <li>Styling - Pure CSS/SCSS</li>
          <li>CMS - Headless CMS</li>
        </ul>
      </div>
      <div className="text-gray-300  mb-4">
        <h2 className="text-2xl font-bold mb-2">Project Highlights:</h2>
        <ul className="list-disc pl-6">
          <li>
            Developed an informative website dedicated to the Völuspá (Codex
            Regius) with a user-friendly interface.
          </li>
          <li>
            Implemented a feature allowing users to directly read the Völuspá on
            the website.
          </li>
          <li>
            Integrated a built-in dictionary to assist readers in understanding
            complex words and expressions.
          </li>
          <li>
            Please note that source code cannot be provided due to copyright
            reasons
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mb-24">
        <a
          href="https://voluspa.noncreativeblog.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="icon text-3xl text-gray-600 hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;
