import styled from "styled-components";

const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize}rem;
  line-height: ${({ lineHeight }) => lineHeight}rem;
  font-family: ${({ font }) => font};
  width: 80%;
  padding-right: 10rem;
`;

const TextWrapper = styled.div`
  overflow-y: scroll;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const s = {
  Text,
  HorizontalContainer,
  Wrapper,
  TextWrapper,
};

export default s;
