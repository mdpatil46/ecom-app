import React from "react";

function Mac() {
  setTimeout(() => {
    document.getElementById("blue").style =
      "background:white; color:black;  transition: background-color 1.5s ease;";
  }, 1000);

  return (
    <>
      <div
        className="bg-blue-700 h-20 w-99 text-white flex items-center"
        id="blue"
      >
        <div className="mx-80 text-center ">
          <p className="text-xm ">
            Get up to ₹8000.00 instant savings on selected Mac models with
            eligible HDFC Bank cards. Footnote §§ Plus No Cost EMI from most
            leading banks.
          </p>
        </div>
      </div>

      <div className="mx-auto flex-wrap justify-center  bg-gray-200 mt-0">
        <header className="flex items-end justify-between ">
          <div className="mt-5">
            <p className="text-7xl font-bold ml-20">Mac</p>
          </div>
          <div className="mr-36 mt-5" id="mydiv">
            <p className="text-3xl font-semibold ">If you can dream it,</p>
            <p className="text-3xl font-semibold ">Mac can do it.</p>
          </div>
        </header>

        <div className="mt-16 ml-64">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dd5a2696843823.5eb7d53e75418.gif"
            className="rounded-3xl "
          ></img>
        </div>

        <div>
          <p className="text-7xl font-bold ml-20 mt-20">Get to know Mac.</p>
        </div>

        <div className="flex flex-wrap justify-center space-x-6 mt-12">
          <div className="bg-white h-400 w-500 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_ease__bvgkz2zdltxy_large.jpg"
              alt=""
              className="w-full h-auto rounded-t-2xl"
            />
            <p className="absolute top-0 left-0 text-white pt-9 pl-5 text-l font-semibold">
              Getting Started
            </p>
            <p className="absolute top-0 left-0 pt-16 pl-5 font-semibold text-white text-3xl">
              Easy to use. Easy to love.
            </p>
          </div>
          <div className="bg-black h-400 w-500 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_performance__dh5hyac1zf8m_large.jpg"
              alt=""
              className="w-full h-auto rounded-t-2xl"
            />
            <p className="absolute top-0 left-0 text-white pt-9 pl-5 text-l font-semibold">
              Performance and Battery life
            </p>
            <p className="absolute top-0 left-0 pt-16 pl-5 font-semibold text-white text-3xl">
              Go fast. Go far.
            </p>
          </div>
          <div className="bg-white h-400 w-500  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://www.apple.com/in/mac/home/images/overview/consider/mac_iphone__gh1tblkt6bqm_large.jpg"
              alt=""
              className="w-full h-auto rounded-t-2xl"
            />
            <p className="absolute top-0 left-0 text-black pt-9 pl-5 text-l font-semibold">
              Mac and iPhone
            </p>
            <p className="absolute top-0 left-0 pt-16 pl-5 font-semibold text-black text-3xl">
              Dream team.
            </p>
          </div>
        </div>

        <div>
          <p className="text-7xl font-bold ml-20 mt-44">Explore the line-up</p>
        </div>
        <div className="ml-20 mt-20">
          <button
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
        </div>
         
        <div>
        
        </div>

      </div>
    </>
  );
}

export default Mac;
