import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return <span>Window width {width}</span>;
}

function App() {
  return <WindowWidth />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
