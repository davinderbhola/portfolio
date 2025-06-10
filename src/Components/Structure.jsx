import React from "react";
import myimage from "../images/bitmoji.jpg";

function Structure(props) {
  return (
    <div className="w-full h-[40%] py-6 px-4 mb-1">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <div
          className="w-[30vw] h-[30vw] sm:w-[20vw] sm:h-[20vw] md:w-[10vw] md:h-[10vw] rounded-full"
          style={{
            backgroundImage: `url(${myimage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          Hi, I'm Davinder 🤘
        </h1>
      </div>

      <div className="w-full mt-6 flex items-center justify-center px-4">
        <h1
          id="texth1"
          className="text-center font-semibold leading-snug text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl"
        >
          Crafting modern websites, beautiful interfaces, and seamless user
          experiences
        </h1>
      </div>

      <div className="w-full h-[12vw] mt-6 flex flex-col items-center justify-start px-4">
        <h1 className="text-base sm:text-lg md:text-xl text-zinc-300 text-center">
          A passionate{" "}
          <span className="font-semibold">Front-End Developer</span> based in
          <span className="font-semibold"> India</span>.
        </h1>
        <h2 className="text-sm sm:text-lg md:text-xl text-zinc-300 mt-2 text-center max-w-xl">
          I specialize in React.js, Responsive Web Design, and building
          intuitive UIs.
        </h2>
        <button
          id="connectWithMe"
          className="mt-6 px-6 py-3 bg-white text-xs sm:text-sm text-black uppercase rounded-full cursor-pointer"
        >
          <a
            href="https://www.linkedin.com/in/davindersinghbhola"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me
          </a>
        </button>
      </div>
    </div>
  );
}

export default Structure;
