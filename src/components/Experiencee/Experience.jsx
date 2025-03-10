import React from "react";
import "./Experience.scss"; // Ensure this path is correct
import ExperienceAccordion from "./ExperienceAccordion.jsx"; // Ensure this path is correct
import { motion } from "framer-motion";

const Experience = ({ theme }) => {
  const sections = [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Frontend Developer",
          company: "KeenChess",
          company_url: "https://www.tiktok.com/en/",
          logo_path:
            "https://res.cloudinary.com/dvd8hlffl/image/upload/v1705025224/keenchess_xc71lv.png",
          duration: "March 2022 - Present",
          location: "Remote",
          description:
            "I design and implement visually engaging and user-friendly interfaces for their online platform, collaborating closely with design and development teams to translate wireframes and prototypes into functional code. I conduct rigorous testing to ensure compatibility and optimize performance, resulting in an enhanced user interface and increased customer satisfaction. Technologies used: Nextjs, Typescript.",
          color: "#c29332",
        },
        {
          title: "Frontend Developer",
          company: "TinyTime",
          company_url: "https://www.tiktok.com/en/",
          logo_path:
            "https://res.cloudinary.com/dvd8hlffl/image/upload/v1705025224/tinytime_oeunyj.png",
          duration: "Oct 2023 - Present",
          location: "Remote",
          description:
            " I design and implement visually engaging and user-friendly interfaces for their online platform. I develop multiple event-planning timers with exclusive eye-catching animations.Technologies used: Javascript (Ts), Tailwind, HTML, CSS, Nodejs.",
          color: "#8c60f0",
        },
        {
          title: "Coding Tutuor",
          company: "Superprof.com",
          logo_path:
            "data:image/png;base64,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",
          duration: "May 2023 - present",
          location: "Remote",
          description:
            " Teach dozens of people from different parts of the country frontend development. Implemented algorithmic logic to help clients in debugging and restructuring their existing code base.Technologies used - Javascript, TypeScript, CSS, HTML, MaterialUI.",
          color: "#ff6081",
        },
        {
          title: "Frontend Engineering intern",
          company: "Spindle tech Ng. Ltd.",
          logo_path:
            "https://res.cloudinary.com/dvd8hlffl/image/upload/v1673709145/My%20web%20images/spindac_ssfnfs.jpg",
          duration: "Jun 2023- Aug 2024",
          location: "Remote",
          description:
            "Built a user-friendly landing page. Reduced database querying time and redundancy by writing an intelligent algorithm that enables scalability and faster access to data. Worked on team and subscription features for dealers and payers. Technologies used - Javascript, Reactjs, Next.js.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteership",
      experiences: [
        {
          title: "Volunteer Developer",
          company: "Open Source Community",
          company_url: "https://www.opensource.org/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/Open_Source_Initiative_keyhole.svg",
          duration: "Jan 2022 - Present",
          location: "Remote",
          description:
            "Contributed to various open-source projects, improving code quality and adding new features. Collaborated with other developers to solve complex problems and enhance project functionality. Technologies used: JavaScript, React, Node.js.",
          color: "#00aaff",
        },
      ],
    },
  ];

  return (
    <div className="experience-main" id="experience">
      <p className="exp-button" style={{ textAlign: "center" }}>
        my experience
      </p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h2 style={{ textAlign: "center" }} className="exp-head">
          My work <span style={{ color: "rgb(16, 110, 234)" }}>experience</span>
        </h2>
        <ExperienceAccordion sections={sections} theme={theme} />
      </motion.div>
    </div>
  );
};

export default Experience;
