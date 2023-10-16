import "./App.scss";
import Avatar from "./components/avatar/Avatar";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Avatar />
      </section>
      <section id="Experience">
        <Parallax type="experience" />
      </section>
      <section>
        <Experience />
      </section>
      <section id="Skills">Skills</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio</section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
