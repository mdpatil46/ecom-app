import React from "react";

function Ipad() {
  setTimeout(() => {
    document.getElementById("blue").style =
      "background:#1D1D1F; color:white; font-weight:bold;  transition: background-color 1.5s ease;";
  }, 1000);
  return (
    <>
      <div
        className="bg-blue-700 h-14 text-white flex items-center w-full sm:h-20"
        id="blue"
      >
        <div className="mx-2 sm:mx-80 text-center">
          <p className="text-xs sm:text-base">
            Save up to ₹4000.00 instantly on selected iPad models with HDFC Bank
            Credit Cards.+ Plus No Cost EMI from most leading banks.‡.
          </p>
        </div>
      </div>

      <div className=" mx-auto flex-wrap justify-center  bg-gray-200 mt-0">
        <div className=" bg-black ">
          <div className=" flex ">
            <div className="text-center" >
              <p className="text-white text-3xl sm:text-5xl font-extrabold   ">
                iPad Pro{" "}
                <span className="text-xl text-white font-bold flex  sm:justify-end   ">
                  {" "}
                  Supercharge by{" "}
                  <img
                    src="https://www.apple.com/v/ipad/home/ch/images/overview/hero/m2_chip__buj2soxeo91e_large.png"
                    alt=""
                  />{" "}
                </span>
                <span className="text-white font-semibold text-xl    flex justify-end sm:justify-evenly">
                  From &#8377;81900.00*
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " 
                >
                  Buy
                </button>
              </p>
            </div>

            <div>
              <img
                src="https://www.apple.com/in/ipad/home/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg"
                alt="ipadimage "
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:items-center bg-white">
          <img src="https://www.apple.com/in/ipad/images/overview/hero/ipad_hero__d0tgmaq6shm6_large.jpg" alt="ipad3colr" 
          className="ml-48 mt-52 sm:mt-6"/>
            <div className="text-center ">
            <p className=" text-3xl sm:text-5xl font-bold ">iPad</p>
            <p className="text-xl sm:text-3xl font-semibold mt-2">Loveble.Drawable.</p>
            <p className="text-xl sm:text-3xl font-semibold ">Magical.</p>
            <p className="mt-5  font-semibold text-lg sm:text-xl">From &#8377;39900.00*</p>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  mt-3">Buy</button>
            </div>
        </div>

      </div>
    </>
  );
}

export default Ipad;
