import React from "react";
import "./GithubRepoCard.scss";
import { motion } from "framer-motion";

export default function GithubRepoCard({
  repo,
  theme = { body: "#fff", text: "#000" },
}) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div key={repo.id} className="repo-card-div" style={{}}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="repo-image">
          <img src={repo.image} alt={repo.alt} />
        </div>
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>
        <p className="repo-description" style={{ color: theme.text }}>
          {repo.description}
        </p>
        <div className="repo-details">
          <a href={repo.live} className="Link">
            <button>Live Demo</button>
          </a>
          <a href={repo.project} className="Link">
            <button>Github Link</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
