import { useState } from "react";

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

  return (
    <>
      <h1 className="text-6xl">The Wedding of Windy Maldini</h1>
      <p className="text-black">Teruntuk {toParam}</p>
      <img width={600} src="/og-image.jpg" alt="" />
    </>
  );
}

export default App;
