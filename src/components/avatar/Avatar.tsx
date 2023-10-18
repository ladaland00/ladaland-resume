import "./avatar.scss";
import { Variants, motion } from "framer-motion";

const Avatar = () => {
  const textVariants: Variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const slideVariants: Variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 5,
      },
    },
  };
  return (
    <div className="avatar">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>LADA NAMUANGRAK</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer <br />
            and Trainee artist.
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            animate="scrollButton"
            src="scroll.png"
            alt=""
            variants={textVariants}
          />
        </motion.div>
      </div>
      <div className="textContainer">
        <h2>LADA NAMUANGRAK</h2>
        <h1>Web developer</h1>
        <div className="buttons">
          <button>See the Latest Works</button>
          <button>Contact Me</button>
        </div>
        <img src="scroll.png" alt="" />
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Developer
      </motion.div>
      <div className="imageContainer">
        <img src="lada.png" alt="avatar" width={600} />
      </div>
    </div>
  );
};

export default Avatar;
