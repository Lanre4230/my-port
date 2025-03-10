import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, DarkTheme, BaseProvider } from "baseui";
import About from "./components/About/About.jsx";
import Projects from "./components/Project/Projects.jsx";
import Form from "./components/Form/Form.jsx";
import DegreeList from "./components/Degree/Degree.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experiencee/Experience.jsx"; // Ensure consistent casing

const engine = new Styletron();

function App() {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <div className="App">
            <Header theme={theme} />

            <About />
            <Skills />
            <Projects />
            <Experience />
            <DegreeList theme={theme} />
            <Form />

            <Footer theme={theme} />
            {/* <Modal /> */}
          </div>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
