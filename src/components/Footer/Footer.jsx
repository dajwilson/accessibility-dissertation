import React from "react";
import s from "./Footer.styles";

export const Footer = () => {
  return (
    <s.FooterContainer>
      <s.Button>Previous Chapter</s.Button>
      <s.Button>Previous Page</s.Button>
      <div> ~~~~ </div>
      <s.Button>Next Page</s.Button>
      <s.Button>Next Chapter</s.Button>
    </s.FooterContainer>
  );
};
