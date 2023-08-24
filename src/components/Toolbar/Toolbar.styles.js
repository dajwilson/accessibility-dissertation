import { styled } from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  background-color: lightgrey;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const SelectorLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: green;
  height: 50px;
  margin: 0px 10px;
  border-radius: 10%;
`;

const LabelText = styled.div`
  color: darkolivegreen;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: left;
  width: 75%;
`;

const s = {
  Wrapper,
  ButtonWrapper,
  Button,
  LabelText,
  SelectorLabelContainer,
  SelectContainer,
};

export default s;
