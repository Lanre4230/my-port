import reactImg from "../../assets/lanre.jpeg";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about-div">
        <h1>Olabamiji Olanrewaju</h1>

        <h2>FrontEnd Engineer</h2>

        <p>
          I am a front-end engineer with 3+ years of experience, proficient in a
          wide range of technologies. I have a strong grasp of modern software
          development best practices, tools, algorithms, and concepts. Beyond
          coding, I’m passionate about building communities and sharing
          knowledge, fostering growth for both myself and others. With a mindset
          of continuous learning, I’m always exploring new ways to improve and
          stay ahead in the ever-evolving tech landscape.
        </p>
        <button className="about-button">
          <a
            href="https://drive.google.com/file/d/1aFnFwGOo8Lz5kOcAz3BjIlZkjDjoAwIV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </button>
      </div>
      <div className="image-div">
        <img src={reactImg} alt="Stylized atom" />
      </div>
    </section>
  );
}
