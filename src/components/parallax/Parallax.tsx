import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #a3c4f3, #8eecf5)"
            : "linear-gradient(180deg, #a3c4f3, #90dbf4)",
      }}
    >
      <motion.div className="stars" style={{ x: xBg }}></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div className="mountains"></motion.div>{" "}
      <motion.h1 style={{ y: yBg }}>
        {type === "experience" ? "Who Am I?" : "What I Did?"}
      </motion.h1>
    </div>
  );
};

export default Parallax;
