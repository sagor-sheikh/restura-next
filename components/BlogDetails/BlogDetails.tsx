"use client"
import Image from "next/image";
import Link from "next/link";
import BlogDetailsThumb from "../../public/images/blog-details-thumb.png";
import SophieMoore from "../../public/images/sophie-moore.png";
import OldShape from "../../public/images/old-shape.png";
import Tea from "../../public/images/tea.png";
import { FacebookLogo, InstagramLogo, TwitchLogo } from "@phosphor-icons/react";
 
export default function BlogDetails() {
  return (
    <>
      <div className="border-extra10 border rounded-3xl px-4 md:px-8 xl:px-12 pb-10 md:pb-14 mb-4 md:mb-6 xl:max-h-[104vh] overflow-y-auto listest-news scrollcontrol">
        <div className="mt-10 md:mt-14 text-center sm:text-start">
          <Image
            className="mb-5 rounded-2xl"
            src={BlogDetailsThumb}
            alt="Icon"
          />
          <span className="font-medium mb-3">October 19, 2024</span>
          <h2 className="mb-3 font-semibold">
            We have update our overall menu.
          </h2>
          <p className="text-lg mb-4 md:mb-6">
            {" "}
            Learn about the essential ingredients that make up sushi, from the
            freshest fish and seafood to the fragrant rice and delicate seaweed
            wrappers. Explore how each component contributes to the overall
            flavor and texture of this beloved dish. Dive into the intricate
            techniques used to prepare and present sushi
          </p>
          <div className="py-4 lg:py-6 px-4 md:px-8 xl:px-10 border  border-extra10 rounded-3xl mb-4 md:mb-6">
            <p className="text-xl">
              Explore the diverse regional varieties of sushi found across
              Japan, from the elegant nigiri sushi of Tokyo to the hearty maki
              rolls of Osaka.
            </p>
          </div>
          <p className="text-lg mb-8 md:mb-10">
            Brush up on sushi etiquette and dining customs to enhance your
            dining experience. Learn the proper way to eat sushi, from using
            chopsticks to dipping sushi in soy sauce,
          </p>
          <h2 className="mb-3 font-semibold">
            We have update our overall menu.
          </h2>
          <p className="text-lg mb-8 md:mb-10">
            Brush up on sushi etiquette and dining customs to enhance your
            dining experience. Learn the proper way to eat sushi, from using
            chopsticks to dipping sushi in soy sauce,
          </p>
          <div className="flex flex-col lg:flex-row xl:flex-col xxxl:flex-row gap-4 xl:gap-6 mb-4 md:mb-5">
            <Image
              className="rounded-2xl"
              src={OldShape}
              alt="Image"
            />
            <Image className="rounded-2xl" src={Tea} alt="Image" />
          </div>
          <p className="text-lg mb-8 md:mb-10">
            {" "}
            Dive into the intricate techniques used to prepare and present
            sushi, from the precise art of slicing fish to meticulous rolling of
            sushi rolls. Gain insight into the skills and craftsmanship required
            to create sushi that is both visually stunning and delicious.
          </p>
        </div>
        <div className="flex items-center flex-col sm:flex-row gap-3">
          <Image
            className="w-fit rounded-2xl"
            src={SophieMoore}
            alt="Image"
          />
          <div>
            <div className="flex justify-between flex-col sm:flex-row items-center gap-3 sm:gap-5 mb-3 md:mb-4">
              <div className="text-center sm:text-start">
                <h4 className="mb-1">Sophie Moore</h4>
                <span>Training Coach</span>
              </div>
              <div className=" flex gap-2 md:gap-3">
                <Link
                  className="border border-primary p-2 rounded-full"
                  href="#">
                  <InstagramLogo size={24} className="ph ph-instagram-logo text-sm md:text-2xl text-primary" />
                </Link>
                <Link
                  className="border border-primary p-2 rounded-full"
                  href="#">
                  <FacebookLogo size={24} className="ph ph-facebook-logo text-sm md:text-2xl text-primary" />
                </Link>
                <Link
                  className="border border-primary p-2 rounded-full"
                  href="#">
                  <TwitchLogo size={24} className="ph ph-twitch-logo text-sm md:text-2xl text-primary" />
                </Link>
              </div>
            </div>
            <p className="text-center sm:text-start">
              Dive into the intricate techniques used to prepare and present
              sushi, from the precise art of slicing fish to meticulous rolling
              of sushi rolls. Gain insight into the skills and craftsmanship
              required to create sushi that is both visually stunning and
              delicious.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
