import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  max-height: 465px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoursesBox = styled.div`
  width: 65%;
  height: 70%;
  position: relative;
  padding: 20px;
  background-color: #e3ddf6;
  border-radius: 4px;
  max-height: 280px;
  min-width: 295px;
  max-width: 355px;
  min-height: 230px;

  .retangle {
    position: absolute;
    left: -5px;
    top: 25px;
  }

  .coursesSection,
  .languagesSection {
    display: flex;
    flex-direction: column;
    height: 50%;
  }

  .languagesSection {
    height: 48%;
    margin-top: 5px;
  }

  .bookIcon {
    width: 20px;
    margin-top: 10px;
  }

  .languageIcon {
    width: 20px;
  }

  h2 {
    font-size: 12px;
    color: #5f5f5f;
    width: 50%;
    margin-top: 5px;
  }

  span {
    font-size: 10px;
    color: #5f5f5f;
  }

  .language {
    font-size: 16px;
    color: var(--bluecyan);
    font-weight: bold;
    margin-top: 10px;
    width: 50%;
  }
`;

export const Course = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  p {
    font-size: 16px;
    color: var(--bluecyan);
    font-weight: bold;
  }
`;
