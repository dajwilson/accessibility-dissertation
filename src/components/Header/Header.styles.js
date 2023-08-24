import { styled } from "styled-components";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: pink;
`;

const BookTitle = styled.h1`
  color: red;
`;

const s = { HeaderContainer, BookTitle };

export default s;
