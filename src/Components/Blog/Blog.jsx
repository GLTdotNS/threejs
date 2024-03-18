import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";

const ProjectPage = () => {
  return (
    <div className="markdown-body mx-auto max-w-3xl py-8 px-4 lg:px-0 ">
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://www.noncreativeblog.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.ca584a8e.png&w=1920&q=75"
          alt="Project Cover"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-300 mb-4 text-center">
        NONCREATIVEBLOG
      </h1>
      <div className="flex justify-center items-center mb-12">
        <a
          href="https://github.com/GLTdotNS/MyBlog"
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
          href="https://www.noncreativeblog.net"
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
        As the primary contributor and developer for this project, I seamlessly
        merged my skills in content creation and web development.
      </p>
      <div className="text-gray-300  mb-4">
        <h2 className="text-gray-300  text-2xl font-bold mb-2">
          Technologies Used:
        </h2>
        <div className="flex justify-start items-center mb-4">
          <FaReact
            className="tech-icon text-4xl text-sky-500 mr-4"
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
          {/* Add more icons for other technologies */}
        </div>
        <ul className="text-gray-300  list-disc pl-6">
          <li>Frontend - Next.js</li>
          <li>Backend - Backendless Solution</li>
          <li>Styling - Pure CSS/SCSS</li>
          <li>CMS - Headless CMS</li>
        </ul>
      </div>
      <div className="text-gray-300  mb-4">
        <h2 className="text-2xl font-bold mb-4">Project Highlights:</h2>
        <ul className="list-disc pl-6 mb-24">
          <li>
            Developed a personal blog using Next.js 13, showcasing proficiency
            in modern web development technologies.
          </li>
          <li>
            Implemented custom styling with CSS/SCSS for a unique and tailored
            visual experience.
          </li>
          <li>
            Ensured complete freedom for customization, providing a platform to
            express personal ideas and information.
          </li>
          <li>
            Prioritized user experience, allowing visitors to explore content
            within their own web environment, avoiding reliance on off-the-shelf
            platforms.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
