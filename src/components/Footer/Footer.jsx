import React from "react";
import "./Footer.scss";
import { motion } from "framer-motion";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <motion.div>
        <div className="footer-text" style={{ color: props.theme.black }}>
          <span>All rights reserved.</span>
          <span style={{ fontSize: "24px" }}>&copy; </span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </motion.div>
    </div>
  );
}
