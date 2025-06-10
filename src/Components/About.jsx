import React from "react";
import image from "../images/davinder.jpg";
import { toast } from "react-toastify";

function About(props) {
  const notify = (msg) => {
    toast("Go to Contact section and DM me then, I will send my resume", {
      style: {
        color: "white", // ✅ Text color
        background: "black", // Optional: background color
      },
    });
  };
  return (
    <section id="section-res" className="pt-15 h-[80vh] ">
      <div id="about" className="w-full mt-2 lg:mt-10 md:mt-10">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center px-6 py-6 gap-8 ">
          <div
            id="image-box"
            className="relative w-full sm:w-[80%] md:w-[60%] lg:w-[35%] h-[60vw] sm:h-[35vw] md:h-[30vw] lg:h-[25vw] flex items-end justify-end"
          >
            <div
              id="imagebox1"
              className="w-[18vw] h-[20vw] bg-zinc-200 absolute top-[50px] left-[140px] z-0 rounded-lg"
            ></div>
            <div
              id="imagebox2"
              className="w-[18vw] h-[20vw] absolute top-[20px] left-[180px] z-10 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[60%] py-5 px-1 flex flex-col items-start justify-start text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 text-zinc-200 font-medium">
              I am a passionate and dedicated BCA student with a strong interest
              in web development.
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 text-zinc-200">
              My goal is to continuously learn and grow as a developer while
              contributing to innovative projects.
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 text-zinc-300">
              "Proficient in{" "}
              <span className="font-semibold">
                HTML, CSS, JavaScript, ReactJS
              </span>{" "}
              and learning advanced frameworks to enhance my expertise in
              front-end and back-end development."
            </h1>

            {/* Buttons */}
            <div className="w-full flex flex-wrap items-center justify-start gap-4 mt-4">
              <button
                onClick={() => notify()}
                id="connectWithMe"
                className="px-6 py-2 bg-white text-xs sm:text-sm text-black uppercase rounded-full cursor-pointer"
              >
                My Resume
              </button>
              <button
                id="connectWithMe"
                className="px-6 py-2 bg-white text-xs sm:text-sm text-black uppercase rounded-full cursor-pointer"
              >
                <a
                  href="https://drive.google.com/file/d/14kdTLDVtIR1Kq3XaYY98x1xpA8IcvOb1/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inter Certificate
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
