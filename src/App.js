import { useEffect, useState } from "react";
import "./App.css";
import { Toolbar } from "./components/Toolbar/Toolbar";
import s from "./App.styles";
import book from "./assets/Dracula.txt";

function App() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);
  const [font, setFont] = useState("Arial");

  
  useEffect(() => {
    fetch(book)
      .then((r) => r.text())
      .then((response) => {
        setText(response);
      });
  });
  // sort div formating
 

  return (
    <div className="App">
      <Toolbar
        setFontSize={setFontSize}
        setLineHeight={setLineHeight}
        setFont={setFont}
      />
      <s.Text fontSize={fontSize} lineHeight={lineHeight} font={font}>
        {text}
      </s.Text>
    </div>
  );
}

export default App;
