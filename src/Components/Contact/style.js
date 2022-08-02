import styled from "styled-components";
import background from "../../assets/backgroundContact.svg";

export const Container = styled.div`
  background-image: url(${background});
  height: 23vh;
  background-repeat: repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 235px;

  .contactBox {
    width: 67%;
    height: 90%;
    min-width: 318px;
    max-width: 380px;
  }

  h1 {
    width: 50%;
  }

  p {
    width: 253px;
    font-size: 14px;
    margin-top: 15px;
    letter-spacing: 0.04rem;
    line-height: 18px;
    position: relative;
  }

  h1,
  p {
    margin-left: 4px;
  }

  .contactLinksBox {
    margin-top: 30px;
    width: 25%;
    display: flex;
    justify-content: space-between;
    min-width: 100px;
    margin-left: 4px;
  }

  .linkedinIcon,
  .gitIcon,
  .emailIcon {
    color: #4b4c6e;
    width: 25px;
    height: 25px;
  }

  .hand {
    position: absolute;
    left: 276px;
    top: 0px;
    width: 33px;
    height: 40px;
    color: #4b4c6e;
    transform: scaleX(-1);
  }
`;
