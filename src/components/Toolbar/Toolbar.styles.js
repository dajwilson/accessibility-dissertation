import { styled } from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  background-color: lightgrey;
  width: fit-content;
  gap: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px 10px;
`;

const SelectorLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.toolbarButton};
  height: 40px;
  margin: 0px 10px;
  border-radius: 10%;
  border-color: ${(props) => props.theme.toolbarButtonBorder};
  font-size: 2rem;
`;

const LabelText = styled.div``;

const SelectContainer = styled.div`
  display: flex;
  align-items: left;
  width: 75%;
`;

const ColourButton = styled.button`
  background-color: ${(props) => props.theme.color};
  height: 20px;
  width: 20px;
  border: 3px solid white;
`;

const BackgroundColourButton = styled.button`
  background-color: ${(props) => props.theme.background};
  height: 20px;
  width: 20px;
  border: 3px solid white;
`;

const ColourPickerWrapper = styled.div`
  width: 25%;
`;

const s = {
  Wrapper,
  ButtonWrapper,
  Button,
  LabelText,
  SelectorLabelContainer,
  SelectContainer,
  ColourButton,
  BackgroundColourButton,
  ColourPickerWrapper,
};

export default s;
