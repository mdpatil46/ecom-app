import React from "react";

function Ipad() {
  setTimeout(() => {
    document.getElementById("blue").style =
      "background:#1D1D1F; color:white; font-weight:bold;  transition: background-color 1.5s ease;";
  }, 1000);
  return (
    <>
      <div className="bg-blue-700 h-14 text-white flex items-center w-full sm:h-20" id='blue'>
        <div className="mx-2 sm:mx-80 text-center">
          <p className="text-xs sm:text-base">
            Save up to ₹4000.00 instantly on selected iPad models with HDFC Bank
            Credit Cards.+ Plus No Cost EMI from most leading banks.‡.
          </p>
        </div>
      </div>

      <div className=" bg-black ">
        <div className=" flex justify-end items-end">
          <div>
            <p className="text-white text-5xl font-extrabold mb-96 ml-10  ">
              iPad Pro{" "}
              
              <span className="text-xl text-white font-bold flex justify-end mt-3 ">
                {" "}
                Supercharge by{" "}
                <img
                  src="https://www.apple.com/v/ipad/home/ch/images/overview/hero/m2_chip__buj2soxeo91e_large.png"
                  alt=""
                 
                />{" "}
              </span>
             <span className="text-white font-semibold text-xl mt-2 mr-4 flex justify-evenly">
              From &#8377;81900.00*
             </span>
             <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-16">Buy</button>
            </p>
            
          </div>

          <img
            src="https://www.apple.com/in/ipad/home/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg"
            alt="ipadimage "
          />
        </div>
      </div>
    </>
  );
}

export default Ipad;
