"use client"
import Image from 'next/image';
import Sushi from "../../public/images/sushi.png";
import Shape from "../../public/images/shape.png";
import { Star } from '@phosphor-icons/react';


export default function About() {
  return (
    <>
    
    <div className="col-span-12 xl:col-span-6 sm:mt-6">
        <div className="grid grid-cols-2 gap-6 mb-4 md:mb-6">
          <div className="col-span-full md:col-span-1 xl:col-span-full xxl:col-span-full xxxl:col-span-1">
            <Image className="rounded-2xl w-full" src={Sushi} alt="Image" />
          </div>
          <div
            className="col-span-full md:col-span-1 xl:col-span-full xxl:col-span-full xxxl:col-span-1 rounded-2xl p-5 md:p-8 xl:p-10 border border-extra10 duration-500">
            <h2 className="text-primary md-6 xl:mb-8">Sushi Craftsmanship Elevated</h2>
            <p className="text-xl">Experience culinary excellence in modern sophistication. Lorem ipsum dolor sit amet consectetur adipisicing elit. Indulge in expertly crafted
              sushi for an elevated dining experience
              like no other.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div
            className="col-span-full sm:col-span-1 px-5 md:px-8 xl:px-10 py-5 md:py-6 xl:py-8 rounded-2xl border border-extra10 duration-500 text-center">
            <div className="text-center mb-4 flex justify-center items-center gap-1">
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
            </div>
            <h5 className="text-primary text-center mb-1">START DINING</h5>
            <span className="text-center">COOL VIBE</span>
          </div>
          <div
            className="col-span-full sm:col-span-1 px-5 md:px-8 xl:px-10 py-5 md:py-6 xl:py-8 rounded-2xl border border-extra10 duration-500 text-center">
            <div className="text-center mb-4 flex justify-center items-center gap-1">
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
            </div>
            <h5 className="text-primary text-center mb-1">START DINING</h5>
            <span className="text-center">COOL VIBE</span>
          </div>
          <div
            className="col-span-2 px-5 md:px-8 xl:px-10 py-5 md:py-6 xl:py-8 rounded-2xl border border-extra10 duration-500 text-center">
            <div className="text-center mb-4 flex justify-center items-center gap-1">
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
              <Star size={20} weight='fill' className="ph-fill ph-star text-primary" />
            </div>
            <h5 className="text-primary text-center mb-1">MICHELIN GUIDE</h5>
            <span className="text-center font-medium">QUALITY FOOD</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4 md:mb-6">
          <div className="col-span-full md:col-span-1 xl:col-span-full xxl:col-span-full xxxl:col-span-1">
            <Image className="rounded-2xl w-full" src={Sushi} alt="Image" />
          </div>
          <div
            className="col-span-full md:col-span-1 xl:col-span-full xxl:col-span-full xxxl:col-span-1 rounded-2xl p-5 md:p-8 xl:p-10 border border-extra10 duration-500">
            <h2 className="text-primary md-6 xl:mb-8">Our Story</h2>
            <p className="text-xl">Restura&apos;s story is rooted in a fervent pursuit of culinary greatness, blossoming from Prague&apos;s sanctuary for sushi aficionados, renowned for its exquisite craftsmanship and unwavering gastronomy.</p>
          </div>
        </div>
      </div>

      <div className="col-span-12 xl:col-span-5 xl:my-6">
        <div className="relative">
          <Image className="w-full rounded-2xl" src={Shape} alt="Image" />
          <span className="display-1 text-primary absolute bottom-5 left-5 md:bottom-20 md:left-20 uppercase">About</span>
        </div>
      </div>
    </>
  )
}
