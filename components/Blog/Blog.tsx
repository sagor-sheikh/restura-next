import Image from 'next/image'
import BlogConentimg from "../../public/images/blog-conentimg.png";
import Blogitems from './Blogitems';
import Footer from '../shared/Footer';

export default function Blog() {
  return (
    <>
        <div className="col-span-12 xl:col-span-6 mt-6 order-last xl:order-none mb-4 xl:md-0">
            <div className="border-extra10 border rounded-3xl px-4 md:px-8 xl:px-12 pb-10 md:pb-14 mb-4 md:mb-6 xl:max-h-[104vh] overflow-y-auto listest-news scrollcontrol">
              <Blogitems />
            </div>
            <Footer />
          </div>
          <div className="col-span-12 xl:col-span-5 xl:my-6">
            <div className="relative">
              <Image
                className="w-full rounded-2xl"
                src={BlogConentimg}
                alt="Image"
              />
              <span className="display-1 text-primary absolute bottom-5 left-5 md:bottom-20 md:left-20 uppercase">
                Blog
              </span>
            </div>
          </div>
    </>
  )
}
