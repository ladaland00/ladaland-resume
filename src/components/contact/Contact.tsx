import { motion, Variants } from "framer-motion";
import "./contact.scss";
import { SyntheticEvent } from "react";

const Contact = () => {
  const variants: Variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const onSendEmail = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact me!</motion.h1>
        <motion.div className="item">
          <motion.h3>Mail</motion.h3>
          <motion.p>ladamoneone@gmail.com</motion.p>
        </motion.div>
        <motion.div className="item">
          <motion.h3>Phone</motion.h3>
          <motion.p>+666 105 103 17</motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer">
        <form onSubmit={onSendEmail}>
          <input name="name" placeholder="Name..." type="text" />
          <input name="email" placeholder="Email..." type="email" />
          <textarea name="detail" placeholder="Detail..." />
          <button>Send</button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
