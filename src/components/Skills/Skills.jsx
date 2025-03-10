import "./Skills.scss";

const reactDescriptions = ["Latest", "Current", "Modern"];

export default function Skills() {
  return (
    <div className="Skill-dev">
      <h1 className="Skill-btn">My skills</h1>

      <h3>Some of my skills and technologies</h3>

      <div className="Skill-container">
        <div className="Skill-tool1">
          <h1>Frontend</h1>
          <h4>
            Html, css, JavaScript,TypeScript, Reactjs, Nextjs, Tailwind,
            Bootstrap, Material UI
          </h4>
        </div>
        <div className="Skill-tool1">
          <h1> Version Control / collaboration</h1>
          <h4>Git, Github, Bit Bucket, Slack,Discord, Teams, Trello</h4>
        </div>
        <div className="Skill-tool1">
          <h1> Programming and scripting</h1>
          <h4>
            JavaScript, Object oriented programming, Data structures and
            algorithms
          </h4>
        </div>
        <div className="Skill-tool1">
          <h1>Others</h1>
          <h4>Mathematics and Statistics, Vscode, Computer Engineering</h4>
        </div>
      </div>
    </div>
  );
}
