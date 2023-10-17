import { motion, Variants } from "framer-motion";
import "./contact.scss";
import { SyntheticEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    console.log(
      process.env.EMAIL_PUBLIC_KEY,
      process.env.TEMPLATE_ID,
      process.env.EMAIL_PUBLIC_KEY
    );
    if (formRef?.current)
      emailjs
        .sendForm(
          process.env.SERVICE_ID || "",
          process.env.TEMPLATE_ID || "",
          formRef?.current,
          process.env.EMAIL_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
            setError(false);
          },
          (error) => {
            console.log(error.text);
            setSuccess(false);
            setError(true);
          }
        );
  };
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact me!</motion.h1>
        <motion.div className="item">
          <motion.h3>Mail</motion.h3>
          <motion.p>ladamoneone@gmail.com</motion.p>
        </motion.div>
        <motion.div className="item">
          <motion.h3>Phone</motion.h3>
          <motion.p>+66 610 510 317</motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer">
        <form onSubmit={onSendEmail} ref={formRef}>
          <input name="name" placeholder="Name..." type="text" required />
          <input name="email" placeholder="Email..." type="email" required />
          <textarea name="detail" placeholder="Detail..." required />
          <button>Send</button>
          {error && "Failed"}
          {success && "Success"}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
