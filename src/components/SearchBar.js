import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({search, setSearch}) {
  let AppleItem = [
    { path: "/Home", label: "Store" },
    { path: "/Mac", label: "Mac" },
    { path: "/Ipad", label: "iPad" },
    { path: "/Iphone", label: "iPhone" },
    { path: "/Watch", label: "Watch" },
    { path: "/Shope", label: "AirPod" },
    { path: "/Contact", label: "Contact" },
    { path: "/LoginForm", label: "Login" },
    { path: "/Addcart", label: "cart" },
    { path: "/Signin", label: "SignUp" },
  ];

  const [filter, setFilter] = useState("");

  const [newFilter, setNewFilter] = useState(AppleItem);

  function filterItem(event) {
    let newItem = event.target.value;
    setFilter(newItem);

    let myitem = AppleItem.filter((jannu) =>
      jannu.label.toLowerCase().includes(newItem.toLowerCase())
    );

    setNewFilter(myitem);
  }

  return (
    <>
      <div className="fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center"  style={{ zIndex: 1000 }}>
        <div className="h-96 w-9/12 bg-slate-200">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-bold"
              placeholder="Search apple.com"
              required
              value={filter}
              onChange={filterItem}
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={()=>{setSearch(false)}}
            >
              close
            </button>
          </div>
        </form>
          <p className="text-gray-400 text-xs font-semibold mt-4">Quick Link</p>
        <ol>
          {newFilter.map((item, index) => (
              <li key={index} className="font-semibold text-l m-1 text-gray-500 hover:bg-slate-100 hover:text-black">
          

              <Link to={item.path} onClick={()=>{setSearch(false)}} >    
               
              {item.label}</Link>
            </li>
          ))}
        </ol>
        </div>
        </div>
     
    </>
  );
}

export default SearchBar;
