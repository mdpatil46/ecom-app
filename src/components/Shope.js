import React from 'react'

export default function Shope() {
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


        <div>
            
        </div>
      


      </div>
            
        </>
    )
}

