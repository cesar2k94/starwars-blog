import React, { useState } from 'react'

const ContextFavorites = React.createContext();

const ProovedorFavorites = ({children}) => {
    
    const [favorites, setFavorites] = useState([]);

    const [stateInd, setInd] = useState("");

    const [heroeArray, setHeroeArray] = useState([]);
    
    return (
        <ContextFavorites.Provider value={{favorites, setFavorites, stateInd, setInd, heroeArray, setHeroeArray}}>
            {children}
        </ContextFavorites.Provider>
    )
}
 
export  {ProovedorFavorites, ContextFavorites};