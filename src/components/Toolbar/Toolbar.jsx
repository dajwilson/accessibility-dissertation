import React from "react";
import s from "./Toolbar.styles";

export const Toolbar = ({ setFontSize, setLineHeight, setFont }) => {
  return (
    <s.Wrapper>
      {/* NEED TO SET MINIMUM FONT SIZE AND LINE SPACE*/}

      <div>
        <div>Font Size:</div>
        {/* When Decrease font size button pressed, setFontSize function parses current font size, returns font size - 0.1 */}
        <button onClick={() => setFontSize((fontSize) => fontSize - 0.1)}>
          Decrease
        </button>
        {/* When Increase font size button pressed, setFontSize function parses current font size, returns font size + 0.1 */}
        <button onClick={() => setFontSize((fontSize) => fontSize + 0.1)}>
          Increase
        </button>
      </div>
      <div>
        <div>Line Height:</div>
        {/* When Decrease line height button pressed, setLineHeight function parses current font size, returns line height - 0.5 */}
        <button onClick={() => setLineHeight((lineHeight) => lineHeight - 0.5)}>
          Decrease
        </button>
        {/* When Increase line height button pressed, setLineHeight function parses current font size, returns line height + 0.5 */}
        <button onClick={() => setLineHeight((lineHeight) => lineHeight + 0.5)}>
          Increase
        </button>
      </div>
      {/* When drop down value changes setFont function changes font to current target.value of drop down list */}
      <div>
        <div>Font:</div>
        <select onChange={(e) => setFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Comic Sans MS">Comic Sans</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Century Gothic">Century Gothic</option>
        </select>
      </div>
    </s.Wrapper>
  );
};
