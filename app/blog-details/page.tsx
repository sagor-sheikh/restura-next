import Image from "next/image";
import Birani from "../../public/images/birani.png";
import Navbar from "../../components/shared/Navbar";
import BlogDetails from "../../components/BlogDetails/BlogDetails";
import Footer from "../../components/shared/Footer";

export default function page() {
  return (
    <>
      <section className="container">
        <div className="grid grid-cols-12 gap-6">
          <Navbar />
          <div className="col-span-12 xl:col-span-6 mt-6 order-last xl:order-none mb-4 xl:md-0">
            <BlogDetails />
            <Footer />
          </div>
          <div className="col-span-12 xl:col-span-5 xl:my-6">
            <div className="relative">
              <Image className="w-full rounded-2xl" src={Birani} alt="Image" />
              <span className="display-1 text-primary absolute bottom-5 left-5 md:bottom-20 md:left-20 uppercase">
                Details
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
