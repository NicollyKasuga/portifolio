import logo from "./../../assets/logo.svg";
import { RiMenu3Fill, RiSunFill, RiSunLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Container, ModalContainer } from "./style";
import { useState } from "react";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [darkmode, setDarkMode] = useState(false);

  const handleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  const handleDarkMode = () => {
    console.log(darkmode);
    setDarkMode(!darkmode);
  };

  let sun;
  if (!darkmode) {
    sun = <RiSunFill className="sun" onClick={() => handleDarkMode()} />;
  } else {
    sun = <RiSunLine className="sun" onClick={() => handleDarkMode()} />;
  }

  let modalIcon;
  if (!modal) {
    modalIcon = (
      <RiMenu3Fill onClick={() => handleModal()} className="menuIcon" />
    );
  } else {
    modalIcon = (
      <AiOutlineClose onClick={() => handleModal()} className="menuIcon" />
    );
  }

  return (
    <>
      <Container modal={modal}>
        <img src={logo} alt="logo" className="logo" />
        <div>
          {sun}
          <h4>PT/ENG</h4>
          {modalIcon}
        </div>
      </Container>
      <ModalContainer modal={modal}>
        <h4>Quem sou eu</h4>
        <h4>Skills</h4>
        <h4>Projetos</h4>
        <button className="contactButton">
          CONTATO <IoIosArrowForward className="arrowButton" />
        </button>
      </ModalContainer>
    </>
  );
};

export default Header;
