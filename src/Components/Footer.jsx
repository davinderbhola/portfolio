import React from "react";

function Footer(props) {
  return (
    <div className="border-t-1 border-t-white px-4 sm:px-10 md:px-14 py-5">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between">
        <p>
          <span className="font-semibold text-zinc-400 mr-1">Mobile No:</span>{" "}
          8307977682
        </p>
        <p>
          <span className="font-semibold text-zinc-400 mr-1">Gmail:</span>{" "}
          davinderbhola9@gmail.com
        </p>
        <p>
          <span className="font-semibold text-zinc-400 mr-1">Address:</span>{" "}
          Yamuna Nagar, Haryana, India
        </p>
      </div>
    </div>
  );
}

export default Footer;
