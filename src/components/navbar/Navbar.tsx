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
          Lada N.
        </motion.span>
        <div className="social">
          <a href="">linklind</a>
          <a href="">Github</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
