import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";
const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progressBar"></div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
