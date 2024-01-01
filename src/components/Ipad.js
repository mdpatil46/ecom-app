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
          <div className=" flex justify-center items-center ">
            <div className="text-center ml-6">
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
          <img
            src="https://www.apple.com/in/ipad/images/overview/hero/ipad_hero__d0tgmaq6shm6_large.jpg"
            alt="ipad3colr"
            className="ml-48 mt-52 sm:mt-6"
          />
          <div className="text-center  mr-20 ">
            <p className=" text-3xl sm:text-5xl font-bold ">iPad</p>
            <p className="text-xl sm:text-3xl font-semibold mt-2">
              Loveble.Drawable.
            </p>
            <p className="text-xl sm:text-3xl font-semibold ">Magical.</p>
            <p className="mt-5  font-semibold text-lg sm:text-xl">
              From &#8377;39900.00*
            </p>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  mt-3"
            >
              Buy
            </button>
          </div>
        </div>

        <div className="bg-white h-full w-auto mt-8 ml-7 mr-7">
          <div className=" flex justify-center ">
            <p className="text-black text-5xl font-bold mt-20">
              Which iPad is right for you?
            </p>
          </div>
          <div className=" flex justify-relative items-end space-x-20 ml-24 mt-32">
            <div className="text-center ">
              <img
                src="https://www.apple.com/v/ipad/home/ch/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png"
                alt="iPadPro"
              />
              <p className="text-2xl font-bold mt-12">iPad Pro</p>

              <div className="text-center mt-6">
              <p>The ultimate iPad</p>
              <p>experience with the most</p>
              <p>advance technology</p>
              </div>
              <div className="mt-8">
              <p >From &#8377;81900.008</p>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Buy</button>

               </div>

            </div>
            <div className=" text-center">
              <img
                src="https://www.apple.com/v/ipad/home/ch/images/overview/compare_ipad_air__bxjv33pk6nte_large.png"
                alt="iPadPro"
              />
               <p className="text-2xl font-bold mt-12 mr-8">iPad Air</p>

               <div className="text-center mt-6">
               <p>Serious Performance in</p>
               <p>a thin and light design.</p>
               <p>you do every day.</p>
               </div>
               <div className="mt-8">
               <p className="">From &#8377;59900.00*</p>
               </div>
               <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Buy</button>


            </div>
            <div className="text-center ">
              <img
                src="https://www.apple.com/v/ipad/home/ch/images/overview/compare_ipad_10_9__f7p2wja0gwuy_large.png"
                alt="iPadPro"
              />
               <p className="text-2xl font-bold mt-12 mr-8">iPad</p>

               <div className="text-center mt-6">
               <p>The all‑new colourful</p>
               <p>iPad for the things</p>
               <p>you do every day.</p>
               </div>
               <div className="mt-8">
               <p className="">From &#8377;39900.00*</p>
               <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Buy</button>

               </div>
             
            </div>
            <div className="text-center">
              <img
                src="https://www.apple.com/v/ipad/home/ch/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png"
                alt="iPadPro"
              />
               <p className="text-2xl font-bold mt-12 mr-10">iPad</p>

               <div className="text-center mt-6">
               <p>All the essentials in the</p>
               <p>most affordable iPad.</p>
               <p>you do every day.</p>
               </div>
               <div className="mt-8">
               <p className="">From &#8377;32900.00*</p>
               <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Buy</button>

               </div>
               
            </div>
            <div className="text-center">
              <img
                src="https://www.apple.com/v/ipad/home/ch/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png"
                alt="iPadPro"
              />
               <p className="text-2xl font-bold mt-12 mr-10 ">iPad mini</p>

               <div className="text-center mt-6">
               <p>The full iPad</p>
               <p>experience designed</p>
               <p>to fit in one hand.</p>
               </div>
               <div className="mt-8">
               <p className="">From &#8377;49900.00*</p>
               <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Buy</button>

               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ipad;
