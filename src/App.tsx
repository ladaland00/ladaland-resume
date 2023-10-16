import "./App.scss";
import Avatar from "./components/avatar/Avatar";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Avatar />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio</section>
      <section>D</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
