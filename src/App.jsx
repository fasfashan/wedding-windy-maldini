import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [toParam, setToParam] = useState("teman-teman");
  useEffect(() => {
    // Mendapatkan nilai 'namaundangan' dari parameter URL
    const urlParams = new URLSearchParams(window.location.search);
    const toValue = urlParams.get("teruntuk");

    // Menetapkan nilai 'namaundangan' ke dalam state
    if (toValue) {
      setToParam(toValue);
    }
  }, []);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-6xl">Nikahan Malidni Windy</h1>
      <p className="text-black">Teruntuk {toParam}</p>
    </>
  );
}

export default App;
