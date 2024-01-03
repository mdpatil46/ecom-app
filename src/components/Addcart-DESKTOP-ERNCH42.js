import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/valueAdd/valueSlice";

export default function Addcart() {
  const dispatch = useDispatch();

  const changeInput = (e) => {
    dispatch(increment(e.target.value));
  };

  const inputValue = useSelector((state) => state.counter.names);

  const amountIn = useSelector((state) => state.counter.amount);

  const addimg = useSelector((state)=> state.counter.photo)
  return (
    <>
    {/*
      <div
        className=" h-auto w-auto ml-10 mr-10  mt-10 bg-gray-300 rounded-xl  "> 
        <p className="text-black text-2xl font-bold">
          Your Total Add Cart Amount = {amountIn}
        </p>
      </div>

       
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
  */}
    </>
  );
}
