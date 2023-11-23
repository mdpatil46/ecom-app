import React from 'react'
import { Link } from 'react-router-dom';


function Navbar(props) {
  const {b} = props;
  return (
    <>

      <nav className="bg-black p-4 flex flex-wrap justify-between items-center sm:px-6 lg:px-8*">

        <Link to="/IphoneIMG" className=" text-white text-2xl font-bold" >{b}</Link>
          

          


        {/* <div className="flex md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
           
          </button>
        </div> */}

        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <Link to="/Home" className=" hover:text-2xl text-white  ">Home</Link>
          <Link to="/Shope" className=" hover:text-2xl text-white">Shop</Link>
          <Link to="/Categories" className=" hover:text-2xl text-white">Categories</Link>
          <Link to="/Contact" className="hover:text-2xl text-white">Contact</Link>
          <Link to="/LoginForm" className="hover:text-2xl text-white">Login</Link>
        </div>
      <Link to ="/Addcart" className='hover:text-2xl text-yellow-300 font-bold'>Cart</Link>
      </nav>
    </>

  )
}

export default Navbar;
