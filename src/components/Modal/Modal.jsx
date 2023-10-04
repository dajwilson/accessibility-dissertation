import React, { useState } from "react";
import s from "./Modal.styles";
import FocusTrap from "focus-trap-react";

export const Modal = ({ setShowModal, setText }) => {
  const [file, setFile] = useState(null);
  
  const handleClick = () => {
    setShowModal(false);
  };

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    file.text().then((response) => {
      setText(response);
    });
    setShowModal(false);
  };

//   TODO: format buttons 
  return (
    <FocusTrap>
      <s.ModalContainer>
        <s.CloseButton onClick={handleClick}>X</s.CloseButton>
        <s.ModalTitleContainer>
          <h1>Upload a text file</h1>
        </s.ModalTitleContainer>
        <div>
          <input type="file" onChange={onFileChange} />
          <button onClick={onFileUpload}>Upload!</button>
        </div>
      </s.ModalContainer>
    </FocusTrap>
  );
};
