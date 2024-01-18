import React from 'react'
import { Link } from 'react-router-dom';


export default function Shope() {

    const slideLeft = () => {
        let lSlider = document.getElementById("slider");
        lSlider.scrollLeft = lSlider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        let rSlider = document.getElementById("slider");
        rSlider.scrollLeft = rSlider.scrollLeft + 500;
      };
    
    return (
        <>
      <div className="bg-gray-100 h-14 text-black  items-center w-full sm:h-20">
        <div className="mx-2 sm:mx-80 text-center">
          <p className="text-xs sm:text-base">
          Save ₹1000.00 instantly on AirPods Pro with HDFC Bank Credit Cards.+ Plus No Cost EMI from most leading banks.
          </p>
        </div>
      </div>

      <div className=" mx-auto  flex-wrap justify-center  bg-gray-100 overflow-hidden ">

      <div className=" hidden sm:flex flex-absolute text-center ">
          <div className="h-400 w-400 relative  bg-white rounded-lg m-3 ">
            <img
              src="https://www.apple.com/v/airpods/u/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"
              alt=""
              className="relative block"
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl font-bold'>
            <p className="text-6xl">
            AirPods
            </p>
            <p className="text-2xl font-semibold mt-3 ">3rd genration</p>
            <p className="text-2xl font-semibold  ">From ₹19900.00*</p>
            <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  Buy
                </button>
            </div>
          </div>
          </div>

      <div className="sm:hidden flex flex-col    text-center ">
          <div className="h-400 w-400 relative  bg-white rounded-lg m-3 ">
            <img
              src="https://www.apple.com/v/airpods/u/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"
              alt=""
              className=""
            />
            <div className='text-center text-black text-2xl font-bold mt-10'>
            <p className="text-6xl">
            AirPods
            </p>
            <p className="text-2xl font-semibold mt-3 ">3rd genration</p>
            <p className="text-2xl font-semibold  ">From ₹19900.00*</p>
            <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  Buy
                </button>
            </div>
          </div>
          </div>

          <div className="hidden sm:flex justify-center items-cenetr text-center ">
          <div className="h-400 w-400  bg-white rounded-lg m-3 flex justify-center items-center relative ">
            <img
              src="https://www.apple.com/v/airpods/u/images/overview/airpods_max_logo__bdgdixidcqcy_large.jpg"
              alt=""
              className="mt-72 ml-32 mr-32 mb-72 "
            />
            <img src="https://www.apple.com/v/airpods/u/images/overview/airpods_max__f265q4g4ddym_large.png" alt="" className='absolute inset-0 mt-28 ml-96 mr-32 mb-44' />
            <div className='absolute mt-64 text-black text-2xl font-bold'>
            <p className="text-2xl font-semibold">₹59900.00*</p>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
            >
              Buy
            </button>
            </div>
          </div>
          </div>

          <div className="sm:hidden flex justify-center items-cenetr    text-center ">
          <div className="h-400 w-400  bg-white rounded-lg m-3 flex flex-col justify-center items-center relative ">
            <div>
            <img src="https://www.apple.com/v/airpods/u/images/overview/airpods_max__f265q4g4ddym_large.png" alt="" className=' mt-10' />
            </div>
            <div>
            <img
              src="https://www.apple.com/v/airpods/u/images/overview/airpods_max_logo__bdgdixidcqcy_large.jpg"
              alt=""
              className=" w-72 mt-20 "
            />
            <div className=' mt-3 text-black text-2xl font-bold'>
            <p className="text-2xl font-semibold">₹59900.00*</p>
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

          <div className="mt-32 sm:mt-28 text-center">
          <p className="text-3xl ml-5 sm:text-6xl font-bold sm:ml-20">
          A magical connection to
          </p>
          <p className="text-3xl ml-5 sm:text-6xl font-bold sm:ml-20">
          your devices.
          </p>
        </div>

{/*  
         <div className='flex justify-relative space-x-6 mt-10 ml-5 sm:ml-20 mr-5 sm:mr-10 overflow-x-scroll     ' id="slider">
          <Link>
            <div className='bg-white  rounded-xl h-96 w-96 relative overflow-hidden  '>
                <img src="https://www.apple.com/in/airpods/images/overview/tile_onetap_setup__fzj1m8dhjoq6_large.jpg" alt="" />
            </div>
          </Link>
          <Link>
            <div className='bg-white  rounded-xl h-96 w-96 relative  flex justify-center items-center overflow-hidden '>
                <img src="https://www.apple.com/in/airpods/images/overview/tile_spatial_audio__c9aidaa6ntkm_large.jpg" alt="" />
            </div>
          </Link>
          <Link>
            <div className='bg-white rounded-xl h-96 w-96 relative  flex justify-center items-center overflow-hidden'>
                <img src="https://www.apple.com/in/airpods/images/overview/tile_audio_sharing__ord9ku1kssq6_large.jpg" alt="" />
            </div>
          </Link>
          <Link>
            <div className='bg-white rounded-xl h-96 w-96 relative  flex justify-center items-center overflow-hidden'>
                <img src="https://www.apple.com/v/airpods/u/images/overview/tile_automatic_switching__etjisgj91gk2_large.jpg" alt="" />
                </div>
          </Link>
          <Link>
            <div className='bg-white  rounded-xl h-96 w-96 relative  flex justify-center items-center overflow-hidden'>
                <img src="https://www.apple.com/v/airpods/u/images/overview/tile_siri__8ksinuow82qq_large.jpg" alt="" />
            </div>
          </Link>
          <Link>
            <div className='bg-white  rounded-xl h-96 w-96 relative flex justify-center items-center overflow-hidden'>
                <img src="https://www.apple.com/v/airpods/u/images/overview/tile_accessibility__dx54ht0ycb8m_large.jpg" alt="" />
            </div>
          </Link>
        </div>  */}

        {/* above comment code when add link tag than only scroll otherwise not scroll -- Answer not Found  */}

       
<div
          className=" flex justify-relative space-x-6 mt-10 ml-5 sm:ml-20 mr-5 sm:mr-10 overflow-x-scroll no-scrollbar  scroll whitespace-nowrap scroll-smooth "
          id="slider"
        >
          <Link to="/">
            {" "}
            <div className=" md:bg-white  h-96 w-96  rounded-2xl relative text-center  ">
              <img
                src="https://www.apple.com/in/airpods/images/overview/tile_onetap_setup__fzj1m8dhjoq6_large.jpg"
                alt=""
              />
              {/* <p className="text-black font-semibold ml-24 mt-3">Mac</p> */}
            </div>
          </Link>

          <Link to="/">
            <div className="bg-white  h-96 w-96  rounded-2xl relative flex justify-center ">
              <img
                src="https://www.apple.com/in/airpods/images/overview/tile_spatial_audio__c9aidaa6ntkm_large.jpg"
                alt=""
              />
              {/* <p className="text-black font-semibold ml-20 mt-3">iPhone</p> */}
            </div>
          </Link>

          <Link to="/">
            <div className="bg-white h-96 w-96  rounded-2xl relative flex justify-center items-center ">
              <img
                src="https://www.apple.com/in/airpods/images/overview/tile_audio_sharing__ord9ku1kssq6_large.jpg"
                alt=""
              />
              {/* <p className="text-black font-semibold ml-20 mt-3">iPad</p> */}
            </div>{" "}
          </Link>

          <Link to="/">
            <div className="bg-white  h-96 w-96  rounded-2xl relative flex justify-center items-center">
              <img
                src="https://www.apple.com/v/airpods/u/images/overview/tile_automatic_switching__etjisgj91gk2_large.jpg"
                alt=""
              />
              {/* <p className="text-black font-semibold ml-16 mt-2">Apple Watch</p> */}
            </div>{" "}
          </Link>

          <Link to="/">
            <div className="bg-white h-96 w-96  rounded-2xl relative flex justify-center items-center ">
              <img
                src="https://www.apple.com/v/airpods/u/images/overview/tile_siri__8ksinuow82qq_large.jpg"
                alt=""
              />
              {/* <p className="text-black font-semibold ml-20 mt-2">AirPods</p> */}
            </div>{" "}
          </Link>

          <Link to="/">
            <div className="bg-white  h-96 w-96  rounded-2xl relative flex justify-center items-center ">
              <img
                src="https://www.apple.com/v/airpods/u/images/overview/tile_accessibility__dx54ht0ycb8m_large.jpg"
                alt=""
              />
              {/* <p className="text-black font-semibold ml-20 mt-2">AirTag</p> */}
            </div>{" "}
          </Link>

     
        </div>


        <div className="mt-8 flex justify-center space-x-5 ">
          <button
            onClick={slideLeft}
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>

          <button
            onClick={slideRight}
            type="button"
            className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>

       <div className="mt-32 sm:mt-52 text-center">
          <p className="text-3xl ml-5 sm:text-6xl font-bold sm:ml-20">
          Which AirPods are
          </p>
          <p className="text-3xl ml-5 sm:text-6xl font-bold sm:ml-20">
          right for you?
          </p>
        </div>

         
        <div className=" flex justify-left sm:justify-center items-center space-x-5 mt-28 overflow-x-scroll no-scrollbar">
            <div className="flex flex-col items-center justify-center text-center ">
              <img
                src="https://www.apple.com/v/airpods/shared/compare/d/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png"
                alt="iPadPro"
                className='alige-bottom'
              />
              <p className="mt-12  font-bold text-2xl">
              AirPods
              </p>

              <div className="text-center mt-6">
                <p>2nd generation</p>
                
              </div>
              <div className="mt-8">
                <p>₹12900.00*</p>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  Buy
                </button>
                <div className="h-0.5 w-44 mt-10 bg-slate-400 mb-5"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center ">
              <img
                src="https://www.apple.com/v/airpods/shared/compare/d/images/compare/compare_airpods_3rd_gen__dyuzfy04ht0m_large.png"
                alt="iPadPro"
                className='alige-bottom'
              />
                <p className="mt-16  font-bold text-2xl">
                AirPods
              </p>

              <div className="text-center mt-6">
                <p>3rd generation</p>
                
              </div>
              <div className="mt-8">
                <p className="">From ₹19900.00*</p>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
              >
                Buy
              </button>
              <div className="h-0.5 w-44 mt-10 bg-slate-400 mb-5"></div>
            </div>
            <div className="flex flex-col items-center justify-center text-center ">
              <img
                src="https://www.apple.com/v/airpods/shared/compare/d/images/compare/compare_airpods_pro__e9uzt0mzviem_large.png"
                alt="iPadPro"
                className='alige-bottom'
              />
              <p className="mt-16  font-bold text-2xl">
              AirPods Pro
              </p>

              <div className="text-center mt-6">
                <p>2nd generation</p>
                {/* <p>(USB-C)</p> */}
              </div>
              <div className="mt-8">
                <p className="">₹24900.00*</p>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  Buy
                </button>
                <div className="h-0.5 w-44 mt-10 bg-slate-400 mb-5"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center mb-7  ">
              <img
                src="https://www.apple.com/v/airpods/shared/compare/d/images/compare/compare_airpods_max__b14s2x6q07rm_large.png"
                alt="iPadPro"
                className='align-bottom'
                />
                
              <p className="  font-bold text-2xl">
              AirPods Max
              </p>

              <div className="text-center mt-6">
                <p></p>
                <p>.</p>
              </div>
              <div className="mt-8">
                <p className="">₹59900.00*</p>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  Buy
                </button>
                <div className="h-0.5 w-44 mt-10 bg-slate-400 mb-5"></div>
              </div>
            </div>
            
      </div>
    
      <div className="ml-5 mr-5  sm:ml-32 sm:mr-32 mt-12">
          <p>

        
          *Listed pricing is Maximum Retail Price (inclusive of all taxes).
+Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
‡No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.
Representative example:
Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.
**New subscribers only. ₹99.00/month after trial. Offer is available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer is valid for 3 months after eligible device pairing. No audio product purchase is necessary for current owners of eligible devices. Plan automatically renews until cancelled. Restrictions and other terms apply.
Requires an iCloud account and a compatible Apple device running the latest operating system software.
Compatible hardware and software are required. Works with compatible content in supported apps. Not all content is available in Dolby Atmos. iPhone with TrueDepth camera is required to create a personal profile for Spatial Audio, which will sync across Apple devices running the latest operating system software, including iOS, iPadOS, macOS and tvOS.
Requires a compatible Apple device running the latest operating system software.
◊Works with AirPods Pro (2nd generation) with the latest firmware when paired with a compatible Apple device running the latest operating system software.
◊◊Compatible hardware and software are required. Works with compatible content in supported apps. Not all content is available in Dolby Atmos. iPhone with TrueDepth camera is required to create a personal profile for Spatial Audio, which will sync across Apple devices running the latest operating system software, including iOS, iPadOS, macOS and tvOS.
◊◊◊AirPods (3rd generation) are sweat and water resistant for non-water sports and exercise, and they are IPX4 rated. Sweat and water resistance are not permanent conditions.
ΔAirPods Pro (2nd generation) are dust, sweat and water resistant for non-water sports and exercise, and they are IP54 rated. Dust, sweat and water resistance are not permanent conditions.
ΔΔMagSafe charging requires a compatible MagSafe charger. Wireless charging requires a Qi‑certified wireless charger. AirPods (3rd generation) charging case also works with the Apple Watch charger or Lightning connector. AirPods Pro (2nd generation) charging case also works with the Apple Watch charger or USB‑C connector.
ΔΔΔBattery life depends on device settings, environment, usage and many other factors.
          </p>
        </div>

        <div className="h-0.5 w-150 bg-gray-600 ml-5 mr-5 sm:ml-32 sm:mr-32 mt-4"></div>

        <div className="ml-6 mr-6 sm:ml-32 sm:mr-32 mt-1 mb-10">
          <p>
            Copyright <sup>@</sup>2023 Apple inc. All right reserved.
          </p>
        </div>

      </div>
            
        </>
    )
}

