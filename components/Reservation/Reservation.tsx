import Image from "next/image";
import ContactImage from "../../public/images/contact-image.png";
import Footer from "../shared/Footer";

export default function Reservation() {
  return (
    <>
      <div className="col-span-12 xl:col-span-6 mt-6 order-last xl:order-none mb-4 xl:md-0">
        <div className="border-extra10 border rounded-3xl px-4 md:px-8 xl:px-12 pb-10 md:pb-14 mb-6">
          <div className="my-10 md:my-14 xxxl:pt-4 text-center">
            <h1 className="display-4 font-semibold text-primary pb-5 md:pb-6">
              RESERVATION
            </h1>
            <p className="text-xl">
              Secure your spot at Rsetura for exceptional sushi and an
              unforgettable dining
              <br className="none xxl:block" /> journey. Reserve now for an
              unparalleled culinary experience.
            </p>
          </div>
          <div className="xxxl:pb-4">
            <form action="#" method="post">
              <div className="flex flex-col sm:flex-row gap-6 w-full md:mb-6 mb-4">
                <div className="w-full">
                  <label className="block w-full pb-3 text-lg">
                    FIRST NAME*
                  </label>
                  <input
                    className="block w-full py-3 px-4 bg-transparent border border-extra10 hover:border-primary duration-1000 rounded-xl text-lg"
                    placeholder="First name"
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block w-full pb-3 text-lg">
                    LAST EMAIL*
                  </label>
                  <input
                    className="block w-full py-3 px-4 bg-transparent border border-extra10 hover:border-primary duration-1000 rounded-xl text-lg"
                    placeholder="First name"
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full md:mb-6 mb-4">
                <div className="w-full">
                  <label className="block w-full pb-3 text-lg">EMAIL*</label>
                  <input
                    className="block w-full py-3 px-4 bg-transparent border border-extra10 hover:border-primary duration-1000 rounded-xl text-lg"
                    placeholder="Your email"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block w-full pb-3 text-lg">
                    PHONE NUMBER*
                  </label>
                  <input
                    className="block w-full py-3 px-4 bg-transparent border border-extra10 hover:border-primary duration-1000 rounded-xl text-lg"
                    placeholder="Phone"
                    type="number"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full md:mb-6 mb-4">
                <div className="w-full">
                  <label className="block w-full pb-3 text-lg">DATE*</label>
                  <input
                    className="block w-full py-3 px-4 bg-transparent border border-extra10 hover:border-primary duration-1000 rounded-xl text-lg"
                    type="date"
                    id="date"
                    name="date"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block w-full pb-3 text-lg">TIME*</label>
                  <input
                    className="block w-full py-3 px-4 bg-transparent border border-extra10 hover:border-primary duration-1000 rounded-xl text-lg"
                    type="time"
                    id="time"
                    name="time"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full md:mb-6 mb-4">
                <div className="w-full">
                  <label className="block w-full pb-3 text-lg">
                    FIRST NAME*
                  </label>
                  <textarea
                    className="block w-full py-3 px-4 bg-transparent border border-extra10 hover:border-primary duration-1000 rounded-xl text-lg"
                    placeholder="Enter Your Message"
                    id="message"
                    rows={5}
                    name="message"
                    required></textarea>
                </div>
              </div>
              <div>
                <button
                  className="bg-primary text-black font-semibold md:py-3 py-2 px-3 md:px-4 rounded-2xl w-full"
                  type="submit"
                  value="Submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      <div className="col-span-12 xl:col-span-5 xl:my-6">
        <div className="relative">
          <Image
            className="w-full rounded-2xl"
            src={ContactImage}
            alt="Image"
          />
          <span className="display-4 text-primary absolute bottom-5 left-5 md:bottom-20 md:left-20 uppercase">
            RESERVATION
          </span>
        </div>
      </div>
    </>
  );
}
