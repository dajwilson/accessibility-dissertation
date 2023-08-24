import { styled } from "styled-components";

const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: pink;
  height: 5vh;
  align-items: center;
`;

const Button = styled.button`
  height: 50%;
`;

const s = { FooterContainer, Button };

export default s;
