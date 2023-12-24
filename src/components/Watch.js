import React from 'react'
import { useState } from 'react';

function Watch() {

  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  return (
    <>
       <div>
      <button onClick={() => setShowDiv1(!showDiv1)}>Show Div 1</button>
      {showDiv1 && <div>This is div 1</div>}

      <button onClick={() => setShowDiv2(!showDiv2)}>Show Div 2</button>
      {showDiv2 && <div>This is div 2</div>}ow
    </div>
    </>
  )
}

export default Watch
