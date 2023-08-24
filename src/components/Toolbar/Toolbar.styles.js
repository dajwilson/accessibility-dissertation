import { styled } from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  height: 70vh;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  background-color: green;
`;

const LabelText = styled.div`
  color: darkolivegreen;
`;

const s = {
  Wrapper,
  ButtonWrapper,
  Button,
  LabelText
};

export default s;
