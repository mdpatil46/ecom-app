import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { increment} from '../features/valueAdd/valueSlice';

export default function Addcart() {
  const dispatch = useDispatch();
 
 const changeInput = (e)=>{
  dispatch (increment(e.target.value));
 } ;

 const inputValue = useSelector((state) => state.counter.names )
  return (
    <>
     <div className='py-16 px-16 max-w-2xl mx-auto bg-gray-300
rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 my-12'>
      <p className='text-black text-2xl font-bold'>Your Total Add Cart Amount = </p>
     </div>
     <div>
      <label htmlFor='value'>my name : </label><input type='text' id='value' onKeyUp={changeInput}/>
      
    </div>

    <h1>my idea! = {inputValue}</h1>
    </>
  )
}
