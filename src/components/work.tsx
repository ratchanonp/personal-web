import React from "react";
import Container from "./partial/Container";

type Props = {};

const Work = (props: Props) => {
  return (
    <>
      <section id="work" className="h-screen">
        <Container>
          <h2 className="text-7xl text-white bg-blue-500 w-fit p-3 font-bold">
            # Work
          </h2>
          <p className="tracking-widest text-gray-500 text-xl">my past work</p>
          <div className="grid md:grid-cols-2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Work;
