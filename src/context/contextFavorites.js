import React, { useState } from 'react'

const ContextFavorites = React.createContext();

const ProovedorFavorites = ({children}) => {
    
    const [favorites, setFavorites] = useState([]);

    const [stateInd, setInd] = useState("");

    const [heroeArray, setHeroeArray] = useState([]);
    
    //const [heart, setHeart] = useState(1);

    return (
        <ContextFavorites.Provider value={{favorites, setFavorites, stateInd, setInd, heroeArray, setHeroeArray}}>
            {children}
        </ContextFavorites.Provider>
    )
}
 
export  {ProovedorFavorites, ContextFavorites};