import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height 8vh;
  min-height: 65px;
  background: white;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 5%;

    .logo{
        width: 75px;
        height: 100%;
        align-self: center;
    }

    div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        justify-items: center;
        align-items: center;
        grid-template-areas:
        "a b c";
        min-width: 205px;
        max-width: 265px;
        
    .sun{
        align-self: center;
        height: 37px;
        width: 25px;
        display: ${(props) => (props.modal ? "" : "none")};
        grid-area: a;
        cursor: pointer;
        color: var(--bluecyan);
    }

    .menuIcon{
        height: 23px;
        width: 32px;
        align-self: center;
        color: var(--grey);
        grid-area: c;
        cursor: pointer;
    }

    h4{
        display: ${(props) => (props.modal ? "" : "none")};
        grid-area: b;
        cursor: pointer
    }

    }
 

    
`;

export const ModalContainer = styled.div`
  background: white;
  position: absolute;
  width: 100vw;
  height: 45vw;
  min-height: 215px;
  max-height: 264px;
  border-radius: 0px 0px 8px 8px;
  border-top: 3px solid #dadada;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "d"
    "e"
    "f"
    "g"
    "h";
  justify-items: center;
  align-items: center;
  display: ${(props) => (props.modal ? "" : "none")};
  box-sizing: content-box;
  padding-bottom: 12px;

  .contactButton {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    border-radius: 11px;
    border-right-color: #8a75cd;
    border-left-color: #2b5fda;
    background: linear-gradient(
          to left,
          rgb(182, 153, 230) 0%,
          #8460f5 70%,
          #2b5fda 100%
        )
        top/100% 2px,
      linear-gradient(to left, #b198ff 0%, #2b5fda 100%) bottom/100% 2px;
    background-repeat: repeat, repeat;
    background-repeat: no-repeat;
    width: 120px;
    height: 37px;
    font-size: 14px;
    cursor: pointer;
  }

  .arrowButton {
    margin-left: 2px;
  }

  a {
    color: var(--bluecyan);
    font-weight: bold;
    cursor: pointer;
  }
`;
