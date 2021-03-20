import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Context} from '../store/appContext';

const Card = ({list, index, title}) => {

    
    const {store, actions}= useContext(Context);

    const [state, setState] = useState(0);
    const [heroe, setHeroe] = useState({});
    
    const mystylePhoto={
        width:"",
        height: "100px"
    };
    const mystyleBody={
        width:"",
        minheight: "300px"
    };

   
    //Get a guerrero según iud
    useEffect(() => {
        fetch("https://www.swapi.tech/api/"+title + index)
        .then(resp => resp.json())
        .then(data=>
            {
                setHeroe(data)
                if (heroe) {
                    actions.setHeroeArray(heroe);
                }
            })
        .catch(error => console.log(error));;
      }, []);

            
    

    //Eliminar o agregar de favoritos
    const Addfavorites =()=>{
        store.favorites.map((list2)=>{
            if( list.name === list2.name ){
                setState(1);
                actions.setFavorites(list2);
            }
        })
        if (state===0) { 
            actions.setFavoritesAdd(list);
            setState(1);
        }else{
            setState(0);
        }

        console.log(store.favorites);
    }
    return (
        <div className="card" >
            <img className="card-img-top" 
            style={mystylePhoto}
            src='./data/descarga.jpg' alt="Card image cap " />
            <div className="card-body" style={mystyleBody}>
                <h6 className="card-title">{list.name}</h6>
                <p className="card-text">{heroe.result? 
                    heroe.result.properties.gender?
                        <p>Gender: {heroe.result.properties.gender}</p>
                     : 
                        heroe.result.properties.population?
                            <p>Population: {heroe.result.properties.population} </p>
                        : " ..." 
                    : " ..."  
                     }
                </p>
                <p className="card-text">{heroe.result? 
                    heroe.result.properties.hair_color? 
                        <p>Hair Color: {heroe.result.properties.hair_color} </p>
                     : 
                        heroe.result.properties.climate?
                            <p>Climate: {heroe.result.properties.climate} </p>
                        : " ..."
                    : " ..."
                     } 
                </p>
                <p className="card-text">{heroe.result? 
                    heroe.result.properties.eye_color?
                        <p>Eye Color: {heroe.result.properties.eye_color}</p>
                     : "" 
                    : ""
                    }
                </p>
            </div>
            <div className="card-footer d-flex ">
               
                <Link exact to={`/information/${list.uid}`} className="navlink" >Learn more!</Link> 
                { (store.favorites.find(element=>element.name===list.name))? 
                    <FontAwesomeIcon
                    icon={faHeart}
                    className="favorites flex-row-reverse"
                    onClick={()=>Addfavorites()}                       
                    />
                    :
                    <FontAwesomeIcon
                    icon={faHeartBroken}
                    className="favorites flex-row-reverse"  
                    onClick={()=>Addfavorites()}                        
                    />    
                }
            </div>
        </div>
    );
}

export default Card;