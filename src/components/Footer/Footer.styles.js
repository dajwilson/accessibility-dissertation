import { styled } from "styled-components";

const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: pink;
  height: 7vh;
  align-items: center;
  background-color: ${(props) => props.theme.footerBackground};
  color: ${(props) => props.theme.footerText};
`;

const Button = styled.button`
  height: 50%;
  margin: 0rem 1rem;
`;

const s = { FooterContainer, Button };

export default s;
