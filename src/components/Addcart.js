import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Addcart() {
  const amountIn = useSelector((state) => state.counter.amount);

  const addimg = useSelector((state) => state.counter.photo);

  const name = useSelector((state) => state.counter.names);

  const[showdiv, setShowdiv] = useState(false);

  const [heding, setHeding] = useState (true);

  const reduxShowdiv = useSelector((state)=>state.counter.showdiv)

  useEffect(()=>{
    setShowdiv(reduxShowdiv);
    if ( reduxShowdiv) {
    setHeding(false)
    
    }else{
      setHeding(true)
     
    }

   
  },[reduxShowdiv, ])


  return (
    <>
     {heding && ( <div className="flex  items-center justify-center mt-12">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 p-3 ">
            <img
              src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
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
            <Link to="/LoginForm">
              <button
                type="button"
                className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-black dark:hover:bg-black me-2 mb-2"
              >
                <svg
                  className="w-5 h-5 me-2 -ms-1"
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
                className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-black dark:hover:bg-black me-2 mb-2"
              >
                <svg
                  className="w-5 h-5 me-2 -ms-1"
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
      </div>)}
     

   {showdiv && (<div className="flex  items-center justify-center mt-8">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 p-3 ">
            <img
              src={addimg}
              alt="YourPakj"
              className="h-full w-full object-cover p-3"
            />
          </div>
          <div className="p-6">
            <div className="flex relative space-x-28">
              <p className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
                {name}
              </p>
              <p className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
             {amountIn}
              </p>
            </div>
            <p className="font-normal text-xs text-green-700">In stock</p>
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-gray-700 antialiased">
            Eligible for FREE Shipping
            </p>
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-black antialiased">
            Colour: White Titanium
            </p>
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-black antialiased">
            Size: 256 GB
            </p>
          <label>Quantity : </label><select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10+</option>
  </select>
  <button className="m-2" onClick={()=>(setShowdiv(false))}>
    <p className="text-xs font-noraml">| Delete |</p>
  </button>
          </div>
        </div>
      </div>)}

    {/* <div className="flex  items-center justify-center mt-8">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 p-3 ">
            <img
              src={addimg}
              alt="YourPakj"
              className="h-full w-full object-cover p-3"
            />
          </div>
          <div className="p-6">
            <div className="flex relative space-x-28">
              <p className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
                {name}
              </p>
              <p className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
             {amountIn}
              </p>
            </div>
            <p className="font-normal text-xs text-green-700">In stock</p>
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-gray-700 antialiased">
            Eligible for FREE Shipping
            </p>
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-black antialiased">
            Colour: White Titanium
            </p>
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-black antialiased">
            Size: 256 GB
            </p>
          <label>Quantity : </label><select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10+</option>
  </select>
  <button className="m-2">
    <p className="text-xs font-noraml">| Delete |</p>
  </button>
          </div>
        </div>
      </div>  */}

       {/* <div className="flex  items-center justify-center mt-8">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 p-3 ">
            <img
              src={addimg}
              alt="YourPakj"
              className="h-full w-full object-cover p-3"
            />
          </div>
          <div className="p-6">
            <div className="flex relative space-x-28">
              <p className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
                {name}
              </p>
              <p className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
             {amountIn}
              </p>
            </div>
            <p className="font-normal text-xs text-green-700">In stock</p>
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-gray-700 antialiased">
            Eligible for FREE Shipping
            </p>
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-black antialiased">
            Colour: White Titanium
            </p>
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-black antialiased">
            Size: 256 GB
            </p>
          <label>Quantity : </label><select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10+</option>
  </select>
  <button className="m-2">
    <p className="text-xs font-noraml">| Delete |</p>
  </button>
          </div>
        </div>
      </div>  */}
    </>
  );
}
