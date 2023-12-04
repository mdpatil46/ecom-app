import React from "react";
import { useSelector } from "react-redux"


function Categories() {
const inputValue = useSelector((state) => state.counter.names )

  // const username = useContext(NoteContext)
  return (
    <>
    <p className='text-black text-3xl'>This is My Name : </p>
<div className="my-6">
<input type="text" placeholder='username...'  />
<p>username: {inputValue} </p><br />
<p>password:</p>
</div>
    </>
  )
}

export default Categories
