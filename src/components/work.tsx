import Link from "next/link";
import React from "react";
import Container from "./partial/Container";

type Props = {};

const Work = (props: Props) => {
  return (
    <>
      <section id="work" className="h-screen">
        <Container>
          <h2 className="text-3xl md:text-7xl  text-white bg-blue-500 w-fit p-3 font-bold">
            <Link href="#work">
              <a className="underline decoration-white">#</a>
            </Link>{" "}
            Work
          </h2>
          <p className="tracking-widest text-gray-500 md:text-xl">
            my past work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-sm md:text-xl">
            <div>
              <h3 className="text-xl md:text-2xl">2020</h3>
              <ul className="list-disc list-inside">
                <li className="underline decoration-dashed">
                  <Link href="https://www.benjama.ac.th/">
                    <a target="_blank">Benjamarachutit School Website</a>
                  </Link>
                </li>
                <li>Benjamarachutit Class Checker Website</li>
                <li>Benjamarachutit Student Support System</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl">2021</h3>
              <ul className="list-disc list-inside">
                <li>Sinpun Admission Website</li>
                <li>Sinpun Worktime Reg. Website</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl">2022</h3>
              <ul className="list-disc list-inside">
                <li className="underline decoration-dashed">
                  <Link href="https://gdsc.community.dev/u/mc67ye/">
                    <a target="_blank">Coreteam gdsc</a>
                  </Link>
                </li>
                <li>Chula Wellness Frontend Dev</li>
                <li>Salt Diary - Ministry of public health</li>
                <li className="underline decoration-dashed">
                  <Link href="https://github.com/BenjamaInnovation">
                    <a target="_blank">AECAS Community CTO</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Work;
