import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .titleContainer {
    align-self: baseline;
    margin-left: 40px;
    margin-top: 30px;
  }

  .noDisplay {
    display: none;
  }
`;

export const ProjectsContainer = styled.div`
  height: 80%;
  width: 85%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;

  .headerProjects {
    display: flex;
    width: 80%;
    align-self: center;
    justify-content: space-between;
    position: relative;
  }

  .headerTitle {
    font-size: 18px;
  }

  .blockProjects {
    width: 20px;
    height: 7px;
    position: absolute;
    right: 57px;
    top: 7px;
    z-index: 10;
    background-image: unset;
  }

  .stackProjects {
    font-size: 11px;
    align-self: center;
    color: #6047af;
    text-transform: uppercase;
    z-index: 11;
    width: 65px;
  }

  .midiaSection {
    margin-top: 20px;
    margin-bottom: 30px;
    height: 35%;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .arrowBack {
    position: absolute;
    top: 50%;
    left: 5px;
    background: transparent;
  }

  .arrowForward {
    position: absolute;
    right: 5px;
    top: 50%;
    background: transparent;
  }

  .arrowBack,
  .arrowForward {
    background: #e3ddf6;
    border-radius: 18px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video,
  .imagem {
    width: 80%;
  }

  .buttonSection {
    width: 80%;
    display: flex;
    align-content: center;
    align-self: center;
  }

  .demoLink {
    width: 63px;
    display: inline-block;
    text-align: center;
    background-color: #a6bcef;
    font-size: 13px;
    height: 25px;
    padding: 5px;
    border-radius: 3px;
    color: #2b5fda;
    font-weight: bold;
    margin-right: 5px;
  }

  .gitLink {
    width: 49px;
    display: inline-block;
    text-align: center;
    background-color: #a6bcef;
    font-size: 13px;
    height: 25px;
    padding: 5px;
    border-radius: 3px;
    color: #2b5fda;
    font-weight: bold;
    margin-right: 5px;
  }

  .buttonTecnologies {
    width: 117px;
    background-color: #a6bcef;
    height: 25px;
    padding: 2px;
    border-radius: 3px;
    color: #2b5fda;
    align-self: center;
    font-size: 13px;
  }

  .buttonObjective {
    width: 94px;
    background-color: #a6bcef;
    height: 25px;
    padding: 2px;
    border-radius: 3px;
    color: #2b5fda;
    align-self: center;
    font-size: 13px;
  }

  .tecnologiesSection {
    margin-top: 25px;
    height: 100px;
    width: 80%;
    align-self: center;
  }

  .tecnologiesTitle {
    font-size: 18px;
    width: 50%;
  }

  .tecnologiesParagraph {
    margin-top: 15px;
    width: 100%;
  }

  .infoSection {
    margin-top: 25px;
    height: 42%;
    width: 80%;
    align-self: center;
    display: flex;
    flex-direction: column;
  }

  .problemContainer,
  .solutionContainer {
    height: 50%;
    display: flex;
    flex-direction: column;
  }

  .solutionContainer {
    margin-top: 15px;
  }

  .tecnologiesTitle,
  .solutionsTitle,
  .problemTitle {
    font-size: 18px;
    width: 50%;
  }

  .tecnologiesParagraph,
  .solutionParagraph,
  .problemParagraph {
    width: 100%;
    margin-top: 12px;
    overflow-wrap: break-word;
    font-size: 14px;
  }
`;
