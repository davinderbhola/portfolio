import React from "react";
import project2 from "../images/project2.jpg";
import Card from "./Card";

function Project(props) {
  return (
    <section
      id="section-res"
      className="pt-10 pb-10 px-4 sm:px-6 lg:px-8 w-full h-full "
    >
      <div className="w-full mt-5 flex flex-col justify-center items-center ">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 text-center">
          My Projects
        </h1>

        {/* Project Cards Container */}
        <div
          id="project"
          className="w-[full] p-2 mt-12 flex items-center justify-center gap-6 "
        >
          <Card />
          {/* Add more <Card /> components as needed */}
        </div>

        {/* Footer Text */}
        <h1 className="mt-8 text-center text-lg sm:text-sm text-zinc-300 px-4">
          To check more projects click on my{" "}
          <a
            href="https://github.com/davinderbhola"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-400 underline"
          >
            GitHub <i className="ri-github-fill ml-1 mr-1"></i>
          </a>
          account.
        </h1>
      </div>
    </section>
  );
}

export default Project;
