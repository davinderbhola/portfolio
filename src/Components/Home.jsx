import React from "react";
import Nav from "./Nav";
import Structure from "./Structure";

function Home(props) {
  return (
    <div>
      <Nav />
      <section id="section-res" className="pt-22 h-screen">
        <Structure />
      </section>
    </div>
  );
}

export default Home;
