import React from "react";
import { Link } from "react-scroll";

function Nav(props) {
  return (
    <div id="nav-navbar" className=" w-full h-20 flex sm:flex-row  items-center justify-between px-1 py-4 sm:gap-0 fixed">
      <div
        id="nav-link"
        className=" w-[26%] sm:w-[26%] py-3 flex items-center justify-center gap-4"
      >
        <i className="ri-mail-line py-1 px-2 rounded-full border-1 border-white  sm:text-xl"></i>
        <a
          href="mailto:davinderbhola9@gmail.com"
          className="text-sm sm:text-base text-white break-all text-center sm:text-left"
        >
          davinderbhola9@gmail.com
        </a>
      </div>
      <div id="nav-list" className=" w-[40%] py-3 ">
        <ul className="flex items-center justify-center gap-[10%]">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skils"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Skils
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
