import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/valueAdd/valueSlice";
import { Link } from "react-router-dom";

export default function Addcart() {
  const dispatch = useDispatch();

  const changeInput = (e) => {
    dispatch(increment(e.target.value));
  };

  const inputValue = useSelector((state) => state.counter.names);

  // const amountIn = useSelector((state) => state.counter.amount);

  const addimg = useSelector((state) => state.counter.photo);
  return (
    <>
      
      

       
      <div>
        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2">
          <div className="a-column a-span4">
            <img
              src={addimg}
              alt="MyImg"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">
            "The iPhone 15 boasts a stunning display, powerful performance, and
            advanced camera technology for an exceptional mobile experience."
          </p>
          <div className="flex justify-between items-center"></div>
        </div>

        <label htmlFor="value">my name : </label>
        <input type="text" id="value" onKeyUp={changeInput} />
      </div>

      <h1>my idea! = {inputValue}</h1>
 

      <div className="flex  items-center justify-center mt-32">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 p-3 ">
            <img
              src={addimg}
              alt=""
              className="h-full w-full object-cover p-3"
            />
          </div>
          <div className="p-6">
          
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Your Apple Cart is empty
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Shop today's deals
            </p>
            <Link  to="/LoginForm" >
              <button
                type="button"
                class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-black dark:hover:bg-black me-2 mb-2"
              >
                
                <svg
                  class="w-5 h-5 me-2 -ms-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                Sign in with Apple
              </button>
            </Link>
            <Link to="/Signin">

              <button
                type="button"
                class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-black dark:hover:bg-black me-2 mb-2"
                >
                
                <svg
                  class="w-5 h-5 me-2 -ms-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                </svg>
                Sign up Now
              </button>
                    </Link>
          </div>
        </div>

       
      </div>
    </>
  );
}
