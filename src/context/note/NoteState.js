
import React, { useState } from "react";

import NoteContext from "./NoteContext";
import Forcontext from "../../components/Forcontext";


const NoteState = (tops) => {
    const data = {
        "name": "govinda"
    }
    const [email, setEmail] = useState(' ')

    

        return (

          <Forcontext.Provider value={data}>
            <NoteContext.Provider value={{  email, setEmail  }} >
                {tops.children}
            </NoteContext.Provider>
          </Forcontext.Provider>

        )
    };


export default NoteState;