import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Courses from "./Components/Courses";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import GlobalStyle from "./GlobalStyle/style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Courses />
      <Contact />
    </>
  );
}

export default App;
