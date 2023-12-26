import React, { useState } from "react";

function Mac() {
  setTimeout(() => {
    document.getElementById("blue").style =
      "background:white; color:black;  transition: background-color 1.5s ease;";
  }, 1000);

  const [div1, setDiv1] = useState(true);
  const [div2, setDiv2] = useState(false);
  const [div3, setDiv3] = useState(false);

  const [photo1, setPhoto1] = useState(true);
  const [photo2, setPhoto2] = useState(false);
  const [photo3, setPhoto3] = useState(false);

  return (
    <>
      <div
        className="bg-black h-20 w-99 text-white flex items-center"
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
            alt=" "
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
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              setDiv1(true);
              setDiv2(false);
              setDiv3(false);
            }}
          >
            Laptop
          </button>

          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              setDiv1(false);
              setDiv2(true);
              setDiv3(false);
            }}
          >
            Desktops
          </button>

          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              setDiv1(false);
              setDiv2(false);
              setDiv3(true);
            }}
          >
            Displays
          </button>

          <div>
            {div1 && (
              <div>
                <div className="flex flex-wrap justify-center space-x-6 mt-10">
                  <div className="bg-gray-200  h-80 w-82  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img
                      src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mba_13__ci4jh6tvqvyq_large.png"
                      alt=""
                      className="mt-7"
                    />
                    <p className="text-black text-xl font-semibold ml-5 mt-3 flex justify-center">
                      MacBook Air 13''
                    </p>
                    <p className="text-black text-xl font-semibold ml-5 mt-3 flex justify-center">
                      M1 chip
                    </p>
                  </div>

                  <div className="bg-gray-200  h-80 w-82  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img
                      src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
                      alt=""
                      className="mt-3"
                    />
                    <p className="text-black text-xl font-semibold ml-3 mt-3 flex justify-center">
                      MacBook Air 13'' and 15''
                    </p>
                    <p className="text-black text-xl font-semibold ml-3 mt-3 flex justify-center">
                      M2 chip
                    </p>
                  </div>

                  <div className="bg-gray-200  h-80 w-82  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img
                      src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
                      alt=""
                    />
                    <p className="text-black text-xl font-semibold ml-5 mt-3 flex justify-center">
                      Mac Book Pro 14'' and 16''
                    </p>
                    <p className="text-black text-xl font-semibold ml-5 mt-3 flex justify-center">
                      M3, M3 pro or M3 Max chip{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {div2 && (
              <div>
                <div className="flex flex-wrap justify-center space-x-6 mt-10  ">
                  <div className="bg-gray-200  h-86 w-82  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img
                      src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_imac_24__inq0od011wuq_large.png"
                      alt=""
                    />
                    <p className="text-black text-xl font-semibold mt-3  flex justify-center">
                      iMac
                    </p>
                    <p className="text-black text-xl font-semibold mt-2 flex justify-center">
                      M3 chip
                    </p>
                  </div>

                  <div className="bg-gray-200  h-86 w-82  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img
                      src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mac_mini__c4284n3j25w2_large.png"
                      alt=""
                      className="mt-60"
                    />
                    <p className="text-black text-xl font-semibold ml-5 mt-5 flex justify-center">
                      Mac mini
                    </p>
                    <p className="text-black text-xl font-semibold ml-5 mt-3 flex justify-center">
                      M2 or M2 Pro chip
                    </p>
                  </div>

                  <div className="bg-gray-200  h-86 w-82  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img
                      src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_large.png"
                      alt=""
                      className="mt-52"
                    />
                    <p className="text-black text-xl font-semibold ml-5 mt-5 flex justify-center">
                      Max Studio
                    </p>
                    <p className="text-black text-xl font-semibold ml-5 mt-3 flex justify-center">
                      M2 Max or M2 Ultra chip
                    </p>
                  </div>
                </div>
              </div>
            )}
            {div3 && (
              <div>
                <div className="flex flex-wrap justify-center space-x-6 mt-10">
                  <div className="bg-gray-200  h-96 w-82  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img
                      src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_large.png"
                      alt=""
                      className="mt-5"
                    />
                    <p className="text-black text-xl font-semibold ml-2 mt-3 flex justify-center">
                      iMac
                    </p>
                    <p className="text-black text-xl font-semibold ml-2 mt-3 flex justify-center">
                      M3 chip
                    </p>
                  </div>

                  <div className="bg-gray-200  h-96 w-82  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img
                      src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_pro_display__duklzyfwl92e_large.png"
                      alt=""
                    />
                    <p className="text-black text-xl font-semibold ml-1 mt-3 flex justify-center">
                      Mac mini
                    </p>
                    <p className="text-black text-xl font-semibold ml-1 mt-3 flex justify-center">
                      M2 or M2 Pro chip
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-5xl font-semibold ml-20">
            Why Apple is bast place{" "}
          </p>
          <p className="text-5xl font-semibold ml-20">to buy Mac.</p>
        </div>

        <div className="flex justify-center space-x-7 mt-12">
          <div className="bg-white  h-70 w-72  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="absolute top-6 left-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="#007AFF"
              >
                <path d="M18 20v-1h1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1h1v1h12zM22 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h2V4h16v16H3v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1h-2v1zM14 0h1a1 1 0 0 1 1 1v11H14zM7 0h1a1 1 0 0 1 1 1v11H7z" />
              </svg>
            </div>
            <p className="text-2xl text-black font-semibold  mt-20 ml-7">
              Monthly payment
            </p>
            <p className="text-2xl text-black font-semibold ml-7 ">
              option available .
            </p>

            <p className=" text-black font-semibold ml-7 mt-4">
              Choose the easy way to finance
            </p>
            <p className=" text-black font-semibold ml-7">
              With convenient monthly payment
            </p>
            <p className=" text-black font-semibold ml-7">options.</p>
          </div>

          <div className="bg-white h-64 w-72  rounded-2xl  relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out ">
            <div className="">
              <svg
                height="100"
                viewBox="0 0 14 44"
                width="90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
              </svg>
            </div>
            <p className="text-2xl text-black font-semibold  mt-0 ml-7">
              Save with
            </p>
            <p className="text-2xl text-black font-semibold ml-7 ">
              Apple Trade in.
            </p>

            <p className=" text-black font-semibold ml-7 mt-4">
              Get cradit towords your next Mac
            </p>
            <p className=" text-black font-semibold ml-7">
              when your trad in eligibel
            </p>
            <p className=" text-black font-semibold ml-7">
              divice at an apple store.<sup>4</sup>
            </p>
          </div>

          <div className="bg-white h-64 w-72 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="absolute top-6 left-7">
              <svg
                height="56"
                viewBox="0 0 35 35"
                width="56"
                class="as-svgicon as-svgicon-personalization as-svgicon-elevated as-svgicon-personalizationelevated"
                role="img"
                aria-hidden="true"
              >
                <path d="m0 0h35v35h-35z" fill="none"></path>
                <path
                  d="m17.5 6.1a11.4 11.4 0 1 1 -11.4 11.4 11.4129 11.4129 0 0 1 11.4-11.4m0-1.1a12.5 12.5 0 1 0 12.5 12.5 12.5 12.5 0 0 0 -12.5-12.5zm3.7707 11.3121a1.213 1.213 0 0 0 .9343-.4539 1.8075 1.8075 0 0 0 0-2.269 1.213 1.213 0 0 0 -.9343-.4539 1.2009 1.2009 0 0 0 -.921.4539 1.7981 1.7981 0 0 0 0 2.2624 1.1946 1.1946 0 0 0 .921.4605zm-7.5547 0a1.2454 1.2454 0 0 0 .9476-.4605 1.764 1.764 0 0 0 .0067-2.2624 1.2454 1.2454 0 0 0 -.9543-.4539 1.1813 1.1813 0 0 0 -.9143.4539 1.8311 1.8311 0 0 0 0 2.269 1.1813 1.1813 0 0 0 .9143.4539zm11.9727 2.2157a.655.655 0 0 0 -.6407-.08 27.5372 27.5372 0 0 1 -3.6906.861 24.1545 24.1545 0 0 1 -3.8507.3 24.2809 24.2809 0 0 1 -3.8575-.3 26.9794 26.9794 0 0 1 -3.6839-.861.6922.6922 0 0 0 -.6607.08.6079.6079 0 0 0 -.18.6139 7.7434 7.7434 0 0 0 1.4015 3.6306 8.5219 8.5219 0 0 0 2.9765 2.5961 8.3779 8.3779 0 0 0 4.0043.9677 8.35 8.35 0 0 0 3.9909-.9677 8.5849 8.5849 0 0 0 2.9832-2.5961 7.5976 7.5976 0 0 0 1.3948-3.6306.6384.6384 0 0 0 -.1871-.6139zm-1.4815 2.83a23.8689 23.8689 0 0 1 -3.3169.7008 24.6667 24.6667 0 0 1 -3.3836.2335 24.8628 24.8628 0 0 1 -3.3837-.2335 23.7823 23.7823 0 0 1 -3.33-.7008 6.2135 6.2135 0 0 1 -.694-1.8686 27.7532 27.7532 0 0 0 3.6171.7875 25.529 25.529 0 0 0 3.7908.28 25.5717 25.5717 0 0 0 3.784-.28 27.1787 27.1787 0 0 0 3.61-.7875 6.0407 6.0407 0 0 1 -.6937 1.8682z"
                  fill="#AB39FF"
                ></path>
              </svg>
            </div>
            <p className="text-2xl text-black font-semibold mt-20 ml-7">
              Create the Mac you
            </p>
            <p className="text-2xl text-black font-semibold ml-7">
              always wanted.
            </p>
            <p className=" text-black font-semibold mt-4 ml-7">
              Customise just about anything on
            </p>
            <p className=" text-black font-semibold ml-7">your new Mac.</p>
          </div>

          <div className="bg-white  h-64 w-72 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="absolute top-6 left-7">
              <svg
                height="56"
                viewBox="0 0 49 56"
                width="49"
                class="as-svgicon as-svgicon-boxtruck as-svgicon-elevated"
                aria-hidden="true"
                role="img"
              >
                <path d="m0 0h49v56h-49z" fill="none"></path>
                <path
                  d="m47.8447 27.501-6.6757-7.1289a4.37 4.37 0 0 0 -3.4854-1.3721h-4.6836v-4a5 5 0 0 0 -5-5h-23a5 5 0 0 0 -5 5v21a5 5 0 0 0 5 5h1.15a5.6216 5.6216 0 0 0 11.2 0h13.8a5.6216 5.6216 0 0 0 11.2 0h2.6436c2.5464 0 4.0064-1.4092 4.0064-3.8657v-6.7515a4.15 4.15 0 0 0 -1.1553-2.8818zm-32.5202 13.499a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2844-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.051.5zm15.6755-2h-13.8335a5.6187 5.6187 0 0 0 -10.833 0h-1.3335a3.0033 3.0033 0 0 1 -3-3v-21a3.0033 3.0033 0 0 1 3-3h23a3.0033 3.0033 0 0 1 3 3zm9.3245 2a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2839-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.0505.5zm6.6755-3.8657c0 1.3257-.581 1.8657-2.0068 1.8657h-2.8267a5.6127 5.6127 0 0 0 -9.1665-2.6843v-15.3157h4.6836a2.4292 2.4292 0 0 1 2.03.7437l6.6875 7.1411a2.18 2.18 0 0 1 .5989 1.498zm-3.3913-8.0216a1.2119 1.2119 0 0 1 .3913.8873h-7.7773a1.1432 1.1432 0 0 1 -1.2227-1.2324v-5.7676h2.4131a1.6822 1.6822 0 0 1 1.3364.6244z"
                  fill="#6CCA4E"
                ></path>
              </svg>
            </div>
            <p className="text-2xl text-black font-semibold mt-20 ml-7">
              Get flexibal delivery
            </p>
            <p className="text-2xl text-black font-semibold ml-7 ">
              and easy pickup
            </p>
            <p className=" text-black font-semibold mt-4 ml-7">
              Get free delivery or pickup at your
            </p>
            <p className=" text-black font-semibold  ml-7">Apple Store.</p>
          </div>
        </div>

        <div className="mt-52">
          <p className="text-5xl font-semibold ml-20">Significant others.</p>
        </div>

        <div className="h-auto w-auto bg-white mt-20 rounded-3xl">
          <div className="ml-20 flex justify-center  mt-10">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3"
              onClick={() => {
                setPhoto1(true);
                setPhoto2(false);
                setPhoto3(false);
              }}
            >
              Mac and iPhone
            </button>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3"
              onClick={() => {
                setPhoto1(false);
                setPhoto2(true);
                setPhoto3(false);
              }}
            >
              Mac and iPad
            </button>

            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3"
              onClick={() => {
                setPhoto1(false);
                setPhoto2(false);
                setPhoto3(true);
              }}
            >
              Mac and apple watch
            </button>
          </div>
          <div className="flex justify-center mt-20">
            {photo1 && (
              <img
                src="https://www.apple.com/in/mac/home/images/overview/augment/world_mac_iphone__mr1xfuchl56e_large.jpg"
                alt=""
              />
            )}
            {photo2 && (
              <img
                src="https://www.apple.com/in/mac/home/images/overview/augment/world_mac_ipad__d9mjiijkul0m_large.jpg"
                alt=""
              />
            )}
            {photo3 && (
              <img
                src="https://www.apple.com/v/mac/home/bx/images/overview/augment/world_mac_watch__dckn1orrpkqe_large.jpg"
                alt=""
              />
            )}
          </div>
        </div>

        <div className="mt-52">
          <p className="text-5xl font-semibold ml-20">Mac essentials.</p>
        </div>

        <div className="flex flex-wrap justify-center space-x-10 mt-12">
          <div className="h-400 w-500 relative overflow-hidden bg-white rounded-lg">
            <p className='text-2xl font-bold pl-52 pt-12 '>Mac Accessorise</p>
            <p className="mt-2 ml-36">Explore keybord, mice and other essentials.</p>
            <img
              src="https://www.apple.com/v/mac/home/bx/images/overview/essentials/essentials_accessories__dglhsic54owi_large.jpg"
              alt="" className="mt-40"
            />
          </div>

          <div className="h-400 w-500 relative overflow-hidden bg-white rounded-lg ">
            <p className='text-2xl font-bold pl-52 pt-12 '>Studio Display</p>
            <p className="mt-2 ml-20">The 68.29 cm (27″) 5K Retina display pairs beautifully with any Mac.</p>
            <img
              src="https://www.apple.com/v/mac/home/bx/images/overview/essentials/essentials_display__bk3i351qm0c2_large.jpg"
              alt="" className="mt-40"
            />
          </div>
        </div>

       

        <div className="ml-32 mr-32 mt-52">
          <p>
            ◊◊ Monthly pricing is after purchase using EMI with qualifying cards
            at 15% pa over a 6 month tenure. Monthly pricing is rounded to the
            nearest rupee. Exact pricing will be provided by your bank, subject
            to your bank’s terms and conditions. Representative example: Based
            on purchase of ₹79900.00. Total amount payable ₹83432.00 paid over 6
            months as 6 monthly payments of ₹13905.00 at an interest rate of 15%
            pa. Total interest paid to bank: ₹3532.00. § No Cost EMI is
            available with the purchase of an eligible product made using
            eligible cards on 3- or 6-month tenures from most leading banks.
            Monthly pricing is rounded to the nearest rupee. Exact pricing will
            be provided by your bank, subject to your bank’s terms and
            conditions. Minimum order spend applies as per your card issuing
            bank threshold. Offer cannot be combined with Apple Store for
            Education or Corporate Employee Purchase Plan pricing. Card
            eligibility is subject to terms and conditions between you and your
            card issuing bank. Offer may be revised or withdrawn at any time
            without any prior notice. Additional terms apply. Representative
            example: Based on a 6 month tenure. ₹79900.00 total cost includes
            15% pa and No Cost EMI savings of ₹3380.00, paid over 6 months as 6
            monthly payments of ₹13317.00. §§ Instant savings, otherwise
            referred to as instant cashback, is available with the purchase of
            an eligible product for qualifying HDFC Bank Credit Cards and
            EasyEMI Credit Cards only. Minimum transaction value of ₹10001
            applies. Click here to see instant savings amounts and eligible
            devices. Instant savings are available for up to two orders per
            rolling 90-day period with an eligible card. Card eligibility is
            subject to terms and conditions between you and your card issuing
            bank. Total transaction value is calculated after any trade-in
            credit or eligible discount applied. Any subsequent order
            adjustment(s) or cancellation(s) may result in instant savings being
            recalculated, and any refund may be adjusted to account for instant
            savings clawback; this may result in no refund being made to you.
            Offer may be revised or withdrawn at any time without any prior
            notice. Additional terms apply. Offer cannot be combined with Apple
            Store for Education or Corporate Employee Purchase Plan pricing.
            Multiple separate orders cannot be combined for instant savings. *
            Trade‑in values will vary based on the condition, year and
            configuration of your eligible trade‑in device. Not all devices are
            eligible for credit. You must be at least the age of majority to be
            eligible to trade in for credit. Trade‑in value may be applied
            towards a qualifying new device purchase. Actual value awarded is
            based on receipt of a qualifying device matching the description
            provided when estimate was made. Sales tax may be assessed on full
            value of a new device purchase. In-store trade‑in requires
            presentation of a valid photo ID (local law may require saving this
            information). Offer may not be available in all stores, and may vary
            between in-store and online trade‑in. Some stores may have
            additional requirements. Apple or its trade‑in partners reserve the
            right to refuse, cancel or limit the quantity of any trade‑in
            transaction for any reason. More details are available from Apple’s
            trade‑in partner for trade‑in and recycling of eligible devices.
            Restrictions and limitations may apply. 2. Special pricing available
            to qualified customers. To learn more about how to start qualifying
            for special pricing, talk to an Apple Specialist in a store or give
            us a call on 000800 040 1966. ° New and qualified returning
            subscribers only. ₹99/month after free trial. Only one offer per
            Apple ID and only one offer per family if you’re part of a Family
            Sharing group, regardless of the number of devices that you or your
            family purchase. This offer is not available if you or your family
            have previously accepted an Apple TV+ three-months-free or
            one-year-free offer. Offer valid for three months after eligible
            device activation. Plan automatically renews until cancelled.
            Restrictions and other terms apply. ⁺ New subscribers only.
            ₹99/month after trial. Offer available for a limited time to new
            subscribers who connect an eligible device to an Apple device
            running iOS 15 or iPadOS 15 or later. Offer valid for three months
            after eligible device pairing. No audio product purchase necessary
            for current owners of eligible devices. Plan automatically renews
            until cancelled. Restrictions and other terms apply. ‡ * Price shown
            refers to MacBook Pro with M3 chip. Listed pricing is Maximum Retail
            Price (inclusive of all taxes). ‡ Listed pricing is Maximum Retail
            Price (inclusive of all taxes). We use your location to show you
            delivery options faster. We found your location using your IP
            address or because you entered it during a previous visit to Apple.
          </p>
        </div>

        <div className="h-0.5 w-150 bg-gray-600 ml-32 mr-32 mt-4">

</div>

<div className="ml-32 mr-32 mt-1 mb-10">
 <p>Copyright <sup>@</sup>2023 Apple inc. All right reserved.</p>
</div>


      </div>
    </>
  );
}

export default Mac;
