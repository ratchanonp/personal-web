import React from "react";
import Container from "./partial/Container";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <section id="about" className="h-screen">
        <Container>
          <h2 className="text-7xl text-white bg-red-500 w-fit p-3 font-bold">
            # About
          </h2>
          <p className="tracking-widest text-gray-500 text-xl">autobiograph</p>
          <div className="mt-10 space-y-20">
            <p className="text-5xl">Hi there 👋 </p>
            <p className="mt-10 w-2/3 text-lg">
              👋 Hi. I&apos;m Ratchanon Panmas, a first-year computer science
              student at Chulalongkorn University. I&apos;m learning python,
              front-end web developer like nextjs and graphql. I have experience
              with the{" "}
              <span className="underline decoration-wavy decoration-red-500">
                Olympics in informatics
              </span>
              , and I enjoy about competitive programing.
            </p>
            <ul className="space-y-5">
              <li>👋 Ratchanon Panmas</li>
              <li>🎓 Computer Science Student</li>
              <li>🏫 Chulalongkorn University</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
