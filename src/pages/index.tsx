import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Greeting from "../components/greeting";
import Work from "../components/work";

type Props = {};

const NextPage: NextPage = (props: Props) => {
  return (
    <>
      <main>
        <Greeting />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
};

export default NextPage;
