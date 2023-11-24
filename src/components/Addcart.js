import React from 'react'
import Cartcontext from '../context/note/Cartcontext'
import { useContext } from 'react'

export default function Addcart() {
  const {amount} = useContext(Cartcontext)
  return (
    <>
     <div className='py-16 px-16 max-w-2xl mx-auto bg-gray-300

rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 my-12'>
      <p className='text-black text-2xl font-bold'>Your Total Add Cart Amount = {amount}</p>
     </div>
    </>
  )
}
