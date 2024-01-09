import React from 'react'

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
      <div className="bg-gray-100 h-14 text-black flex items-center w-full sm:h-20">
        <div className="mx-2 sm:mx-80 text-center">
          <p className="text-xs sm:text-base">
          Save ₹1000.00 instantly on AirPods Pro with HDFC Bank Credit Cards.+ Plus No Cost EMI from most leading banks.
          </p>
        </div>
      </div>

      <div className=" mx-auto flex-wrap justify-center  bg-gray-100 ">

      <div className="flex flex-absolute    text-center ">
          <div className="h-400 w-400 relative overflow-hidden bg-white rounded-lg m-3 ">
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
            </div>
          </div>
          </div>

          <div className="flex justify-center items-cenetr    text-center ">
          <div className="h-400 w-400  overflow-hidden bg-white rounded-lg m-3 flex justify-center items-center relative ">
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

          <div className="mt-32 sm:mt-28 text-center">
          <p className="text-3xl ml-5 sm:text-6xl font-bold sm:ml-20">
          A magical connection to
          </p>
          <p className="text-3xl ml-5 sm:text-6xl font-bold sm:ml-20">
          your devices.
          </p>
        </div>


        <div className='flex justify-relative space-x-4 mt-10  overflow-x-scroll no-scrollbar  scroll whitespace-nowrap scroll-smooth ' id='slider'>
            <div className='bg-white text-center rounded-xl relative  '>
                <img src="https://www.apple.com/in/airpods/images/overview/tile_onetap_setup__fzj1m8dhjoq6_large.jpg" alt="" />
            </div>
            <div className='bg-white text-center rounded-xl h-96 w-96 relative  flex justify-center items-center '>
                <img src="https://www.apple.com/in/airpods/images/overview/tile_spatial_audio__c9aidaa6ntkm_large.jpg" alt="" />
            </div>
            <div className='bg-white text-center rounded-xl h-96 w-96 relative  flex justify-center items-center'>
                <img src="https://www.apple.com/in/airpods/images/overview/tile_audio_sharing__ord9ku1kssq6_large.jpg" alt="" />
            </div>
            <div className='bg-white text-center rounded-xl h-96 w-96 relative  flex justify-center items-center'>
                <img src="https://www.apple.com/v/airpods/u/images/overview/tile_automatic_switching__etjisgj91gk2_large.jpg" alt="" />
                </div>
            <div className='bg-white text-center rounded-xl h-96 w-96 relative  flex justify-center items-center'>
                <img src="https://www.apple.com/v/airpods/u/images/overview/tile_siri__8ksinuow82qq_large.jpg" alt="" />
            </div>
            <div className='bg-white text-center rounded-xl h-96 w-96 relative flex justify-center items-center'>
                <img src="https://www.apple.com/v/airpods/u/images/overview/tile_accessibility__dx54ht0ycb8m_large.jpg" alt="" />
            </div>
        </div>


        <div className="mt-8 ml-10 mr-5 flex place-content-between">
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
                s="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      


      </div>
            
        </>
    )
}

