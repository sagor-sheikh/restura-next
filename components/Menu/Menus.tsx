import Image from "next/image";
import React from "react";
import MenuHover1 from "../../public/images/menu-hover1.png";
import MenuHover2 from "../../public/images/menu-hover2.png";
import MenuHover3 from "../../public/images/menu-hover3.png";
import OurMenu from "../../public/images/our-menu.png";
import Footer from "../shared/Footer";

export default function Menus() {
  return (
    <>
      <div className=" col-span-12 xl:col-span-6 mt-6 order-last xl:order-none mb-4 xl:md-0">
        <div className="border-extra10 border rounded-3xl px-4 md:px-8 xl:px-12 pb-10 md:pb-14 mb-4 md:mb-6 xl:max-h-[104vh] overflow-y-auto listest-news scrollcontrol">
          <div className="my-10 md:my-14 text-center">
            <h1 className="display-4 font-semibold text-primary pb-5 md:pb-6">
              OUR MENU
            </h1>
            <p className="text-xl">
              The heart of Restura allure lies in its meticulous attention to
              every detail, from the selection of{" "}
              <br className="none xxxl:block" /> ingredients to the presentation
              of each dish.
            </p>
          </div>
          <div className="relative z-0 group">
            <h2 className="text-primary font-semibold mb-4 md:mb-6">
              Breakfast
            </h2>
            <div className="mb-10">
              <div className="flex items-center justify-between gap-5 md:gap-6 relative mb-3">
                <div>
                  <h4 className="text-nowrap">Delicious Pancakes</h4>
                </div>
                <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                <div>
                  <h3 className="text-primary font-semibold">$15</h3>
                </div>
              </div>
              <p className="text-xl text-nw40 opacity-80">
                Tempura-fried shrimp, cucumber, and cream cheese embrace a
                center of fresh avocado, delivering a satisfying contrast of
                textures.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-center justify-between gap-5 md:gap-6 relative mb-3">
                <div>
                  <h4 className="text-nowrap">Avocado Smash</h4>
                </div>
                <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                <div>
                  <h3 className="text-primary font-semibold">$15</h3>
                </div>
              </div>
              <p className="text-xl text-nw40 opacity-80">
                Tempura-fried shrimp, cucumber, and cream cheese embrace a
                center of fresh avocado, delivering a satisfying contrast of
                textures.
              </p>
            </div>
            <div className="mb-10 md:mb-16">
              <div className="flex items-center justify-between gap-5 md:gap-6 relative mb-3">
                <div>
                  <h4 className="text-nowrap">Standard black coffee</h4>
                </div>
                <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                <div>
                  <h3 className="text-primary font-semibold">$15</h3>
                </div>
              </div>
              <p className="text-xl text-nw40 opacity-80">
                Tempura-fried shrimp, cucumber, and cream cheese embrace a
                center of fresh avocado, delivering a satisfying contrast of
                textures.
              </p>
            </div>
            <Image
              className="absolute top-[30%] right-[30%] sm:right-[30%] -z-10 opacity-0 group-hover:opacity-100 duration-500 sm:w-[35%] rounded-2xl"
              src={MenuHover1}
              alt="Image"
            />
          </div>
          <div className="relative z-0 group">
            <h2 className="text-primary font-semibold mb-4 md:mb-6">Lunch</h2>
            <div className="mb-10">
              <div className="flex items-center justify-between gap-5 md:gap-6 relative mb-3">
                <div>
                  <h4 className="text-nowrap">Delicious Pancakes</h4>
                </div>
                <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                <div>
                  <h3 className="text-primary font-semibold">$15</h3>
                </div>
              </div>
              <p className="text-xl text-nw40 opacity-80">
                Tempura-fried shrimp, cucumber, and cream cheese embrace a
                center of fresh avocado, delivering a satisfying contrast of
                textures.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-center justify-between gap-5 md:gap-6 relative mb-3">
                <div>
                  <h4 className="text-nowrap">Avocado Smash</h4>
                </div>
                <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                <div>
                  <h3 className="text-primary font-semibold">$15</h3>
                </div>
              </div>
              <p className="text-xl text-nw40 opacity-80">
                Tempura-fried shrimp, cucumber, and cream cheese embrace a
                center of fresh avocado, delivering a satisfying contrast of
                textures.
              </p>
            </div>
            <div className="mb-10 md:mb-16">
              <div className="flex items-center justify-between gap-5 md:gap-6 relative mb-3">
                <div>
                  <h4 className="text-nowrap">Standard black coffee</h4>
                </div>
                <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                <div>
                  <h3 className="text-primary font-semibold">$15</h3>
                </div>
              </div>
              <p className="text-xl text-nw40 opacity-80">
                Tempura-fried shrimp, cucumber, and cream cheese embrace a
                center of fresh avocado, delivering a satisfying contrast of
                textures.
              </p>
            </div>
            <Image
              className="absolute top-[30%] right-[30%] sm:right-[30%] -z-10 opacity-0 group-hover:opacity-100 duration-500 sm:w-[35%] rounded-2xl"
              src={MenuHover2}
              alt="Image"
            />
          </div>
          <div className="relative z-0 group">
            <h2 className="text-primary font-semibold mb-4 md:mb-6">Dinner</h2>
            <div className="mb-10">
              <div className="flex items-center justify-between gap-5 md:gap-6 relative mb-3">
                <div>
                  <h4 className="text-nowrap">Tomato Soup</h4>
                </div>
                <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                <div>
                  <h3 className="text-primary font-semibold">$15</h3>
                </div>
              </div>
              <p className="text-xl text-nw40 opacity-80">
                Tempura-fried shrimp, cucumber, and cream cheese embrace a
                center of fresh avocado, delivering a satisfying contrast of
                textures.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-center justify-between gap-5 md:gap-6 relative mb-3">
                <div>
                  <h4 className="text-nowrap">Noodle Soup</h4>
                </div>
                <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                <div>
                  <h3 className="text-primary font-semibold">$10</h3>
                </div>
              </div>
              <p className="text-xl text-nw40 opacity-80">
                Tempura-fried shrimp, cucumber, and cream cheese embrace a
                center of fresh avocado, delivering a satisfying contrast of
                textures.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between gap-5 md:gap-6 relative mb-3">
                <div>
                  <h4 className="text-nowrap">Sweet Heaven</h4>
                </div>
                <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                <div>
                  <h3 className="text-primary font-semibold">$12</h3>
                </div>
              </div>
              <p className="text-xl text-nw40 opacity-80">
                Tempura-fried shrimp, cucumber, and cream cheese embrace a
                center of fresh avocado, delivering a satisfying contrast of
                textures.
              </p>
            </div>
            <Image
              className="absolute top-[30%] right-[30%] sm:right-[30%] -z-10 opacity-0 group-hover:opacity-100 duration-500 sm:w-[35%] rounded-2xl"
              src={MenuHover3}
              alt="Image"
            />
          </div>
        </div>
        <Footer />
      </div>
      <div className="col-span-12 xl:col-span-5 xl:my-6">
        <div className="relative">
          <Image
            className="w-full rounded-2xl"
            src={OurMenu}
            alt="Image"
          />
          <span className="display-1 text-primary absolute bottom-5 left-5 md:bottom-20 md:left-20 uppercase">
            OUR MENU
          </span>
        </div>
      </div>
    </>
  );
}
