import React from "react";
import s from "./Modal.styles";
import FocusTrap from "focus-trap-react";

export const Modal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };
  return (
    <FocusTrap>
      <s.ModalContainer>
        <s.CloseButton onClick={handleClick}>X</s.CloseButton>
        <s.ModalTitleContainer>
          <h1>Upload a text file</h1>
        </s.ModalTitleContainer>
        <p>
          Here is a focus trap <a href="#">with</a> <a href="#">some</a>{" "}
          <a href="#">focusable</a> parts.
        </p>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
      </s.ModalContainer>
    </FocusTrap>
  );
};
