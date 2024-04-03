import Navbar from "../../components/shared/Navbar";
import About from "../../components/About/About";


export default function page() {
  return (
    <>
 <section className="container">
    <div className="grid grid-cols-12 gap-6">
    <Navbar />
    <About />
    </div>
  </section>
    </>
  )
}
