import { useRef } from "react";
import "./experience.scss";
import { motion, useInView, Variants } from "framer-motion";

const Experience = () => {
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
  const flowerVariants: Variants = {
    initial: {},
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 3.6,
      },
    },
  };
  return (
    <motion.div
      className="experience"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.img
        className="rotateFlower"
        src="golden_flower.png"
        alt=""
        width="300"
        variants={flowerVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div className="textContainer">
        <p>
          I like milk tea
          <br /> and read novel
        </p>
        <hr />
      </motion.div>
      <h1>Education</h1>
      <motion.div
        className="educationContainer"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
      >
        <motion.div className="box" whileHover={{ scale: 1.2, rotate: -5 }}>
          <h2>Computer Engineering</h2>
          <p>
            Aug 2021 - July 2021
            <br /> Bachelors Degree <br />
            at King Mongkut's Institute of Technology Ladkrabang
          </p>
        </motion.div>
      </motion.div>
      <h1>Experience</h1>
      <motion.div
        className="experienceContainer"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
      >
        <motion.div className="box" whileHover={{ scale: 1.2, rotate: -5 }}>
          <h2>CODEMONDAY CO., LTD.</h2>
          <p>
            July 2021 - July 2023 <br />
            Software Developer
          </p>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.2, rotate: 5 }}>
          <h2>LATTESOFT CO., LTD.</h2>
          <p>
            Jun 2020 - Jul 2020 <br />
            Frontend developer - Internship
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
