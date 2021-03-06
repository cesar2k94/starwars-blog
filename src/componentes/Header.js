import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context} from '../store/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const {store, actions}= useContext(Context);
    
    const mystyle={
        margin: "30px",
        marginBottom:"15px",
        marginTop:"15px",
    }

    console.log(store.favorites,"sdfsdf");
   const DeleteElement=(list)=> actions.setFavorites(list);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            < Link to="/" className="navlink">
                <h5 className="starwars" style={{ margin: 0 }}>Start</h5>
                <h5 className="starwars" style={{ marginTop: -8 }}>Wars</h5>
            </Link>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent" >
                <div className="dropdown" style={mystyle}>
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos ({store.favorites.length})
                     </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {
                            (store.favorites.length > 0) ?
                            store.favorites.map((list, index) =>
                                    <li className="dropdown-item"
                                        key={index}> {list.name}
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                            className="delete-element"
                                            onClick={()=>DeleteElement( list)} 
                                        />
                                    </li>
                                )
                                : <li className="dropdown-item">(empty)</li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;