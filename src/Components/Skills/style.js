import styled from "styled-components";
import skillsBackground from "../../assets/skillsBackground.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 618px;
  background: url(${skillsBackground});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 15px;
  margin-top: 35px;

  h1 {
    position: relative;
    bottom: 21px;
    width: 90px;
    margin-left: 40px;
    align-self: baseline;
  }
`;

export const Card = styled.div`
  width: 78%;
  height: 32%;
  background-color: white;
  border-radius: 5px;
  margin-top: ${(props) => (props.backend ? "30px" : "20px")};
  max-width: 390px;
  min-height: ${(props) => (props.backend ? "245px" : "200px")};
  position: ${(props) => (props.backend ? "relative" : "")};

  .skillContainer {
    display: flex;
    width: 96%;
    height: ${(props) => (props.backend ? "65%" : "55%")};
    margin: 20px 0px 0px 10px;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-left: 10px;
  }

  h2 {
    color: ${(props) => (props.backend ? "var(--purple)" : "var(--lightblue)")};
    font-size: 20px;
    margin: 22px 0px 0px 20px;
    width: 120px;
  }

  .skill {
    color: ${(props) => (props.backend ? "#6047AF" : "var(--lightblue)")};
    background-color: ${(props) => (props.backend ? "#B198FF" : "#2b5fda6b")};
    height: 31px;
    font-size: 12px;
    padding: 0px 11px 0px 11px;
    display: flex;
    align-items: center;
    border-radius: 3px;
    margin-right: 11px;
    font-weight: bold;
  }

  a {
    color: #e2e2e2;
    background: white;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 3px;
    font-weight: bold;
    background-color: #8864f9;
    position: absolute;
    top: 265px;
    left: 1px;
  }

  .iconDownload {
    margin-left: 4px;
  }
`;
