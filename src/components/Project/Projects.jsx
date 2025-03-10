import "./Projects.scss";
import React from "react";
import GithubRepoCard from "./GithubRepoCard";
import Button from "./Button";

export default function Projects({ theme = { body: "#fff", text: "#000" } }) {
  const data = [
    {
      id: "1",
      name: "Dice game",
      project: "https://github.com/Lanre4230",
      live: "https://dice-game-beta-ruby.vercel.app/",
      alt: "Dice game",
      description:
        "This app takes the IP address as input in the search bar and process it's location on the map.",
      image:
        "https://github.com/Lanre4230/dice-game/blob/master/Capturedice.PNG?raw=true",
    },
    {
      id: "3",
      name: "Movie App",
      project: "https://github.com/Lanre4230/movie--app.git",
      live: "https://movie-app-five-mocha-69.vercel.app/",
      alt: "Movie app image",
      description:
        "This app is a  movie search engine. It comprises of all the movies you can think of.",
      image:
        "https://github.com/Lanre4230/movie--app/blob/master/Capture.PNG?raw=true",
    },

    {
      id: "2",
      name: "IP Address Tracker",
      project: "https://github.com/Lanre4230/ip-tracker.git",
      live: "https://ip-tracker-nu-amber.vercel.app/",
      alt: "Ip Tracker image",
      description:
        "This app takes the IP address as input in the search bar and process it's location on the map.",
      image:
        "https://github.com/Lanre4230/ip-tracker/blob/main/assets/images/ip%20address.PNG?raw=true",
    },

    {
      id: "5",
      name: "Real Estate website design",
      project: "https://github.com/Lanre4230/lantex.git",
      live: "https://lantex.vercel.app/",
      alt: "real estate website design",
      description:
        "This is just a design of a real estate website. it is not funtional yet ",
      image:
        "https://github.com/Lanre4230/lantex/blob/master/image/lantex.PNG?raw=true",
    },

    {
      id: "6",
      name: "Language Translator",
      project: "https://github.com/Lanre4230/Translator.git",
      live: "https://translator-ecru-one.vercel.app/",
      alt: "language trans app image",
      description:
        "This app can translate over 50 different languages and you can also listen to languages intonations",
      image:
        "https://github.com/Lanre4230/Translator/blob/master/trans.PNG?raw=true",
    },
    {
      id: "2",
      name: "React Quiz App",
      project: "https://github.com/Lanre4230/quiz-app.git",
      alt: "Quiz app image",
      live: "https://quiz-app-peach-two.vercel.app/",
      description:
        "This app process a multi-choice questions from different field and it shows the result after each attempts.",
      image:
        "https://github.com/Lanre4230/quiz-app/blob/master/quiz.PNG?raw=true",
    },
  ];

  return (
    <div className="projects-main" id="projects">
      <p className="projects-button">my projects</p>
      <h2>
        Some of my <span style={{ color: "rgb(16, 110, 234)" }}>projects</span>{" "}
        and technologies
      </h2>
      <div className="repo-cards-div-main">
        {data.map((repo) => {
          return <GithubRepoCard key={repo.id} repo={repo} theme={theme} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={"https://github.com/Lanre4230"}
        theme={theme}
      />
    </div>
  );
}
