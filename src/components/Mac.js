import React from 'react'

function Mac() {

 setTimeout(() => {
  document.getElementById('blue').style = 'background:white; color:black;  transition: background-color 1.5s ease;';
 }, 1000);

  return (
    <>
    
      <div className='bg-blue-700 h-20 w-99 text-white flex items-center' id='blue'>
      <div className="mx-80 text-center ">
          <p className="text-xm ">
          Get up to ₹8000.00 instant savings on selected Mac models with eligible HDFC Bank cards. Footnote §§ Plus No Cost EMI from most leading banks.
          </p>
        </div>
      </div>

     <div className="mx-auto flex-wrap justify-center  bg-gray-200 mt-0">
       <p className='text-7xl font-bold ml-20'>Mac</p>
       <p className='text-2xl font-semibold '>if you can dream it, mac can do it.</p>

     </div>

    </>
  )
}

export default Mac
