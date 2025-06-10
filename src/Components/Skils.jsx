import React from "react";
import imageData from "../utils/images.json";

function Skils(props) {
  return (
    <section id="skil-section" className="pt-10 h-screen ">
      <div
        id="skils-div"
        className="w-full mt-4 flex flex-col items-center justify-center py-14"
      >
        <h1 id="skils-h1" className=" text-5xl font-semibold">
          My Stack
        </h1>
        <div
          id="Skils-image"
          className="mt-15 p-2 w-[50%] h-[40vw] flex flex-wrap items-center justify-center gap-8"
        >
          {imageData.map((item, idx) => {
            return (
              <div
                key={idx}
                id="image-items"
                className={`w-[35vw] sm:w-[20vw] md:w-[14vw] lg:w-[10vw] xl:w-[9vw] h-auto p-4 bg-zinc-100 rounded-md overflow-hidden hover:shadow-xl ${item.bgClor}`}
              >
                <div
                  key={idx}
                  className="w-full aspect-square bg-transparent flex items-center justify-center"
                >
                  <img
                    id="image-data"
                    src={item.image}
                    alt={item.name}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
                <h1 className="text-black text-center text-sm sm:text-base mt-2">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skils;
