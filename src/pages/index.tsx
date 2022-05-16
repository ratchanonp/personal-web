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
        <meta name="og:image" content="/og_image.png" />
        <meta name="twitter:site" content="@RatchanonQ" />
        <meta name="twitter:creator" content="@RatchanonQ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="PSGC API Banner" />
        <meta name="twitter:title" content="Ratchanon Panmas" />
        <meta
          name="twitter:description"
          content="Hello, I am Ratchanon Panmas. I am a computer science student at Chulalongkorn University."
        />
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
