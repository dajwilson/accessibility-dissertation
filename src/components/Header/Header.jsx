import React from "react";
import s from "./Header.styles";

export const Header = ({ bookTitle, setShowModal }) => {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <s.HeaderContainer>
      <s.BookTitle>{bookTitle}</s.BookTitle>
      <s.UploadButton onClick={handleClick}>Upload</s.UploadButton>
    </s.HeaderContainer>
  );
};
