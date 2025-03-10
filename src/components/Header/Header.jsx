import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const onMouseEnter = (event, highlight) => {
  event.target.style.color = highlight;
};

const onMouseOut = (event) => {
  event.target.style.color = ""; // Reset to default color
};

const HeaderLink = ({ to, children, theme }) => {
  return (
    <li>
      <HashLink
        to={to}
        tag={Link}
        activeStyle={{ fontWeight: "bold" }}
        style={{ color: theme.text }}
        onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
        onMouseOut={(event) => onMouseOut(event)}
      >
        {children}
      </HashLink>
    </li>
  );
};

const Header = ({ theme }) => {
  const { body, text, highlight } = theme;
  const link = "/home"; // Define the link variable

  return (
    <motion.div top duration={1000} distance="20px">
      <div>
        <header className="header">
          <HashLink to={link} tag={Link} className="logo">
            <span className="logo-name" style={{ color: text }}>
              Olanrewaju
            </span>
          </HashLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: body }}>
            <HeaderLink to="/#about" theme={{ body, text, highlight }}>
              About me
            </HeaderLink>
            <HeaderLink to="/#skills" theme={{ body, text, highlight }}>
              Skills
            </HeaderLink>
            <HeaderLink to="/#projects" theme={{ body, text, highlight }}>
              Projects
            </HeaderLink>
            <HeaderLink to="/#experience" theme={{ body, text, highlight }}>
              Experience
            </HeaderLink>
            <HeaderLink to="/#education" theme={{ body, text, highlight }}>
              Education
            </HeaderLink>
            <HeaderLink to="/#contact" theme={{ body, text, highlight }}>
              Contact
            </HeaderLink>
          </ul>
        </header>
      </div>
    </motion.div>
  );
};

export default Header;
