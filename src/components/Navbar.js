import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  
const[ismenuopen, setmenuopen] = useState(false);

function changeNav(isLogoClick){
  let mystyle = document.getElementById("changeNavbar")
  mystyle.style.color = isLogoClick ? "orange" : 'black'; 
  mystyle.style.backgroundColor = isLogoClick ? "black" : 'gray';

}
  return (
    <>
      <nav className="bg-gray-200 text-black opacity-80 p-2 flex flex-wrap justify-between items-center sm:px-6 lg:px-8* border-b-2 border-gray-400" id='changeNavbar'>
        <Link to="/IphoneIMG" className=" text-white text-2xl font-bold" onClick={changeNav } ><svg height="38" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg></Link>
        
          <button className="flex md:hidden text-white focus:outline-none" onClick={()=> {console.log('Button click'); setmenuopen(!ismenuopen); console.log('Is manu open', ismenuopen); }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
           </button>
        
        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <Link to="/Home" className=" hover:text-2xl  ">Store</Link>
          <Link to="/Mac" className=" hover:text-2xl   ">Mac</Link>
          <Link to="/Ipad" className=" hover:text-2xl   ">iPad</Link>
          <Link to="/Iphone" className=" hover:text-2xl   ">iPhone</Link>
          <Link to="/Watch" className=" hover:text-2xl   ">Watch</Link>
          <Link to="/Shope" className=" hover:text-2xl ">AirPods</Link>
          <Link to="/Categories" className=" hover:text-2xl ">Categories</Link>
          <Link to="/Contact" className="hover:text-2xl ">Contact</Link>
          <Link to="/LoginForm" className="hover:text-2xl ">Login</Link>
        </div>
      <Link to ="/Addcart" className='md:flex hidden hover:text-2xl font-bold'><svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path></svg></Link>
      </nav>
    </>
  )
}

export default Navbar;

