"use client";
import Image from "next/image";
import Link from "next/link";
import LogoMain from "../../public/images/logo-main.png";
import Regave from "../../public/images/icon/regave.png";
import { useState } from "react";

export default function Navbar() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <div className="bg-[#1A1A1A] rounded-lg col-span-full xl:col-span-1 mt-4 md:mt-6 -mb-2 sm:mb-0">
      <div className="navheight flex xl:flex-col justify-between px-3 py-3 xl:py-10 xl:min-h-svh">
        <div className="flex justify-center items-center">
          <Link
            className="flex xl:flex-col items-center gap-2 md:gap-3 xl:gap-0"
            href="/">
            <Image
              className="max-w-fit md:mb-3 w-10 sm:w-13 xl:w-full"
              src={LogoMain}
              alt="Logo"
            />
            <span className="xxxl:text-xl">RESTURA</span>
          </Link>
        </div>
        <div className="relative order-first xl:order-none mt-1 xl:mt-0">
          <div id="myNav" className={`overlay ${
                isNavbarExpanded ? "show" : ""
              }`}>
            <Link onClick={toggleNavbar} href="" className="closebtn">
              &times;
            </Link>
            <div className="overlay-content">
              <Link className="display-1" href="/">
                Home
              </Link>
              <Link className="display-1" href="/about">
                About
              </Link>
              <Link className="display-1" href="/menu">
                Menu
              </Link>
              <Link className="display-1" href="/reservation">
                Reservation
              </Link>
              <Link className="display-1" href="/blog">
                Blog
              </Link>
              <Link className="display-1" href="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div onClick={toggleNavbar} className="cursor-pointer border border-primary px-2 md:px-3 py-1 md:py-1.5 rounded-3xl">
              <span className="text-2xl lg:text-3xl text-primary">&#9776;</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            className="flex items-center justify-center"
            href="reservation.html">
            <Image className="w-10 sm:w-13 xl:w-full" src={Regave} alt="Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
