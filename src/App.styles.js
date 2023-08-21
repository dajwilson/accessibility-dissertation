import styled from "styled-components";

const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize}rem;
  line-height: ${({ lineHeight }) => lineHeight}rem;
  font-family: ${({ font }) => font};
`;

const s = { Text };

export default s;
