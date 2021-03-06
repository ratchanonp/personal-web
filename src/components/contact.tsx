import Link from "next/link";
import React from "react";
import Container from "./partial/Container";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <section id="contact" className="h-screen">
        <Container>
          <h2 className="text-3xl md:text-7xl text-white bg-green-500 w-fit p-3 font-bold">
            <Link href="#contact">
              <a className="underline decoration-white">#</a>
            </Link>{" "}
            Contact
          </h2>
          <p className="tracking-widest text-gray-500 md:text-xl">
            keep in touch with me
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-4">
            <Link href="https://www.linkedin.com/in/rpanmas/" passHref>
              <a className="flex items-center space-x-5 text-3xl">
                <svg
                  className="w-10 h-10 md:w-20 md:h-20  text-blue-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
                <p>/rpanmas</p>
              </a>
            </Link>
            <Link href="https://twitter.com/RatchanonQ" passHref>
              <a className="flex items-center space-x-5 text-3xl">
                <svg
                  className="w-10 h-10 md:w-20 md:h-20  text-blue-300 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <p>/RatchanonQ</p>
              </a>
            </Link>
            <Link href="https://github.com/ratchanonp">
              <a className="flex items-center space-x-5  text-3xl">
                <svg
                  className="w-10 h-10 md:w-20 md:h-20  fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{" "}
                </svg>
                <p>/ratchanonp</p>
              </a>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
