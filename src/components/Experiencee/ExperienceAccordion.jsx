import React from "react";
import ExperienceCard from "./ExperienceCard.jsx"; // Ensure this path is correct
import "./ExperienceAccordion.scss";
import { Accordion, Panel } from "baseui/accordion";

const ExperienceAccordion = ({
  sections,
  theme = { body: "#fff", text: "#000", headerColor: "#000" },
}) => {
  return (
    <div className="experience-accord">
      <Accordion>
        {sections.map((section) => {
          return (
            <Panel
              className="accord-panel"
              title={section.title}
              key={section.title}
              overrides={{
                Header: {
                  style: () => ({
                    backgroundColor: theme.body,
                    border: `1px solid ${theme.headerColor}`, // Use shorthand property
                    borderRadius: `5px`,
                    borderColor: `${theme.headerColor}`,
                    marginBottom: `3px`,
                    fontFamily: "Google Sans Regular",
                    color: `${theme.text}`,
                    ":hover": {
                      color: `${theme.secondaryText}`,
                    },
                  }),
                },
                Content: {
                  style: () => ({
                    backgroundColor: theme.body,
                    color: theme.text,
                  }),
                },
              }}
            >
              {section.experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} theme={theme} />
              ))}
            </Panel>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExperienceAccordion;
