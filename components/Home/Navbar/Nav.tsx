"use client";

import ButtonRightArrow from "@/components/Button/ButtonRightArrow";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      } w-full transition-all duration-300 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto ">
        {/* LOGO */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          <span className="text-3xl md:text-4xl text-blue-400">Inspira</span>
          Site
        </h1>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex items-center space-x-4">
          <ButtonRightArrow text="Hubungi Kami" classname="lg:block"/>

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
