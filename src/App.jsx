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
      <img className="w-full" src="/hero.jpg" alt="hero" />
      <div className="p-5 mt-10 text-center">
        <h1 className="md:text-7xl text-4xl  text-center font-title ">
          The Wedding of <br /> Windy & Maldini
        </h1>
        <p className="text-center font-title md:text-4xl text-2xl mt-8">
          02.06.2024
        </p>
        <p className="text-center text-gray-500 font-body  m-auto md:w-1/2 mt-6">
          “ Dan di antara tanda-tanda kebesaran-Nya ialah diciptakannya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu cenderung dan merasa
          tentram kepadanya dan dijadikan-Nya di antaramu rasa kasih dan sayang.
          Sesungguhnya pada yang demikian itu menjadivtanda-tanda bagi kaum yang
          berpikir. “ Ar-Rum : 21
        </p>
        <h2 className="mt-10 md:text-4xl text-2xl  font-title">
          {" "}
          Bismillahirrahmannirrahiim
        </h2>
        <p className="text-center text-gray-500 font-body  m-auto md:w-1/2 mt-2">
          Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang
          teman-teman sekalian untuk menghadiri acara pernikahan kami
        </p>
        <div className="mt-10 space-y-10 p-10 bg-blue-50 md:w-1/2 m-auto rounded-md">
          <div className="space-y-2">
            <h3 className="font-title text-3xl">Windy Anggraini</h3>
            <p className="text-center text-gray-500 font-body  m-auto md:w-1/2 mt-6 ">
              Putri kedua dari Bapak Wahyu Wiguna dan Ibu Mulyanih{" "}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-title text-3xl">Maldini Ramadhan</h3>
            <p className="text-center text-gray-500 font-body  m-auto md:w-1/2 mt-6 ">
              Putra pertama dari Bapak Kurniadi dan Ibu Rini Kurniawati
            </p>
          </div>
        </div>
      </div>
      <img className="w-full mt-10" src="/2.jpg" alt="2" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
        <img className="w-full mt-10" src="/3.jpg" alt="" />
        <img className="w-full mt-10" src="/4.jpg" alt="" />
        <img className="w-full mt-10" src="/5.jpg" alt="" />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
        <img className="w-full mt-10" src="/6.jpg" alt="" />
        <img className="w-full mt-10" src="/7.jpg" alt="" />
        <img className="w-full mt-10" src="/8.jpg" alt="" />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
        <img className="w-full mt-10" src="/9.jpg" alt="" />
        <img className="w-full mt-10" src="/10.jpg" alt="" />
        <img className="w-full mt-10" src="/11.jpg" alt="" />
      </div>
    </>
  );
}

export default App;
