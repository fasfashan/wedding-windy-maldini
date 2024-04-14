import { useState, useEffect } from "react";

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
      <img width={1440} src="/hero.jpg" alt="" />
      <div className="p-5 mt-10 text-center">
        <h1 className="md:text-7xl text-4xl  text-center font-title ">
          The Wedding of <br /> Windy & Maldini
        </h1>
        <p className="text-center font-title md:text-4xl text-2xl mt-4">
          02.06.2024
        </p>
        <p className="text-center font-body mt-6">
          “ Dan di antara tanda-tanda kebesaran-Nya ialah diciptakannya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu cenderung dan merasa
          tentram kepadanya dan dijadikan-Nya di antaramu rasa kasih dan sayang.
          Sesungguhnya pada yang demikian itu menjadivtanda-tanda bagi kaum yang
          berpikir. “ Ar-Rum : 21
        </p>
        <h2 className="mt-10 font-title text-2xl">
          {" "}
          Bismillahirrahmannirrahiim
        </h2>
        <p className="text-center font-body mt-6">
          Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang
          teman-teman sekalian untuk menghadiri acara pernikahan kami
        </p>
        <div className="mt-10 space-y-10">
          <div className="space-y-2">
            <h3 className="font-title text-3xl">Windy Anggraini</h3>
            <p className="font-body">
              Putri kedua dari Bapak Wahyu Wiguna dan Ibu Mulyanih{" "}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-title text-3xl">Maldini Ramadhan</h3>
            <p className="font-body">
              Putra pertama dari Bapak Kurniadi dan Ibu Rini Kurniawati
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
