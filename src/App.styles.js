import styled from "styled-components";

const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize}rem;
  line-height: ${({ lineHeight }) => lineHeight}rem;
  font-family: ${({ font }) => font};
`;

const TextWrapper = styled.div`
  padding: 20px 50px;
  overflow-y: scroll;
  height: 80vh;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
`;

const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: pink;
`;

const s = {
  Text,
  HorizontalContainer,
  Wrapper,
  Footer,
  TextWrapper,
};

export default s;
