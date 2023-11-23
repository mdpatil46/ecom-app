import React, { useContext } from 'react'
import NoteContext from '../context/note/NoteContext'
import Forcontext from './Forcontext';

function Categories() {
  const{email}  = useContext(NoteContext);
  const myData = useContext(Forcontext)

  // const username = useContext(NoteContext)
  return (
    <>
    <p className='text-black text-3xl'>This is My Name : {myData.name}</p>
<div className="my-6">
<input type="text" placeholder='username...'  />
<p>username: {email} </p><br />
<p>password: {}</p>
</div>
    </>
  )
}

export default Categories
