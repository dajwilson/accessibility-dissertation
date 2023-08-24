import React from "react";
import s from "./Header.styles";

export const Header = ({ bookTitle }) => {
  return (
    <s.HeaderContainer>
      <s.BookTitle>{bookTitle}</s.BookTitle>
    </s.HeaderContainer>
  );
};
