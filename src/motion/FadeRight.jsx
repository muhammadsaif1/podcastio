"use client";
import { motion } from "framer-motion";
const FadeRight = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 70 }}
      whileInView={{ opacity: 1, translateX: 0, transition: { duration: 0.7 } }}
    >
      {children}
    </motion.div>
  );
};
export default FadeRight;
