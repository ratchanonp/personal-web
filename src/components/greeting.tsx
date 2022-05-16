import Link from "next/link";
import React from "react";
import Container from "./partial/Container";

type Props = {};

const Greeting = (props: Props) => {
  return (
    <>
      <section
        id=""
        className="h-screen flex flex-col justify-center text-left"
      >
        <Container>
          <h1 className="text-5xl sm:text-8xl md:text-9xl font-bold uppercase">
            <span className="text-red-500">Hello</span> <br />
            <span className="text-blue-500">I am</span> <br />
            <span className="text-green-500">Ratchanon</span>
          </h1>
          <div className="flex space-x-5 md:space-x-20 text-md md:text-2xl mt-20 w-full">
            <Link href="#about">
              <a className="underline text-left decoration-dashed">about me</a>
            </Link>
            <Link href="#work">
              <a className="underline text-left decoration-dashed">my work</a>
            </Link>
            <Link href="#contact">
              <a className="underline text-left decoration-dashed">contact</a>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Greeting;
