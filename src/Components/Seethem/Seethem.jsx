import React from "react";
import { FcLinux } from "react-icons/fc";
import { FaGithub, FaExternalLinkAlt, FaPython } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { MdNetworkWifi3Bar } from "react-icons/md";

import img from "./seethem.jpeg";

const ProjectPage = () => {
  return (
    <div className="markdown-body mx-auto max-w-3xl py-8 px-4 lg:px-0 ">
      <div className="flex items-center justify-center mb-8">
        <img
          src={img}
          alt="Project Cover"
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-300 mb-4 text-center">
        SEETHEM
      </h1>
      <div className="flex justify-center items-center mb-4">
        <FcLinux
          className="tech-icon text-4xl text-blue-500 mr-4"
          title="React"
        />
        <FaPython
          className="tech-icon text-4xl text-blue-500 mr-4"
          title="React"
        />
        <SiGnubash
          className="tech-icon text-4xl text-blue-500 mr-4"
          title="React"
        />
        <MdNetworkWifi3Bar
          className="tech-icon text-4xl text-blue-500 mr-4"
          title="React"
        />
      </div>
      <p className="text-gray-300 text-lg mb-4">
        A small tool / script to allow you to access your wifi network. It works
        by spoofing your MAC address and connecting you to the router. It aims
        to show the connected devices on your private network.
      </p>
      <div className="ttext-gray-300  mb-4">
        <h2 className="text-gray-300  text-2xl font-bold mb-2">
          Technologies Used:
        </h2>
        <ul className="text-gray-300  list-disc pl-6">
          <li>Linux</li>
          <li>Python</li>
          <li>Computer Networks</li>
          <li>Bash</li>
        </ul>
      </div>
      <div className="text-gray-300  mb-4">
        <h2 className="text-2xl font-bold mb-2">Project Highlights:</h2>
        <ul className="list-disc pl-6">
          <li>
            Created a small tool/script to facilitate access to WiFi networks by
            spoofing MAC addresses and connecting to routers.
          </li>
          <li>
            Aims to display connected devices on private networks, enhancing
            network management and security.
          </li>
          <li>
            Indicates a focus on network administration and security concerns.
          </li>
          <li>
            Provides a practical solution for managing and monitoring devices on
            a private network.
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mb-24">
        <a
          href="https://github.com/GLTdotNS/seethem"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaGithub className="icon text-3xl text-gray-600 hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;
