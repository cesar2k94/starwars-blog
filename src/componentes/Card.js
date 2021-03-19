import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {ContextFavorites} from './../context/contextFavorites';

const Card = ({list, index}) => {

    const {favorites, setFavorites, setInd, heroeArray, setHeroeArray}= useContext(ContextFavorites);

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
                    setHeroeArray(heroeArray.concat(heroe));
                }
            })
        .catch(error => console.log(error));;
      }, []);

            
      console.log(heroeArray);

    //Eliminar o agregar de favoritos
    const Addfavorites =()=>{
        favorites.map((list2)=>{
            if( list.uid === list2.uid ){
                setState(1);;
                setFavorites(favorites.filter(list3=>list3.uid!==list2.uid));
            }
        })
        if (state===0) { 
            setFavorites(favorites.concat({"name":list.name, "uid":list.uid, "favorite":true}));
            setState(1);
        }else{
            setState(0);
        }
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
               
                <Link exact to={`/information/${list.uid}`} value={setInd(list.uid)} className="navlink" >Learn more!</Link> 
                { (favorites.find(element=>element.uid===list.uid))? 
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