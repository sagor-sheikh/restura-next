import Menu from "../components/Home/Menu";
import Rightside from "../components/Home/Rightside";
import Navbar from "../components/shared/Navbar";

export default function Home() {
  return (
    <section className="container">
        <div className="grid grid-cols-12 gap-6">
          <Navbar />
          <Menu />
          <Rightside />
        </div>
      </section>
  );
}
