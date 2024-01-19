import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar(props) {
  const [ismenuopen, setmenuopen] = useState(false);

  function sidebar() {
    setmenuopen(!ismenuopen);
  }

  useEffect(() => {
    const handleBodyScroll = () => {
      // Disable background scrolling when the dropdown is open
      if (ismenuopen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleBodyScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleBodyScroll);
    };
  }, [ismenuopen]);

  function changeNav(isLogoClick) {
    let mystyle = document.getElementById("changeNavbar");
    let appleLogo = document.getElementById("myapplelogo");
    let cartLogo = document.getElementById("mycartlogo");
    mystyle.style.color = isLogoClick ? "orange" : "black";
    mystyle.style.backgroundColor = isLogoClick ? "black" : "gray";
    appleLogo.style.stroke = isLogoClick ? "#ffffff" : "#000000";
    cartLogo.style.stroke = isLogoClick ? "#ffffff" : "#000000";
  }

  const [search, setSearch] = useState(false)
  return (
    <>
      <nav
        className="bg-gray-200 text-black  p-2 flex sm:flex-wrap justify-between items-center overflow-hidden sm:px-6 lg:px-8* border-b-2 border-gray-400"
        id="changeNavbar"
      >
        <Link
          to="/IphoneIMG"
          className=" text-white text-2xl font-bold"
          onClick={changeNav}
        >
          <svg
            id="myapplelogo"
            height="38"
            viewBox="0 0 14 44"
            width="14"
            stroke="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
          </svg>
        </Link>
       
      

        <div className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="20px"
          height="30px"
          className="sm:mr-3"
          onClick={()=>{setSearch(true)}}
          >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
        </svg>
        {search && (<SearchBar search={search} setSearch={setSearch}/>)}
          </div>

          <Link to="/Addcart" className=" sm:hidden flex hover:text-2xl font-bold">
          <svg
            id="mycartlogo"
            height="48"
            viewBox="0 0 17 48"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path>
          </svg>
        </Link>

        <button
          className="flex md:hidden text-white focus:outline-none"
          onClick={sidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#000000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>

          {ismenuopen && (
            <div
              className="flex justify-center items-center bg-white text-black text-4xl font-extrabold h-full w-full fixed top-0 right-0 overflow-hidden"
              style={{ zIndex: 9999 }}
            >
              <div className="p-4">
                <ul>
                  <li className="mb-2 mt-5">
                    <Link to="/Home" className="text-xl">
                      Store
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/Mac" className="text-xl">
                      Mac
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/Ipad" className="text-xl">
                      iPad
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/Iphone" className="text-xl">
                      iPhone
                    </Link>
                  </li>
                  <li className="mb-2">
                    {" "}
                    <Link to="/Watch" className="text-xl">
                      Watch
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/Shope" className="text-xl">
                      AirPods
                    </Link>
                  </li>
                  {/* <li className="mb-2">
                  {" "}
                  <Link to="/Categories" className="text-xl">
                    Categories
                  </Link>
                </li> */}
                  <li className="mb-2">
                    <Link to="/Contact" className="text-xl">
                      Contact
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/LoginForm" className="text-xl">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </button>

        <div className="hidden sm:flex flex-grow items-center justify-center space-x-4">
          <Link to="/Home" className="  ">
            Store
          </Link>
          <Link to="/Mac" className=" ">
            Mac
          </Link>
          <Link to="/Ipad" className="  ">
            iPad
          </Link>
          <Link to="/Iphone" className="  ">
            iPhone
          </Link>
          <Link to="/Watch" className="  ">
            Watch
          </Link>
          <Link to="/Shope" className=" ">
            AirPods
          </Link>
          {/* <Link to="/Categories" className="">
            Categories
          </Link> */}
          <Link to="/Contact" className=" ">
            Contact
          </Link>
          <Link to="/LoginForm" className=" ">
            Login
          </Link>
        </div>

     <div className="hidden sm:flex " >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="20px"
          height="30px"
          className="sm:mr-3"
          onClick={()=>{setSearch(true)}}
          >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
        </svg>
        {search && (<SearchBar search={search} setSearch={setSearch}/>)}
          </div>
        <Link to="/Addcart" className="md:flex hidden hover:text-2xl font-bold">
          <svg
            id="mycartlogo"
            height="48"
            viewBox="0 0 17 48"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path>
          </svg>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
