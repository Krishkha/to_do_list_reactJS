import React from "react";
import { FaTasks, FaGithub, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl max-w-xl w-full p-8 text-white">
        <div className="flex items-center space-x-4 mb-6">
          <FaTasks className="text-4xl text-yellow-300" />
          <h1 className="text-3xl font-bold tracking-wide">
            About Our Todo App
          </h1>
        </div>

        <p className="mb-4 text-lg leading-relaxed">
          This app helps you manage your daily tasks efficiently and
          beautifully. Built using{" "}
          <span className="text-blue-300 font-semibold">React JS</span> and
          styled with{" "}
          <span className="text-pink-300 font-semibold">Tailwind CSS</span>, it
          offers a clean, responsive, and modern UI.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          You can add, delete, mark complete, and manage your todos with ease.
          The interface is fully mobile-responsive, fast, and intuitive.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Designed with ❤️ by{" "}
          <span className="text-yellow-200 font-semibold">Krish Khatikar</span>.
        </p>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-200"
          >
            <FaGithub />
          </a>
          <FaReact className="animate-spin-slow" />
        </div>
      </div>
    </div>
  );
};

export default About;
