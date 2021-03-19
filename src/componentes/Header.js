import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextFavorites } from './../context/contextFavorites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const { favorites, setFavorites} = useContext(ContextFavorites);

    const DeleteElement=(index)=>{
        setFavorites(favorites.filter((list2,ind)=>(ind!==index)));
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            < Link exact to="/" className="navlink">
                <h5 className="starwars" style={{ margin: 0 }}>Start</h5>
                <h5 className="starwars" style={{ marginTop: -8 }}>Wars</h5>
            </Link>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent" >
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos
                     </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {
                            (favorites.length > 0) ?
                                favorites.map((list, index) =>
                                    <li className="dropdown-item"
                                        key={index}> {list.name}
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                            className="delete-element"
                                            onClick={()=>DeleteElement( index)} 
                                        />
                                    </li>
                                )
                                : <li className="dropdown-item">...</li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;