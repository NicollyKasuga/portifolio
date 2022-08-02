import book from "../../assets/book.svg";
import language from "../../assets/languages.svg";
import retangle from "../../assets/rectangle.svg";
import { Container, CoursesBox, Course } from "./style";

const Courses = () => {
  return (
    <Container>
      <CoursesBox>
        <img className="retangle" src={retangle} alt="" />
        <div className="coursesSection">
          <img className="bookIcon" src={book} alt="" />
          <h2>CURSOS INTENSIVOS</h2>
          <Course>
            <p>Desenvolvimento Full-Stack</p>
            <span>2.000h</span>
          </Course>
        </div>
        <div className="languagesSection">
          <img className="languageIcon" src={language} alt="" />
          <h2>IDIOMAS</h2>
          <p className="language">
            Inglês<span>/Intermediário</span>
          </p>
        </div>
      </CoursesBox>
    </Container>
  );
};

export default Courses;
