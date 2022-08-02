import block from "../../assets/block1.svg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { Container, ProjectsContainer } from "./style";
import nyanVideo from "../../assets/nyan.mp4";
import gatoGordo from "../../assets/gato.jpeg";

const Projects = () => {
  const data = [
    {
      index: 0,
      title: "Sou voluntário",
      stack: "front-end",
      tipoMidia: "video",
      midia: nyanVideo,
      demo: "blablabla",
      git: "gitbla",
      tecnologias: ["styled components", "java script", "react"],
      problema:
        "ljiaslfijsdlfijsldifj lsidjfploisjdifolisjdfloijsdfloijisdflkjisdlfjsldfjçlsdfjçlosihdfçlohjshdf",
      solucao:
        "skdhfçsdfhçosihdjfçoisdjfçoisdfjhuçoisjhdfçowiejrhçoqwijrwpeorsloijfgkljdsznv,mcxnvçokishfrçkiswhefrtçkoihs",
    },
    {
      index: 1,
      title: "Clube do livro",
      stack: "back-end",
      tipoMidia: "imagem",
      midia: gatoGordo,
      demo: "2blablabla",
      git: "2gitbla",
      tecnologias: ["2styled components", "2java script", "react"],
      problema:
        "22222jiaslfijsdlfijsldifj lsidjfploisjdifolisjdfloijsdfloijisdflkjisdlfjsldfjçlsdfjçlosihdfçlohjshdf",
      solucao:
        "22222222kdhfçsdfhçosihdjfçoisdjfçoisdfjhuçoisjhdfçowiejrhçoqwijrwpeorsloijfgkljdsznv,mcxnvçokishfrçkiswhefrtçkoihs",
    },
  ];

  const [infoToogle, setInfoToogle] = useState(false);
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const preview = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleInfoToogle = (e) => {
    e.preventDefault();
    setInfoToogle(!infoToogle);
  };

  return (
    <Container>
      <h1 className="titleContainer">Projetos</h1>
      {data.map((project, index) => {
        return (
          <ProjectsContainer
            className={index !== current ? "noDisplay" : ""}
            key={index}
          >
            {index === current && (
              <>
                <div className="headerProjects">
                  <h2 className="headerTitle">{project.title}</h2>
                  <img className="blockProjects" src={block} alt="" />
                  <h3 className="stackProjects">{project.stack}</h3>
                </div>
                <div className="midiaSection">
                  <button className="arrowBack" onClick={() => next()}>
                    <IoIosArrowBack />
                  </button>
                  {project.tipoMidia === "video" ? (
                    <video
                      className="video"
                      src={project.midia}
                      controls
                    ></video>
                  ) : (
                    <img
                      className="imagem"
                      src={project.midia}
                      alt={project.title}
                    ></img>
                  )}
                  <button className="arrowForward" onClick={() => preview()}>
                    <IoIosArrowForward />
                  </button>
                </div>
                <div className="buttonSection">
                  {project.demo && (
                    <a href={project.demo} target="blank" className="demoLink">
                      DEMO
                    </a>
                  )}
                  {project.git && (
                    <a href={project.git} target="blank" className="gitLink">
                      GIT
                    </a>
                  )}
                  <button
                    className={
                      infoToogle ? "buttonTecnologies" : "buttonObjective"
                    }
                    onClick={(e) => handleInfoToogle(e)}
                  >
                    {infoToogle ? "TECNOLOGIAS" : "OBJETIVO"}
                  </button>
                </div>
                {!infoToogle ? (
                  <div className="infoSection">
                    <div className="problemContainer">
                      <h2 className="problemTitle">Problema:</h2>
                      <p className="problemParagraph">{project.problema}</p>
                    </div>

                    <div className="solutionContainer">
                      <h2 className="solutionsTitle">Solução:</h2>
                      <p className="solutionParagraph">{project.solucao}</p>
                    </div>
                  </div>
                ) : (
                  <div className="tecnologiesSection">
                    <h2 className="tecnologiesTitle">Tecnologias:</h2>
                    <p className="tecnologiesParagraph">
                      {project.tecnologias.join(", ")}
                    </p>
                  </div>
                )}
              </>
            )}
          </ProjectsContainer>
        );
      })}
    </Container>
  );
};

export default Projects;
