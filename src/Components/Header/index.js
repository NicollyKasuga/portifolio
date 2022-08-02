import logo from "./../../assets/logo.svg";
import { RiMenu3Fill, RiSunFill, RiSunLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Container, ModalContainer } from "./style";
import { useState } from "react";
import { Link } from "react-scroll";

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
        <Link
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleModal()}
        >
          Quem sou eu
        </Link>
        <Link
          activeClass="skills"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleModal()}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleModal()}
        >
          Projetos
        </Link>
        <Link
          activeClass="active"
          to="courses"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleModal()}
        >
          Cursos
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="contactButton"
          onClick={() => handleModal()}
        >
          CONTATO <IoIosArrowForward className="arrowButton" />
        </Link>
      </ModalContainer>
    </>
  );
};

export default Header;
