import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 lg:px-0">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <img
          src="https://www.noncreativeblog.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.ca584a8e.png&w=1920&q=75"
          alt="Project Cover"
          className="w-full rounded-lg h-128 shadow-lg"
        />
      </div>
      <div className="project-info mt-8 text-center">
        <h2 className="text-3xl font-semibold text-slate-100 mb-4">
          NONCREATIVEBLOG
        </h2>
        <ul className="list-disc text-left text-lg text-slate-300 mb-4">
          <li className="flex items-center">
            Developed a personal blog using Next.js 13, showcasing proficiency
            in modern web development technologies. 🚀
          </li>
          <li className="flex items-center">
            Implemented custom styling with CSS/SCSS for a unique and tailored
            visual experience. 💅
          </li>
          <li className="flex items-center">
            Ensured complete freedom for customization, providing a platform to
            express personal ideas and information. 🎨
          </li>
          <li className="flex items-center">
            Prioritized user experience, allowing visitors to explore content
            within their own web environment, avoiding reliance on off-the-shelf
            platforms. 🌐
          </li>
        </ul>

        <div className="icons flex justify-center items-center mb-4">
          <FaGithub className="icon text-3xl text-gray-600 hover:text-gray-900 mr-4" />
          <FaExternalLinkAlt className="icon text-3xl text-gray-600 hover:text-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
