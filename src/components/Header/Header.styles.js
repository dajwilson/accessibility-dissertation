import { styled } from "styled-components";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerText};
`;

const BookTitle = styled.h1``;

const UploadButton = styled.button`
  position: absolute;
  right: 0;
  top: 40%;
  margin-right: 20px;
`;

const s = { HeaderContainer, BookTitle, UploadButton };

export default s;
