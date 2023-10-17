import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Lada Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/ladaland00" target="_blank">
            <img src="/github.png" alt="" width="150" height="150" />
          </a>
          <a
            href="https://www.linkedin.com/in/lada-n-77ab9196/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" width="150" height="150" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
