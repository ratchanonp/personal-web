import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./partial/Container";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <section id="about" className="min-h-screen">
        <Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-7xl  text-white bg-red-500 w-fit p-3 font-bold">
                <Link href="#about">
                  <a className="underline decoration-white">#</a>
                </Link>{" "}
                About
              </h2>
              <p className="tracking-widest text-gray-500 md:text-xl">
                autobiograph
              </p>
              <div className="mt-10 space-y-10 md:space-y-20">
                <p className="text-3xl md:text-5xl">Hi there 👋 </p>
                <p className="lg:w-4/5 md:text-lg">
                  👋 Hi. I&apos;m Ratchanon Panmas, a first-year computer
                  science student at Chulalongkorn University. I&apos;m learning
                  python, front-end web developer like nextjs and graphql. I
                  have experience with the{" "}
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
            </div>
            <div className="w-1/3 min-h-56 relative">
              <Image
                src="/me.png"
                alt="Me"
                layout="responsive"
                width={434}
                height={575}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
