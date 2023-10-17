import { useRef } from "react";
import "./expertise.scss";
import { motion, useInView, Variants } from "framer-motion";

const Expertise = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const variants: Variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="expertise"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer">
        <p>
          I like milk tea
          <br /> and read novel
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <h1>My Expertise</h1>
      </motion.div>
      <motion.div
        className="experienceContainer"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
      >
        <motion.div className="box" whileHover={{ scale: 1.2, rotate: -5 }}>
          <h2>Software Development</h2>
          <p>
            Experienced in both functional and OOP : NodeJS, NestJS, JavaScript,
            TypeScript.
          </p>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.2, rotate: -5 }}>
          <h2>Frontend Dev React, NextJS</h2>
          <p>
            Passionate about UI/UX. Over 2 years of development experience in
            HTML, CSS, JS, React and NextJS frameworks.
          </p>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.2, rotate: 5 }}>
          <h2>Android, iOS</h2>
          <p>
            Skilled in developing hybrid mobile apps and cross-platform
            solutions using the CapacitorJS framework.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Expertise;
