import { styled } from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 15%;
  left: 20%;
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: pink;
  align-items: center;
  z-index: 2;
`;

const ModalTitleContainer = styled.div`
  background-color: red;
  height: 15%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  margin: 5px;
`;

const s = {
  ModalContainer,
  ModalTitleContainer,
  CloseButton,
};

export default s;
