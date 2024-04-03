"use client";
import {
  ArrowCircleUpRight,
  FacebookLogo,
  InstagramLogo,
  TwitchLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import ShapeForRestora from "../../public/images/icon/shape-for-restora.png";
import ContactThumb from "../../public/images/contact-thumb.png";
import ContactOne from "../../public/images/contact-one.png";
import ContactTwo from "../../public/images/contact-two.png";
import ContactThree from "../../public/images/contact-three.png";
import ContactFour from "../../public/images/contact-four.png";
import Footer from "../shared/Footer";

export default function Contact() {
  return (
    <>
      <div className="col-span-12 xl:col-span-6 mt-6 order-last xl:order-none mb-4 xl:md-0">
        <div className="border-extra10 border rounded-3xl mb-4 md:mb-6">
          <div className="grid grid-cols-2 gap-5 md:gap-6 p-6 md:p-8 xl:p-12">
            <div className="col-span-2 xxxl:col-span-1">
              <div className="flex items-start justify-start">
                <figure className="snip1205 rounded-2xl relative group">
                  <Image
                    className="rounded-xl"
                    src={ContactOne}
                    alt="sample42"
                  />
                  <InstagramLogo
                    size={30}
                    className="ph ph-instagram-logo text-primary absolute top-[46%] left-[45%] opacity-0 group-hover:opacity-100"
                  />
                </figure>
                <figure className="snip1205 rounded-2xl relative group">
                  <Image
                    className="rounded-xl"
                    src={ContactTwo}
                    alt="sample42"
                  />
                  <InstagramLogo
                    size={30}
                    className="ph ph-instagram-logo text-primary absolute top-[46%] left-[45%] opacity-0 group-hover:opacity-100"
                  />
                </figure>
              </div>
              <div className="flex">
                <figure className="snip1205 rounded-2xl relative group">
                  <Image
                    className="rounded-xl"
                    src={ContactThree}
                    alt="sample42"
                  />
                  <InstagramLogo
                    size={30}
                    className="ph ph-instagram-logo text-primary absolute top-[46%] left-[45%] opacity-0 group-hover:opacity-100"
                  />
                </figure>
                <figure className="snip1205 rounded-2xl relative group">
                  <Image
                    className="rounded-xl"
                    src={ContactFour}
                    alt="sample42"
                  />
                  <InstagramLogo
                    size={30}
                    className="ph ph-instagram-logo text-primary absolute top-[46%] left-[45%] opacity-0 group-hover:opacity-100"
                  />
                </figure>
              </div>
            </div>
            <div className="col-span-2 xxxl:col-span-1 border-extra10 border rounded-3xl py-6 lg:py-8 xl:py-10 px-4 lg:px-6 xl:px-8">
              <h4 className="text-primary text-center pb-5 md:pb-6 xl:pb-8">
                OPENING HOURS
              </h4>
              <div>
                <div className="flex items-center justify-between gap-5 md:gap-6 relative md:mb-3 lg:mb-4">
                  <div>
                    <span className="text-nowrap text-lg font-medium">
                      Monday
                    </span>
                  </div>
                  <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                  <div>
                    <span className="font-medium text-lg text-nowrap">
                      16:00 - 22:30
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 md:gap-6 relative md:mb-3 lg:mb-4">
                  <div>
                    <span className="text-nowrap text-lg font-medium">
                      Tuesday
                    </span>
                  </div>
                  <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                  <div>
                    <span className="font-medium text-lg text-nowrap">
                      16:00 - 22:30
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 md:gap-6 relative md:mb-3 lg:mb-4">
                  <div>
                    <span className="text-nowrap text-lg font-medium">
                      Wednesday
                    </span>
                  </div>
                  <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                  <div>
                    <span className="font-medium text-lg text-nowrap">
                      16:00 - 22:30
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 md:gap-6 relative md:mb-3 lg:mb-4">
                  <div>
                    <span className="text-nowrap text-lg font-medium">
                      Thursday
                    </span>
                  </div>
                  <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                  <div>
                    <span className="font-medium text-lg text-nowrap">
                      16:00 - 22:30
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 md:gap-6 relative md:mb-3 lg:mb-4">
                  <div>
                    <span className="text-nowrap text-lg font-medium">
                      Friday
                    </span>
                  </div>
                  <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                  <div>
                    <span className="font-medium text-lg text-nowrap">
                      16:00 - 22:30
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 md:gap-6 relative md:mb-3 lg:mb-4">
                  <div>
                    <span className="text-nowrap text-lg font-medium">
                      Saturday
                    </span>
                  </div>
                  <span className="menuitemdoted text-extra10 w-[550px] border border-dotted border-extra10"></span>
                  <div>
                    <span className="font-medium text-lg text-nowrap">
                      16:00 - 22:30
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 xxxl:col-span-1 border-extra10 border rounded-3xl py-6 lg:py-8 xl:py-10 px-4 lg:px-6 xl:px-8">
              <h4 className="text-primary text-center pb-5 md:pb-md-8 xl:pb-11">
                GET IN TOUCH
              </h4>
              <div className="sm:flex justify-between mb-5 md:mb-6 lg:mb-8">
                <span className="text-lg block">ADDRESS</span>
                <div className="sm:text-end">
                  <span className="text-lg block">23 Greenfield Avenue</span>
                  <span className="text-lg block">Prague 120 00</span>
                </div>
              </div>
              <div className="sm:flex justify-between mb-5 md:mb-6 lg:mb-8">
                <span className="text-lg block">PHONE</span>
                <Link
                  href="tel:808555-0111"
                  className="text-lg block sm:text-end">
                  (808) 555-0111
                </Link>
              </div>
              <div className="sm:flex justify-between mb-5 md:mb-6 lg:mb-8">
                <span className="text-lg block">EMAIL</span>
                <Link
                  href="mailto:debra.holt@example.com"
                  className="text-lg block sm:text-end">
                  debra.holt@example.com
                </Link>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg block">FOLLOW</span>
                <div className="text-end flex gap-2 md:gap-3">
                  <Link
                    className="border border-secondary2 hover:border-primary p-2 rounded-full"
                    href="#">
                    <InstagramLogo className="ph ph-instagram-logo text-sm md:text-2xl text-primary" />
                  </Link>
                  <Link
                    className="border border-secondary2 hover:border-primary p-2 rounded-full"
                    href="#">
                    <FacebookLogo className="ph ph-facebook-logo text-sm md:text-2xl text-primary" />
                  </Link>
                  <Link
                    className="border border-secondary2 hover:border-primary p-2 rounded-full"
                    href="#">
                    <TwitchLogo className="ph ph-twitch-logo text-sm md:text-2xl text-primary" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 xxxl:col-span-1">
              <div className="responsive-map relative">
                <iframe
                  className="rounded-3xl"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25311782.5120348!2d62.82210388293015!3d39.247021093154636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1709615023243!5m2!1sen!2sbd"
                  width="402"
                  height="408"
                  loading="lazy"></iframe>
                {/* <!-- <div
                                    className="flex items-center gap-1 xxxl:gap-3 absolute right-0 bottom-0 xxl:bottom-0 xxxl:bottom-0  cursor-pointer bg-nb10  rounded-tl-3xl pl-3 py-3.5">
                                    <Link className=" text-md xl:text-lg text-secondary2" target="_blank"
                                        href="https://maps.app.goo.gl/fNSUjMBugkudMbqr7">SHOW ROUTH</Link>
                                    <i className="ph ph-arrow-circle-up-right text-secondary2 text-md xxl:text-xl" />
                                </div> --> */}
                <div className="flex items-center gap-1 xxxl:gap-3 absolute right-0 bottom-0 xxl:bottom-0 xxxl:bottom-0  cursor-pointer bg-nb10  rounded-tl-3xl pl-3 py-3.5">
                  <Link
                    className=" text-md xl:text-lg text-secondary2"
                    href="#">
                    SHOW ROUTH
                  </Link>
                  <ArrowCircleUpRight className="ph-thin ph-arrow-circle-up-right text-secondary2 text-sm sm:text-lg lg:text-xl xxl:text-3xl" />
                </div>
                <Image
                  className="absolute right-0 bottom-12 xl:bottom-14"
                  src={ShapeForRestora}
                  alt="shape"
                />
                <Image
                  className="absolute right-[120px] md:right-[140px] xl:right-[25.5%] xxl:right-[23.5%]  xxxl:right-[41.5%] bottom-0"
                  src={ShapeForRestora}
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="col-span-12 xl:col-span-5 xl:my-6">
        <div className="relative">
          <Image
            className="w-full rounded-2xl"
            src={ContactThumb}
            alt="Image"
          />
          <span className="display-1 text-primary absolute bottom-5 left-5 md:bottom-20 md:left-20 xl:left-2 xxxl:left-20 uppercase">
            Contact
          </span>
        </div>
      </div>
    </>
  );
}
