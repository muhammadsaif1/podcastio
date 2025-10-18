"use client";
import { motion } from "framer-motion";
const Fade = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      whileInView={{ opacity: 1, translateY: 0, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};
export default Fade;
