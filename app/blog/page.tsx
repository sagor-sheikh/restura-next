
import Blog from "../../components/Blog/Blog";
import Navbar from "../../components/shared/Navbar";

export default function page() {
  return (
    <>
      <section className="container">
        <div className="grid grid-cols-12 gap-6">
        <Navbar />
        <Blog />
        </div>
      </section>
    </>
  );
}
