import React from "react";
import "./Degree.scss";
import { motion } from "framer-motion";

const DegreeCard = ({ degree, theme }) => {
  return (
    <div className="degree-card">
      <motion.div
        initial={{ opacity: 1, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="card-body" style={{ width: "100%" }}>
          <div className="body-header">
            <p className="card-title">{degree.date}</p>
            <p className="card-title">{degree.degree}</p>
          </div>
          <div className="body-header-title">
            <p className="card-subtitle" style={{ color: theme.text }}>
              {degree.subtitle}
            </p>
            <h4 className="card-title" style={{ color: theme.text }}>
              {degree.title}
            </h4>
            <div className="card-subtitle" style={{ color: theme.text }}>
              {degree.description?.map((description, index) => (
                <span key={index}>
                  {`- ${description}`} <br />{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const DegreeList = ({ theme }) => {
  const degrees = [
    {
      date: "2020-2024",
      degree: "Bachelor's Degree",
      title: "Ladoke Akintola University of Technology.",
      subtitle: "BSc. in Computer Science",
      description: [
        "LAUTECH Ranks the best state university in Nigeria.",
        "Completed bachelor of science with distinctions.",
      ],
    },
    {
      date: "2015-2018",
      degree: "High school",
      title: "Ibadan City Model College",
      subtitle: "SSCE",
      description: [
        "The High School was mainly focus on the bases of science, mathematics, and Chemistry.",
        "There was also a good base on physics, mathematics and biology.",
        "Completed my high school with distinction.",
      ],
    },
  ];

  return (
    <div>
      {degrees.map((degree, index) => (
        <DegreeCard key={index} degree={degree} theme={theme} />
      ))}
    </div>
  );
};

export default DegreeList;
