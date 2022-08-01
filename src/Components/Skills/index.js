import { Container, Card } from "./style.js";
import cv from "../../assets/Nicolly_Cristina_Porfirio_Kasuga.pdf";
import { HiOutlineDownload } from "react-icons/hi";

const Skills = () => {
  return (
    <Container>
      <h1>Skills</h1>
      <Card>
        <h2>Front-end</h2>
        <div className="skillContainer">
          <div className="skill">JAVA SCRIPT</div>
          <div className="skill">REACT</div>
          <div className="skill">HTML5</div>
          <div className="skill">CSS3</div>
          <div className="skill">STYLED COMPONENTS</div>
        </div>
      </Card>
      <Card backend>
        <h2>Back-end</h2>
        <div className="skillContainer">
          <div className="skill">PYTHON</div>
          <div className="skill">NODE.JS</div>
          <div className="skill">EXPRESS</div>
          <div className="skill">FLASK</div>
          <div className="skill">DJANGO</div>
          <div className="skill">MONGODB</div>
          <div className="skill">POSTGRES</div>
        </div>
        <a href={cv} download="Nicolly_Cristina_Porfirio_Kasuga">
          DOWNLOAD CV <HiOutlineDownload className="iconDownload" />
        </a>
      </Card>
    </Container>
  );
};

export default Skills;
