"use client"
import Image from 'next/image'
import Link from 'next/link'
import ShapeForRestora from "../../public/images/icon/shape-for-restora.png";
import { FacebookLogo, InstagramLogo, TwitchLogo } from '@phosphor-icons/react';

export default function Rightside() {
  return (
    <div className="col-span-12 md:col-span-8 xl:col-span-7">
    <div className="relative">
      <div className="relative h-[350px] md:h-[450px] lg:h-dvh">
        {/* <!-- For use image --> */}
        {/* <!-- <Image className="imagemain" src="images/panthouse-tonic.png" alt="icon"> --> */}
        <video className="absolute w-full h-full object-cover rounded-3xl" muted loop autoPlay>
          <source src="https://softivuspro.com/rest/videoplayback.mp4" type="video/mp4" />
        </video>

        <span className="display-1 text-primary absolute bottom-5 left-5 md:bottom-20 md:left-20 uppercase">Panthouse <br />
          Tonic</span>
      </div>
      <div className="absolute right-0 bottom-0 flex justify-center gap-3 bg-nb10 p-3 rounded-tl-3xl">
        <Link className="border border-secondary2 hover:border-primary duration-300 p-2 rounded-full" href="#">
          <InstagramLogo className="ph ph-instagram-logo text-sm md:text-2xl text-primary" />
        </Link>
        <Link className="border border-secondary2 hover:border-primary duration-300 p-2 rounded-full" href="#">
          <FacebookLogo className="ph ph-facebook-logo text-sm md:text-2xl text-primary" />
        </Link>
        <Link className="border border-secondary2 hover:border-primary duration-300 p-2 rounded-full" href="#">
          <TwitchLogo className="ph ph-twitch-logo text-sm md:text-2xl text-primary" />
        </Link>
      </div>
      <Image className="absolute right-0 bottom-[56px] md:bottom-[67px] xxl:bottom-[67px] xxxl:bottom-[66px]"
        src={ShapeForRestora} alt="shape" />
      <Image
        className="absolute right-[144px] md:right-[174px] xl:right-[174px] xxl:right-[174px]  xxxl:right-[174px] bottom-0"
        src={ShapeForRestora} alt="shape" />
    </div>
  </div>
  )
}
