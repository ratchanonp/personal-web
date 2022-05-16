import React from "react";
import {
  AtSymbolIcon,
  BriefcaseIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div className="fixed top-0 right-5 h-screen flex items-center">
        <div className="flex flex-col space-y-5 md:space-y-10">
          <Link href="#">
            <a>
              <HomeIcon className="w-5 h-5 md:w-10 md:h-10 hover:scale-125 transition ease-in-out" />
            </a>
          </Link>
          <Link href="#about">
            <a>
              <UserIcon className="w-5 h-5 md:w-10 md:h-10 text-red-500 hover:scale-125 transition ease-in-out" />
            </a>
          </Link>
          <Link href="#work">
            <a>
              <BriefcaseIcon className="w-5 h-5 md:w-10 md:h-10 text-blue-500 hover:scale-125 transition ease-in-out" />
            </a>
          </Link>
          <Link href="#contact">
            <a>
              <AtSymbolIcon className="w-5 h-5 md:w-10 md:h-10 text-green-500 hover:scale-125 transition ease-in-out" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
