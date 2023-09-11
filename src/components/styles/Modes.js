import themes from "./Themes";

const defaultMode = {
  fontSize: 1,
  lineHeight: 1,
  fontFamily: "Arial",
  theme: themes.lightTheme,
};

const dyslexicMode = {
  fontSize: 2,
  lineHeight: 2,
  fontFamily: "Comic Sans MS",
  theme: themes.darkTheme,
};

const modes = {
  defaultMode,
  dyslexicMode,
};

export default modes;
