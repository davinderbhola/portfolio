import React from "react";
import project from "../utils/project.json";

function Card(props) {
  //Note: Yah per image json data se import nhi ho pa rhi thi iss liya mena chat gpt ki help se images name ke variable ke ander us folder ka pura data stor kr va diya
  const images = import.meta.glob("../images/*", {
    eager: true,
    import: "default",
  });

  return (
    <>
      {project.map((items, idx) => {
        const imagePath = `../images/${items.image}`;
        const image = images[imagePath];

        return (
          <div
            key={idx}
            className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[30%] mx-auto mb-8 "
          >
            {/* Image Section */}
            <div
              className="w-full h-40 sm:h-52 md:h-60 rounded-t-md"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Text + Buttons */}
            <div className="w-full py-4 px-3 border border-t-0 border-white rounded-b-md bg-black">
              <h1 className="text-lg sm:text-xl font-semibold">
                {items.pname}
              </h1>

              <p className="text-sm sm:text-base leading-5 mt-2 text-zinc-300">
                {items.descrip}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={items.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 bg-white text-xs sm:text-sm text-black font-semibold rounded-lg"
                >
                  Visit
                </a>

                <a
                  href={items.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 bg-white text-xs sm:text-sm text-black font-semibold rounded-lg"
                >
                  Get code
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
