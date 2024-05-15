import { useState, useEffect } from "react";
import CopyButton from "./copy";
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
          Sesungguhnya pada yang demikian itu menjadi tanda-tanda bagi kaum yang
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
      <div className="grid md:grid-cols-4 grid-cols-2 gap-10 p-10">
        <img className="w-full mt-10" src="/3.jpg" alt="" />
        <img className="w-full mt-10" src="/4.jpg" alt="" />
        <img className="w-full mt-10" src="/5.jpg" alt="" />
        <img className="w-full mt-10" src="/6.jpg" alt="" />
        <img className="w-full mt-10" src="/7.jpg" alt="" />
        <img className="w-full mt-10" src="/8.jpg" alt="" />
        <img className="w-full mt-10" src="/9.jpg" alt="" />
        <img className="w-full mt-10" src="/10.jpg" alt="" />
      </div>

      <div className="space-y-4 px-4 py-10 bg-blue-50 md:w-1/2 m-auto rounded-md mb-10">
        <h3 className="font-semibold text-3xl text-center  ">
          Kondangan Online
        </h3>
        <div className="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="12"
            viewBox="0 0 42 12"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.54388 9.10844C6.54388 8.63017 6.54939 7.35177 6.53688 7.19425C6.54779 5.29196 5.08055 3.95005 4.15361 4.05467C3.5122 4.10714 2.97454 4.35369 2.68602 5.06293C2.4184 5.72393 2.65768 6.60314 3.54709 6.80944C4.49801 7.031 5.05346 7.21535 5.45536 7.47542C5.94781 7.7938 6.34982 8.40212 6.36049 9.1092"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.1464 9.10918C6.1495 8.49611 5.78651 7.954 5.31208 7.66266C4.89124 7.40519 4.32627 7.2361 3.41482 7.01811C3.13308 6.95017 2.83837 6.79925 2.74714 6.6069C2.50579 6.83614 2.46195 7.35153 2.50441 7.65282C2.55376 8.00128 2.98584 8.57573 3.63643 8.59823C4.03374 8.61327 4.53605 8.51763 4.77694 8.46938C5.1925 8.38478 5.84997 8.63014 5.95463 9.10842"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.87992 1.0899C5.77671 1.0899 4.82395 1.77568 4.82728 2.96234C4.83072 3.96022 5.68203 4.49443 5.98592 4.87599C6.44497 5.45098 6.69343 6.13156 6.71914 7.17294C6.73934 8.00173 6.73831 8.82013 6.74278 9.11017H6.98619C6.98206 8.80672 6.97104 7.9379 6.98355 7.1473C7.00008 6.1056 7.25749 5.45098 7.71677 4.87599C8.0233 4.49443 8.87381 3.96022 8.87564 2.96234C8.87989 1.77568 7.92748 1.0899 6.82541 1.0899"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.15986 9.10844C7.15986 8.63017 7.15412 7.35177 7.1664 7.19425C7.15562 5.29196 8.62194 3.95005 9.54968 4.05467C10.1911 4.10714 10.7281 4.35369 11.0175 5.06293C11.2848 5.72393 11.0442 6.60314 10.156 6.80944C9.20436 7.031 8.64971 7.21535 8.24678 7.47542C7.75491 7.7938 7.38101 8.40212 7.36953 9.1092"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.55706 9.10918C7.55362 8.49611 7.9165 7.954 8.38955 7.66266C8.81222 7.40519 9.37777 7.2361 10.2884 7.01811C10.5707 6.95017 10.8651 6.79925 10.9547 6.6069C11.1972 6.83614 11.2411 7.35153 11.1985 7.65282C11.1482 8.00128 10.7172 8.57573 10.0677 8.59823C9.67064 8.61327 9.16557 8.51763 8.92572 8.46938C8.51177 8.38478 7.85246 8.63014 7.74734 9.10842"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.89731 11.0884L7.75627 10.1174L8.097 10.0687C8.17986 10.0581 8.28085 10.0718 8.32125 10.1207C8.36589 10.1718 8.37955 10.2141 8.38815 10.2812C8.40112 10.3643 8.37564 10.4601 8.27649 10.508V10.5109C8.38712 10.5109 8.45403 10.5859 8.47354 10.7124C8.47629 10.7393 8.48478 10.8037 8.47629 10.8576C8.4538 10.9858 8.37278 11.0271 8.23575 11.0452L7.89731 11.0884ZM8.11663 10.9146C8.15702 10.9091 8.19799 10.9071 8.23001 10.8878C8.27913 10.8576 8.27465 10.7931 8.26777 10.7451C8.25078 10.6398 8.22163 10.5997 8.10308 10.6163L8.02849 10.6271L8.07577 10.9199L8.11663 10.9146ZM8.04538 10.4659C8.09048 10.4591 8.15153 10.4539 8.17701 10.4135C8.19044 10.3866 8.20742 10.3652 8.19618 10.3052C8.18229 10.2343 8.15739 10.1901 8.06156 10.2072L7.97239 10.2208L8.00762 10.4696L8.04538 10.4659Z"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.37332 10.5044C9.37596 10.5225 9.37906 10.5426 9.38021 10.5607C9.40775 10.7377 9.37332 10.8844 9.16216 10.9247C8.84989 10.9813 8.7901 10.7986 8.73524 10.5426L8.70598 10.4041C8.66294 10.1592 8.64446 9.97381 8.94881 9.91658C9.12038 9.88716 9.23377 9.95152 9.28094 10.1125C9.28828 10.1365 9.29746 10.1602 9.30091 10.1844L9.11419 10.2208C9.09261 10.1602 9.06404 10.0521 8.98003 10.0612C8.82923 10.0784 8.87904 10.2552 8.89453 10.3292L8.95065 10.595C8.96752 10.6754 9.00103 10.8038 9.13152 10.779C9.23744 10.759 9.19119 10.6034 9.18178 10.5396"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.67296 10.7983L9.60846 9.79347L9.85922 9.72131L10.3852 10.5952L10.1877 10.6509L10.063 10.4288L9.84372 10.4909L9.87207 10.7434L9.67296 10.7983ZM9.82536 10.3286L9.98384 10.2854L9.77337 9.87881L9.82536 10.3286Z"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.47673 10.0386C3.55523 9.80175 3.62546 9.62725 3.92511 9.70471C4.08543 9.74701 4.18481 9.81354 4.18011 9.98913C4.17931 10.0282 4.16565 10.0681 4.1567 10.1066L3.97021 10.0581C3.99465 9.96111 4.01015 9.88419 3.88345 9.84741C3.73701 9.80954 3.70132 9.97701 3.68112 10.0493L3.60526 10.3126C3.58116 10.3908 3.55224 10.5201 3.68112 10.5535C3.78762 10.5805 3.85212 10.482 3.89068 10.3381L3.76031 10.3055L3.80541 10.1531L4.11217 10.2461L3.96654 10.7538L3.82538 10.7176L3.85717 10.6103H3.85315C3.78808 10.6982 3.70889 10.7074 3.63946 10.6947C3.3327 10.6166 3.36472 10.4276 3.43794 10.1751"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.61846 10.4674L4.52608 10.8804L4.31813 10.8381L4.53974 9.87366L4.89424 9.94906C5.10173 9.99136 5.16439 10.0783 5.13501 10.2577C5.11826 10.3606 5.06443 10.4714 4.93303 10.4624L4.93165 10.4608C5.04274 10.4973 5.05215 10.5502 5.03276 10.6414C5.02438 10.6804 4.96665 10.916 5.00648 10.9541L5.00785 10.9831L4.79267 10.9301C4.78372 10.8648 4.81425 10.7473 4.8263 10.6822C4.83835 10.6247 4.85774 10.5435 4.79577 10.5131C4.74734 10.4887 4.72921 10.4899 4.67435 10.4781L4.61846 10.4674ZM4.65392 10.318L4.79393 10.3535C4.87897 10.3652 4.92625 10.3237 4.94301 10.2268C4.95816 10.1379 4.93853 10.1033 4.86222 10.0861L4.71211 10.0573L4.65392 10.318Z"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.95229 10.089L6.15794 10.1115L6.06935 10.7896C6.02631 11.0046 5.93817 11.0985 5.6873 11.0692C5.43207 11.0386 5.37147 10.9292 5.38685 10.7125L5.47614 10.035L5.6834 10.0573L5.59446 10.7196C5.58493 10.7916 5.56737 10.8981 5.70302 10.9111C5.82341 10.9198 5.85072 10.8445 5.86438 10.751"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.38461 11.1063L6.44658 10.1367L6.8416 10.1528C7.02843 10.1616 7.07721 10.3053 7.07147 10.4424C7.06596 10.5259 7.03842 10.619 6.9613 10.6695C6.89806 10.7125 6.81669 10.7226 6.74141 10.7192L6.61265 10.7125L6.58694 11.1188L6.38461 11.1063ZM6.61839 10.5646L6.72306 10.5701C6.8081 10.573 6.86444 10.5413 6.87179 10.4236C6.87603 10.3107 6.83059 10.2914 6.72042 10.2869L6.63756 10.2842L6.61839 10.5646Z"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.2527 2.02693L32.6822 4.71398C32.0895 4.26016 31.3658 3.9263 30.4423 3.9263C28.2569 3.9263 27.3691 5.46185 27.3691 6.54358C27.3691 7.34662 27.9268 8.53123 29.8714 8.53123C30.6877 8.53123 31.8479 7.99604 32.1819 7.75242L30.6288 10.8698C29.8885 11.0091 29.6452 11.0954 29.0186 11.1137C25.538 11.2116 24.1317 9.19601 24.1327 7.13664C24.1351 4.41399 26.7028 1.10294 30.9597 1.10294C31.2204 1.10294 31.5394 1.18808 31.8122 1.28231L32.088 0.94986"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.7325 1.03418L41.1772 10.8H37.8677L37.8658 9.1252H35.609L34.8664 10.8H31.2771L35.0296 3.82639L34.1834 3.82119L35.791 1.03418H40.7325ZM37.8442 4.02177L36.5684 6.86234H37.8828L37.8442 4.02177Z"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.0433 1.03418C23.6822 1.04284 24.6084 1.88147 24.6084 3.0928C24.6084 4.20968 23.6316 5.19815 22.5594 5.70932C23.6633 6.09196 23.7588 7.03099 23.7588 7.69523C23.7588 9.30035 22.0504 10.8 19.8297 10.8H14.9863L16.8755 3.92354L16.0995 3.91932L17.6859 1.03418C17.6859 1.03418 20.7106 1.02553 22.0433 1.03418V1.03418ZM20.4354 4.99367C20.7744 4.99367 21.373 4.91275 21.5226 4.29427C21.6866 3.62278 21.1249 3.60471 20.8554 3.60471L19.8926 3.60081L19.5568 4.99367H20.4354ZM19.0741 6.71942L18.6307 8.32443H19.7646C20.2106 8.32443 20.8184 8.11563 20.9674 7.59332C21.1145 7.06961 20.6896 6.71942 20.2452 6.71942H19.0741Z"
              fill="#0060AF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.92352 12C5.2465 12 3.52322 11.6106 1.80213 10.8406L1.7599 10.821L1.7397 10.7805C0.967347 9.2436 0.558792 7.56276 0.558792 5.91816C0.558792 4.27594 0.950592 2.66693 1.7234 1.13214L1.74475 1.09135L1.78778 1.07101C3.37989 0.360033 5.09249 0 6.87991 0C8.54478 0 10.323 0.400819 12.0213 1.16135L12.0648 1.17963L12.085 1.22117C12.872 2.78637 13.2871 4.46688 13.2871 6.08433C13.2871 7.69528 12.8885 9.30581 12.1005 10.87L12.0798 10.911L12.036 10.9301C10.4681 11.6297 8.70016 12 6.92352 12M1.96142 10.6299C3.63328 11.3714 5.3009 11.7457 6.92352 11.7457C8.64404 11.7457 10.355 11.3911 11.8783 10.7191C12.6349 9.20336 13.0184 7.64336 13.0184 6.08433C13.0184 4.51881 12.6182 2.89055 11.861 1.37133C10.2128 0.640988 8.49164 0.253693 6.87991 0.253693C5.14952 0.253693 3.49086 0.599662 1.94696 1.2823C1.20582 2.76982 0.828598 4.32863 0.828598 5.91816C0.828598 7.51051 1.22051 9.13953 1.96142 10.6299Z"
              fill="#0060AF"
            />
          </svg>
          <p className="text-md text-center font-semibold mb-4">
            {" "}
            7651427448 a.n Windy Anggraini
          </p>
        </div>
        <div className="flex m-auto justify-center mb-4">
          <CopyButton textToCopy="7651427448" />
        </div>
      </div>
    </>
  );
}

export default App;
