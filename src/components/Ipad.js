import React from "react";
import { useState, useEffect } from "react";

function Ipad() {
  const[color, setColor]= useState(false)

  useEffect(()=>{
    setColor(true)
  },[]);
  return (
    <>
      <div
        className={`${ color ? 'transition-colors duration-[3000ms] bg-black text-white' : 'bg-blue-600'} h-14 text-white flex items-center w-full sm:h-20`}
        
      >
        <div className="mx-2 sm:mx-80 text-center">
          <p className="text-xs sm:text-base">
            Save up to ₹4000.00 instantly on selected iPad models with HDFC Bank
            Credit Cards.+ Plus No Cost EMI from most leading banks.‡.
          </p>
        </div>
      </div>

      <div className=" mx-auto flex-wrap justify-center  bg-gray-200 mt-0 overflow-hidden">
        <div className=" bg-black ">
          <div className=" flex flex-wrap justify-center items-center ">
            <div className="text-center sm:ml-6">
              <p className="text-white text-3xl sm:text-5xl font-semibold sm:font-extrabold mt-8 sm:mt-0  ">
                iPad Pro{" "}
                <span className="text-xl text-white font-bold flex items-center  sm:justify-end   ">
                  {" "}
                  Supercharge by{" "}
                  <img
                    src="https://www.apple.com/v/ipad/home/ch/images/overview/hero/m2_chip__buj2soxeo91e_large.png"
                    alt=""
                  />{" "}
                </span>
                <p className="text-white font-medium sm:font-semibold text-xl ">
                  From &#8377;81900.00*
                </p>
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

        <div className="flex flex-row-reverse flex-wrap justify-center sm:items-center bg-white">
          <div className="text-center mt-10 sm:mt-0 sm:mr-20 ">
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
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  mt-3"
            >
              Buy
            </button>
          </div>
          <img
            src="https://www.apple.com/in/ipad/images/overview/hero/ipad_hero__d0tgmaq6shm6_large.jpg"
            alt="ipad3colr"
            className=" sm:ml-48 mt-10 sm:mt-6"
          />
        </div>

        <div className="bg-white h-full w-auto mt-8 ml-4 sm:ml-7 mr-4 sm:mr-7">
          <div className=" flex justify-center ">
            <p className="text-black text-2xl sm:text-5xl font-bold mt-20">
              Which iPad is right for you?
            </p>
          </div>
          <div className=" flex justify-relative items-end space-x-20  sm:ml-24 mt-12 sm:mt-32 overflow-x-scroll no-scrollbar">
            <div className=" flex-shrink-0 text-center ">
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
                <p>From &#8377;81900.008</p>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  Buy
                </button>
              </div>
            </div>
            <div className="flex-shrink-0  text-center">
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
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
              >
                Buy
              </button>
            </div>
            <div className="flex-shrink-0  text-center ">
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
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  Buy
                </button>
              </div>
            </div>
            <div className="flex-shrink-0  text-center">
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
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  Buy
                </button>
              </div>
            </div>
            <div className="flex-shrink-0  text-center">
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
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center sm:mt-10">
          <p className="text-5xl ml-5 sm:text-5xl font-semibold sm:ml-20">
            iPad essentials.
          </p>
        </div>

        <div className=" sm:hidden  flex flex-wrap sm:flex-relative  justify-center sm:space-x-8 mt-12 text-center space-y-10 ">
          <div className="h-400 w-400  overflow-hidden bg-white rounded-lg">
            <p className="text-4xl font-bold mt-20 ">Apple Pencil</p>
            <p className="mt-5 text-xl">Drem it up. Jot it down.</p>
            <img
              src="https://www.apple.com/v/ipad/home/ch/images/overview/apple_pencil__ekq506kmmys2_large.jpg"
              alt=""
              className="mt-20 sm:mt-40"
            />
          </div>

          <div className="h-400 w-400  overflow-hidden bg-white rounded-lg ">
            <img
              src="https://www.apple.com/in/ipad/home/images/overview/smart_keyboard_folio__b8j0ydqvjq2q_large.jpg"
              alt=""
            />
            <p className="text-4xl font-bold mt-16 sm:mt-20  ">Keybords for iPad</p>
            <p className="mt-5 text-xl mb-3">Keybords that have you coverd.</p>
          </div>
        </div>

        <div className=" hidden sm:flex  sm:flex-relative  justify-center sm:space-x-8 mt-12 text-center  ">
          <div className="h-400 w-400  overflow-hidden bg-white rounded-lg">
            <p className="text-4xl font-bold mt-20 ">Apple Pencil</p>
            <p className="mt-5 text-xl">Drem it up. Jot it down.</p>
            <img
              src="https://www.apple.com/v/ipad/home/ch/images/overview/apple_pencil__ekq506kmmys2_large.jpg"
              alt=""
              className="mt-20 sm:mt-40"
            />
          </div>

          <div className="h-400 w-400  overflow-hidden bg-white rounded-lg ">
            <img
              src="https://www.apple.com/in/ipad/home/images/overview/smart_keyboard_folio__b8j0ydqvjq2q_large.jpg"
              alt=""
            />
            <p className="text-4xl font-bold mt-16 sm:mt-20  ">Keybords for iPad</p>
            <p className="mt-5 text-xl mb-3">Keybords that have you coverd.</p>
          </div>
        </div>

        <div className="bg-white h-full w-auto mt-8 ml-2 sm:ml-7 mr-2 sm:mr-7 ">
          <div className=" text-center relative ">
            <p className="text-black text-3xl sm:text-5xl font-bold  sm:mt-10 ">
            Accessories
            </p>
            <p className="text-base sm:text-xl mt-4">Explore cases, covers, keyboards,</p>
            <p className="text-base sm:text-xl"> Apple Pencil, AirPods and more.</p>
          </div>
          <div className="flex justify-center">
         <img src="https://www.apple.com/v/ipad/home/ch/images/overview/accessories__gdpezee1naai_large.jpg" alt="" className="mt-20" />
          </div>
        </div>
       
        
        <div className="ml-5 mr-5  sm:ml-32 sm:mr-32 mt-12">
          <p>
          *Listed pricing is Maximum Retail Price (inclusive of all taxes).
+Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
‡No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.
Representative example:
Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.
The displays have rounded corners. When measured diagonally as a rectangle, the iPad Pro 12.9“ screen is 32.77 centimetres (12.90“), the iPad Pro 11“ screen is 27.96 centimetres (11.00“), the iPad Air and iPad (10th generation) screens are 27.58 centimetres (10.86“), and the iPad mini screen is 21.08 centimetres (8.3“). Actual viewable area is less.
Data plan is required. 5G, Gigabit LTE, Gigabit-class LTE, 4G LTE Advanced, 4G LTE and Wi-Fi calling are available in selected markets and through selected carriers. Speeds are based on theoretical throughput and vary based on site conditions and carrier. For details on 5G and LTE support, contact your carrier and see apple.com/in/ipad/cellular.
USB-C to Apple Pencil Adapter is required to work with iPad (10th generation).
The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.
New and qualified returning subscribers only. ₹99.00/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ 3-month-free or 1-year-free offer. Offer is valid for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
New subscribers only. ₹99.00/month after free trial. Plan automatically renews after trial until cancelled.
New and qualified returning subscribers only. ₹99.00/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple Arcade 3-month-free offer. Offer is valid for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
Accessories are sold separately and are subject to availability.
          </p>
        </div>

        <div className="h-0.5 w-150 bg-gray-600 ml-5 mr-5 sm:ml-32 sm:mr-32 mt-4">

</div>

<div className="ml-6 mr-6 sm:ml-32 sm:mr-32 mt-1 mb-10">
 <p>Copyright <sup>@</sup>2023 Apple inc. All right reserved.</p>
</div>

      </div>
    </>
  );
}

export default Ipad;
