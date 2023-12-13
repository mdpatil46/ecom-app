import React from 'react'
import { useState } from 'react'
import Mymodel from './modal/FirstModal'

function Iphone() {

  const [modal, omodal] = useState(false)

    
 

  function click (){
   omodal(true)
  }

  function remove(){
    omodal(false)
  }
  return (
    <>
     <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={click}>Open model </button>
     {modal && <Mymodel Lmodal={remove}/>}
    </>
  )
}

export default Iphone
