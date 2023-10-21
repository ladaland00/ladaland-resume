import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";
interface ItemProps {
  title: string;
  image: string;
  desc: string;
  gitHubLink: string;
  urlLink: string;
}
const items = [
  {
    title: "Resume",
    image: "project-temp.jpg",
    urlLink: "",
    gitHubLink: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores voluptate voluptatum quisquam natus. Quas quibusdam nihil reprehenderit dolor, cupiditate blanditiis praesentium officiis explicabo alias accusamus ex. Quidem, sunt nulla.",
  },
];
const Single = ({ item }: { item: ItemProps }) => (
  <section className="box">
    <div className="projectImg">
      <img src={item.image} alt="" width={300} />
    </div>
    <div className="projectDetail">
      <div className="projectName"> {item.title}</div>
      <div className="projectDesc"> {item.desc}</div>
      <div className="linkGroup"></div>
    </div>
  </section>
);
const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <motion.div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }} />
      </div>
      {items.map((item) => (
        <Single key={item.title} item={item} />
      ))}
      <section className="comingSoonBox">Coming soon....</section>
    </motion.div>
  );
};

export default Portfolio;
