
import React, { useState } from "react";

import NoteContext from "./NoteContext";
import Forcontext from "../../components/Forcontext";
import Cartcontext from "./Cartcontext"


const NoteState = (tops) => {
    const data = {
        "name": "govinda"
    }
    const [email, setEmail] = useState(' ')
    const [amount, setamount]= useState( )

    

        return (
         <Cartcontext.Provider value={{amount, setamount}}>
          <Forcontext.Provider value={data}>
            <NoteContext.Provider value={{  email, setEmail  }}  >
                {tops.children}
            </NoteContext.Provider>
           </Forcontext.Provider>
         </Cartcontext.Provider>

        )
    };


export default NoteState;