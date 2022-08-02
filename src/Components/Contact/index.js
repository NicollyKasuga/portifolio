import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdWavingHand } from "react-icons/md";
import { Container } from "./style";

const Contact = () => {
  return (
    <Container>
      <div className="contactBox">
        <h1>Contato</h1>
        <p>
          Estou disponível para novas oportunidades . Entre em contato comigo e
          marcamos uma conversa!
          <MdWavingHand className="hand" />
        </p>
        <div className="contactLinksBox">
          <a href="https://www.linkedin.com/in/nicollykasuga/">
            <BsLinkedin className="linkedinIcon" />
          </a>
          <a href="https://github.com/NicollyKasuga">
            <BsGithub className="gitIcon" />
          </a>
          <a href="mailto:nicollyporfirio12@gmail.com">
            <SiGmail className="emailIcon" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
