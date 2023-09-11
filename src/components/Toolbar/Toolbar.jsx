import React from "react";
import { useState } from "react";
import s from "./Toolbar.styles";
import themes from "../styles/Themes";
import modes from "../styles/Modes";
import { ChromePicker } from "react-color";

export const Toolbar = ({
  setFontSize,
  setLineHeight,
  setFont,
  setTheme,
  theme,
}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [displayBackgroundColorPicker, setDisplayBackgroundColorPicker] =
    useState(false);

  const handleModeChange = (value) => {
    setFont(value.fontFamily);
    setLineHeight(value.lineHeight);
    setFontSize(value.fontSize);
    setTheme(value.theme);
  };

  const handleColourChange = (hexColour) => {
    const newTheme = {
      ...theme,
      ...hexColour,
    };
    setTheme(newTheme);
  };

  const handleBackgroundClick = () => {
    setDisplayBackgroundColorPicker(!displayBackgroundColorPicker);
    setDisplayColorPicker(false);
  };

  const handleTextClick = () => {
    setDisplayColorPicker(!displayColorPicker);
    setDisplayBackgroundColorPicker(false);
  };

  return (
    <s.Wrapper>
      {/* NEED TO SET MINIMUM FONT SIZE AND LINE SPACE*/}
      {/* CHANGE LINE HEIGHT WITH FONT SIZE OR NAH */}

      <s.SelectorLabelContainer>
        <s.LabelText>Font Size:</s.LabelText>
        <s.ButtonWrapper>
          {/* When Decrease font size button pressed, setFontSize function parses current font size, returns font size - 0.1 */}
          <s.Button
            onClick={() => {
              setFontSize((fontSize) => fontSize - 0.1);
              setLineHeight((lineHeight) => lineHeight - 0.3);
            }}
          >
            -
          </s.Button>
          {/* When Increase font size button pressed, setFontSize function parses current font size, returns font size + 0.1 */}
          <s.Button
            onClick={() => {
              setFontSize((fontSize) => fontSize + 0.1);
              setLineHeight((lineHeight) => lineHeight + 0.3);
            }}
          >
            +
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
            -
          </s.Button>
          {/* When Increase line height button pressed, setLineHeight function parses current font size, returns line height + 0.5 */}
          <s.Button
            onClick={() => setLineHeight((lineHeight) => lineHeight + 0.5)}
          >
            +
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
      {/* TODO: ADD SUPPORT FOR MANY THEMES WITH .MAP */}
      <s.SelectorLabelContainer>
        <s.LabelText>Theme:</s.LabelText>
        <s.SelectContainer>
          <select
            onChange={(e) => {
              setTheme(JSON.parse(e.target.value));
            }}
          >
            <option value={JSON.stringify(themes.lightTheme)}>Light</option>
            <option value={JSON.stringify(themes.darkTheme)}>Dark</option>
          </select>
        </s.SelectContainer>
      </s.SelectorLabelContainer>
      <s.SelectorLabelContainer>
        <s.LabelText>Mode:</s.LabelText>
        <s.SelectContainer>
          <select
            onChange={(e) => {
              handleModeChange(JSON.parse(e.target.value));
            }}
          >
            <option value={JSON.stringify(modes.defaultMode)}>Default</option>
            <option value={JSON.stringify(modes.dyslexicMode)}>Dyslexic</option>
          </select>
        </s.SelectContainer>
      </s.SelectorLabelContainer>
      <s.ButtonWrapper>
        <label>Background colour</label>
        <s.BackgroundColourButton onClick={handleBackgroundClick} />
      </s.ButtonWrapper>
      <s.ButtonWrapper>
        <label>Text colour</label>
        <s.ColourButton onClick={handleTextClick} />
      </s.ButtonWrapper>
      {displayBackgroundColorPicker ? (
        <s.ColourPickerWrapper>
          <ChromePicker
            color={theme.background}
            onChange={(e) => handleColourChange({ background: e.hex })}
          />
        </s.ColourPickerWrapper>
      ) : null}
      {displayColorPicker ? (
        <s.ColourPickerWrapper>
          <ChromePicker
            color={theme.color}
            onChange={(e) => handleColourChange({ color: e.hex })}
          />
        </s.ColourPickerWrapper>
      ) : null}
    </s.Wrapper>
  );
};
