import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = (props) =>{

    const [usuario, setUsuario] = useState(
        {
            "id": "",
            "nome": "jagudu",
            "sobrenome":"dossa"
        }
    )


    return(
        <StateContext.Provider value={[usuario, setUsuario]}>
            {props.children}
        </StateContext.Provider>
    )
}
