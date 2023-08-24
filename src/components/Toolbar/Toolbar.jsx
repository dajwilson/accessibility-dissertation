import React from "react";
import s from "./Toolbar.styles";

export const Toolbar = ({ setFontSize, setLineHeight, setFont }) => {
  return (
    <s.Wrapper>
      {/* NEED TO SET MINIMUM FONT SIZE AND LINE SPACE*/}

      <s.SelectorLabelContainer>
        <s.LabelText>Font Size:</s.LabelText>
        <s.ButtonWrapper>
          {/* When Decrease font size button pressed, setFontSize function parses current font size, returns font size - 0.1 */}
          <s.Button onClick={() => setFontSize((fontSize) => fontSize - 0.1)}>
            Decrease
          </s.Button>
          {/* When Increase font size button pressed, setFontSize function parses current font size, returns font size + 0.1 */}
          <s.Button onClick={() => setFontSize((fontSize) => fontSize + 0.1)}>
            Increase
          </s.Button>
        </s.ButtonWrapper>
      </s.SelectorLabelContainer>
      <s.SelectorLabelContainer>
        <s.LabelText>Line Height:</s.LabelText>
        <s.ButtonWrapper>
          {/* When Decrease line height button pressed, setLineHeight function parses current font size, returns line height - 0.5 */}
          <s.Button
            onClick={() => setLineHeight((lineHeight) => lineHeight - 0.5)}
          >
            Decrease
          </s.Button>
          {/* When Increase line height button pressed, setLineHeight function parses current font size, returns line height + 0.5 */}
          <s.Button
            onClick={() => setLineHeight((lineHeight) => lineHeight + 0.5)}
          >
            Increase
          </s.Button>
        </s.ButtonWrapper>
      </s.SelectorLabelContainer>
      {/* When drop down value changes setFont function changes font to current target.value of drop down list */}
      <s.SelectorLabelContainer>
        <s.LabelText>Font:</s.LabelText>
        <s.SelectContainer>
          <select onChange={(e) => setFont(e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Comic Sans MS">Comic Sans</option>
            <option value="Verdana">Verdana</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Century Gothic">Century Gothic</option>
          </select>
        </s.SelectContainer>
      </s.SelectorLabelContainer>
    </s.Wrapper>
  );
};
