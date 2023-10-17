import "./App.scss";
import Avatar from "./components/avatar/Avatar";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Expertise from "./components/expertise/Expertise";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Avatar />
      </section>
      <section id="Expertise">
        <Parallax type="expertise" />
      </section>
      <section>
        <Expertise />
      </section>
      <Experience />
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
