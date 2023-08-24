import { useEffect, useState } from "react";
import "./App.css";
import { Toolbar } from "./components/Toolbar/Toolbar";
import s from "./App.styles";
import book from "./assets/Dracula.txt";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  // TODO: Increase line height when font size is increased
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);
  const [font, setFont] = useState("Arial");
  const bookTitle = "Dracula";

  useEffect(() => {
    fetch(book)
      .then((r) => r.text())
      .then((response) => {
        setText(response);
      });
  });
  // TODO: sort div formating

  return (
    <s.Wrapper>
      <Header bookTitle={bookTitle} />
      <s.HorizontalContainer>
        <Toolbar
          setFontSize={setFontSize}
          setLineHeight={setLineHeight}
          setFont={setFont}
        />
        <s.TextWrapper>
          <s.Text fontSize={fontSize} lineHeight={lineHeight} font={font}>
            {text}
          </s.Text>
        </s.TextWrapper>
      </s.HorizontalContainer>
      <Footer />
    </s.Wrapper>
  );
}

export default App;
