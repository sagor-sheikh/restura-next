"use client"
import Image from "next/image";
import Link from "next/link";
import MenuTtems from "../../public/images/menu-items.png";
import Reservation from "../../public/images/reservation.png";
import OurRestaurant from "../../public/images/our-restaurant.png";
import ShapeForRestora from "../../public/images/icon/shape-for-restora.png";
import { ArrowCircleUpRight } from "@phosphor-icons/react";

export default function Menu() {
  return (
    <div className=" col-span-12 md:col-span-4 navmenu scrollcontrol md:max-h-dvh md:overflow-y-auto sm:overflow-hidden order-last md:order-none">
      <div className="mb-6">
        <div className="relative">
          <Image className="w-full" src={MenuTtems} alt="Icon" />
          <div className="flex items-center gap-1 xxxl:gap-3 absolute right-0 bottom-0 xxl:bottom-0 xxxl:bottom-0  cursor-pointer bg-nb10  rounded-tl-3xl pl-3 py-3.5">
            <Link
              className=" text-md xl:text-lg text-secondary2"
              href="/menu">
              MENU
            </Link>
            <ArrowCircleUpRight size={30} className="ph-thin ph-arrow-circle-up-right text-secondary2 text-sm sm:text-lg lg:text-xl xxl:text-3xl" />
          </div>
          <Image
            className="absolute right-0 bottom-[48px] md:bottom-[52px] xxl:bottom-[56px] xxxl:bottom-[58px]"
            src={ShapeForRestora}
            alt="shape"
          />
          <Image
            className="absolute right-[66px] md:right-[72px] xl:right-[87px] xxl:right-[96px]  xxxl:right-[103px] bottom-0"
            src={ShapeForRestora}
            alt="shape"
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="relative">
          <Image className="w-full" src={Reservation} alt="Icon" />
          <div className="flex items-center gap-1 xxxl:gap-3 absolute right-0 bottom-0 xxl:bottom-0 xxxl:bottom-0  cursor-pointer bg-nb10  rounded-tl-3xl pl-3 py-3.5">
            <Link
              className=" text-md xl:text-lg text-secondary2"
              href="/reservation">
              RESERVATION
            </Link>
            <ArrowCircleUpRight size={30} className="ph-thin ph-arrow-circle-up-right text-secondary2 text-sm sm:text-lg lg:text-xl xxl:text-3xl" />
          </div>
          <Image
            className="absolute right-0 bottom-[48px] md:bottom-[52px] xxl:bottom-[56px] xxxl:bottom-[58px]"
            src={ShapeForRestora}
            alt="shape"
          />
          <Image
            className="absolute right-[121px] md:right-[134px] xl:right-[153px] xxl:right-[163px]  xxxl:right-[171px] bottom-0"
            src={ShapeForRestora}
            alt="shape"
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="relative">
          <Image
            className="w-full"
            src={OurRestaurant}
            alt="Icon"
          />
          <div className="flex items-center gap-1 xxxl:gap-3 absolute right-0 bottom-0 xxl:bottom-0 xxxl:bottom-0  cursor-pointer bg-nb10  rounded-tl-3xl pl-3 py-3.5">
            <Link
              className=" text-md xl:text-lg text-secondary2"
              href="/about">
              OUR RESTAURANT{" "}
            </Link>
            <ArrowCircleUpRight className="ph-thin ph-arrow-circle-up-right text-secondary2 text-sm sm:text-lg lg:text-xl xxl:text-3xl" />
          </div>
          <Image
            className="absolute right-0 bottom-[48px] md:bottom-[52px] xxl:bottom-[56px] xxxl:bottom-[58px]"
            src={ShapeForRestora}
            alt="shape"
          />
          <Image
            className="absolute right-[152px] md:right-[170px] xl:right-[193px] xxl:right-[203px]  xxxl:right-[210px] bottom-0"
            src={ShapeForRestora}
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
}
