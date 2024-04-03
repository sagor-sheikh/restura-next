import Image from "next/image";
import Panthouse from "../../public/images/panthouse.png";
import OverallMenu from "../../public/images/overall-menu.png";
import ClassicDinner from "../../public/images/classic-dinner.png";
import ClassicDinnerNight from "../../public/images/classic-dinner-night.png";
import DinnerNight from "../../public/images/dinner-night.png";
import Link from "next/link";

export default function Blogitems() {
  return (
    <>
      <div className="my-10 md:my-14 text-center">
        <h1 className="display-4 font-semibold text-primary pb-5 md:pb-6">
          LATEST NEWS
        </h1>
        <p className="text-xl">
          The heart of Restura allure lies in its meticulous attention to every
          detail, from the selection of ingredients to the presentation of each
          dish.
        </p>
      </div>
      <div className="flex flex-col md:flex-row xl:flex-col xxl:flex-row gap-5 md:gap-6 md:items-center xl:items-start xxl:items-center mb-10">
        <div>
          <Image
            className="rounded-xl sm:max-w-fit"
            src={Panthouse}
            alt="Image"
          />
        </div>
        <div>
          <span className="pb-1 md:pb-2 block">October 19, 2024</span>
          <h3 className="pb-2 md:pb-3 font-semibold text-nw10">
            Panthouse Tonic
          </h3>
          <p className="pb-2 md:pb-6 text-lg text-nw40">
            In a world where dining experiences often blend into ordinary,
            stands as an emblem of culinary passion redefined.
          </p>
          <Link className="text-lg underline" href="/blog-details">
            Blog Details
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row xl:flex-col xxl:flex-row gap-5 md:gap-6 md:items-center xl:items-start xxl:items-center mb-10">
        <div>
          <Image
            className="rounded-xl sm:max-w-fit"
            src={OverallMenu}
            alt="Image"
          />
        </div>
        <div>
          <span className="pb-1 md:pb-2 block">October 29, 2024</span>
          <h3 className="pb-2 md:pb-3 font-semibold text-nw10">
            We have update our overall menu.
          </h3>
          <p className="pb-2 md:pb-6 text-lg text-nw40">
            Qitchen invites you to witness passion personified in every aspect
            of your dining journey.
          </p>
          <Link className="text-lg underline" href="/blog-details">
            Blog Details
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row xl:flex-col xxl:flex-row gap-5 md:gap-6 md:items-center xl:items-start xxl:items-center mb-10">
        <div>
          <Image
            className="rounded-xl sm:max-w-fit"
            src={ClassicDinner}
            alt="Image"
          />
        </div>
        <div>
          <span className="pb-1 md:pb-2 block">October 05, 2024</span>
          <h3 className="pb-2 md:pb-3 font-semibold text-nw10">
            Classic Dinner Night
          </h3>
          <p className="pb-2 md:pb-6 text-lg text-nw40">
            While the gastronomic delights are undoubtedly the centerpiece,
            Restura goes beyond being a culinary haven.
          </p>
          <Link className="text-lg underline" href="/blog-details">
            Blog Details
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row xl:flex-col xxl:flex-row gap-5 md:gap-6 md:items-center xl:items-start xxl:items-center mb-10">
        <div>
          <Image
            className="rounded-xl sm:max-w-fit"
            src={DinnerNight}
            alt="Image"
          />
        </div>
        <div>
          <span className="pb-1 md:pb-2 block">October 29, 2024</span>
          <h3 className="pb-2 md:pb-3 font-semibold text-nw10">
            Panthouse Tonic
          </h3>
          <p className="pb-2 md:pb-6 text-lg text-nw40">
            While the gastronomic delights are undoubtedly the centerpiece,
            Restura goes beyond being a culinary haven.
          </p>
          <Link className="text-lg underline" href="/blog-details">
            Blog Details
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row xl:flex-col xxl:flex-row gap-5 md:gap-6 md:items-center xl:items-start xxl:items-center">
        <div>
          <Image
            className="rounded-xl sm:max-w-fit"
            src={ClassicDinnerNight}
            alt="Image"
          />
        </div>
        <div>
          <span className="pb-1 md:pb-2 block">October 29, 2024</span>
          <h3 className="pb-2 md:pb-3 font-semibold text-nw10">
            Classic Dinner Night
          </h3>
          <p className="pb-2 md:pb-6 text-lg text-nw40">
            While the gastronomic delights are undoubtedly the centerpiece,
            Restura goes beyond being a culinary haven.
          </p>
          <Link className="text-lg underline" href="/blog-details">
            Blog Details
          </Link>
        </div>
      </div>
    </>
  );
}
