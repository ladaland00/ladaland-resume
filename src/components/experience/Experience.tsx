import "./experience.scss";
import { motion, Variants } from "framer-motion";

const Experience = () => {
  const variants: Variants = {
    initial: {},
    animate: {},
  };
  return (
    <motion.div className="experience" variants={variants} initial="initial">
      <motion.div className="textContainer">
        <p>
          I like milk tea
          <br /> and read novel
        </p>
        <hr />
      </motion.div>
      <motion.div className="educationContainer">

      </motion.div>
      <motion.div className="experienceContainer">
        
      </motion.div>
    </motion.div>
  );
};

export default Experience;
