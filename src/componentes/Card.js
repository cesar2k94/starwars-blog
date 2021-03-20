import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Context} from '../store/appContext';

const Card = ({list, index}) => {

    
    const {store, actions}= useContext(Context);

    const [state, setState] = useState(0);
    const [heroe, setHeroe] = useState({});
    
    const mystyle={
        width:"",
        height: "100px"
    };

   
    //Get a guerrero según iud
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + index)
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
            if( list.uid === list2.uid ){
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
            style={mystyle}
            src='./data/descarga.jpg' alt="Card image cap " />
            <div className="card-body">
                <h5 className="card-title">{list.name}</h5>
                <p className="card-text">Gender:{heroe.result? heroe.result.properties.gender : " ..." }</p>
                <p className="card-text">Hair Color: {heroe.result? heroe.result.properties.hair_color : " ..." } </p>
                <p className="card-text">Eye Color: {heroe.result? heroe.result.properties.eye_color : " ..." }</p>
            </div>
            <div className="card-footer d-flex ">
               
                <Link exact to={`/information/${list.uid}`} className="navlink" >Learn more!</Link> 
                { (store.favorites.find(element=>element.uid===list.uid))? 
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