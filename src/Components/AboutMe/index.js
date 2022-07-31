import { Container } from "./style";
import block from "../../assets/block.svg";

const AboutMe = () => {
  return (
    <Container>
      <div className="boxContent">
        <img src={block} alt="block" />
        <h1>
          Olá, sou eu <br></br> Nicolly Kasuga!
        </h1>
        <p>
          Sou uma Desenvolvedora Full-Stack de São Paulo. Minha paixão é
          aprender, dos meus hobbies até minha profissão sou essa pessoa curiosa
          que sente prazer no que faz.
        </p>
      </div>
    </Container>
  );
};

export default AboutMe;
