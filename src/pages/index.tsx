import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Greeting from "../components/greeting";
import Navbar from "../components/navbar";
import Work from "../components/work";

type Props = {};

const NextPage: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Ratchanon Panmas</title>
      </Head>
      <main className="relative">
        <Greeting />
        <About />
        <Work />
        <Contact />
        <Navbar />
      </main>
    </>
  );
};

export default NextPage;
