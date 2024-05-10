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
        <h1 className="md:text-7xl text-4xl mb-10 tracking-tight  text-center font-title font-medium ">
          The Wedding of <br /> Windy & Maldini
        </h1>

        <img width={250} src="/date.svg" className=" m-auto" alt="" />
        <p className="text-center mb-10 text-gray-500 font-body  m-auto md:w-1/2 mt-6">
          “ Dan di antara tanda-tanda kebesaran-Nya ialah diciptakannya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu cenderung dan merasa
          tentram kepadanya dan dijadikan-Nya di antaramu rasa kasih dan sayang.
          Sesungguhnya pada yang demikian itu menjadivtanda-tanda bagi kaum yang
          berpikir. “ Ar-Rum : 21
        </p>
        <img width={250} src="/Bismillah.svg" className=" m-auto" alt="" />
        <p className="text-center text-gray-500 font-body  m-auto md:w-1/2 mt-2">
          Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang
          teman-teman sekalian untuk menghadiri acara pernikahan kami
        </p>
        <div className="mt-10 space-y-4 px-4 py-10 bg-blue-50 md:w-1/2 m-auto rounded-md">
          <div className="space-y-2">
            <h3 className="font-semibold text-3xl">Windy Anggraini</h3>
            <p className="text-center text-gray-500 font-body  m-auto md:w-1/2 mt-6 ">
              Putri kedua dari Bapak Wahyu Wiguna dan Ibu Mulyanih{" "}
            </p>
          </div>
          <h2 className="text-4xl">&</h2>
          <div className="space-y-2">
            <h3 className="font-semibold text-3xl">Maldini Ramadhan</h3>
            <p className="text-center text-gray-500 font-body  m-auto md:w-1/2 mt-6 ">
              Putra pertama dari Bapak Kurniadi dan Ibu Rini Kurniawati
            </p>
          </div>
          <hr className="border border-gray-300" />
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Tanggal dan Lokasi Acara</h2>
            <div className="space-y-2">
              <div className="">
                <p className="font-medium">Akad nikah:</p>
                <p className="text-gray-500">
                  Minggu, 02 Juni 2024, pukul 10.00-11.00{" "}
                </p>
              </div>
              <div className="">
                <p className="font-medium">Resepsi:</p>
                <p className="text-gray-500">
                  Minggu, 02 Juni 2024, pukul 11.00-selesai{" "}
                </p>
              </div>
              <div className="">
                <p className="font-medium">Alamat:</p>
                <p className="text-gray-500">
                  Kp. Bambon RT 003 RW 007 Ragajaya, Bojong Gede, Bogor
                </p>
              </div>
            </div>
            <div>
              <a
                className="py-2 px-4 bg-white border font-medium hover:bg-gray-50 transition-all border-gray-100 rounded-md"
                href="https://maps.app.goo.gl/EHE31LQHSHvB9DzC7"
              >
                Liat di maps
              </a>
            </div>
          </div>
        </div>
      </div>
      <img className="w-full mt-10" src="/2.jpg" alt="2" />
      <div className="grid md:grid-cols-3 grid-cols-2 gap-10 p-10">
        <img className="w-full mt-10" src="/3.jpg" alt="" />
        <img className="w-full mt-10" src="/4.jpg" alt="" />
        <img className="w-full mt-10" src="/5.jpg" alt="" />
        <img className="w-full mt-10" src="/6.jpg" alt="" />
        <img className="w-full mt-10" src="/7.jpg" alt="" />
        <img className="w-full mt-10" src="/8.jpg" alt="" />
        <img className="w-full mt-10" src="/9.jpg" alt="" />
        <img className="w-full mt-10" src="/10.jpg" alt="" />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 p-10"></div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 p-10"></div>
    </>
  );
}

export default App;
