import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Information from './Information';

const Card = ({ list, index, title }) => {


    const { store, actions } = useContext(Context);

    const [state, setState] = useState(0);
    const [heroe, setHeroe] = useState({});

    const mystylePhoto = {
        width: "",
        height: "100px"
    };



    //Get a guerrero según iud
    useEffect(() => {
        fetch("https://www.swapi.tech/api/" + title + index)
            .then(resp => resp.json())
            .then(data => {
                setHeroe(data)
                if (heroe) {
                    actions.setHeroeArray(heroe);
                }
            })
            .catch(error => console.log(error));;
    }, []);


    //Eliminar o agregar de favoritos
    const Addfavorites = () => {
        store.favorites.map((list2) => {
            if (list.name === list2.name) {
                setState(1);
                actions.setFavorites(list2);
            }
        })
        if (state === 0) {
            actions.setFavoritesAdd(list);
            setState(1);
        } else {
            setState(0);
        }

        console.log(store.favorites);
    }
    //<Link exact to={`/information/${title}/${list.uid}`} className="navlink" >Learn more!</Link>
    return (
        <div className="card" >
            <img className="card-img-top"
                style={mystylePhoto}
                src='./data/descarga.jpg' alt="Card image cap " />
            <div className="card-body" >
                <h6 className="card-title">{heroe.result ? heroe.result.properties.name : "...."}</h6>
                <p className="card-text">{heroe.result ?
                    heroe.result.properties.gender ?
                        <p>Gender: {heroe.result.properties.gender}</p>
                        :
                        heroe.result.properties.population ?
                            <p>Population: {heroe.result.properties.population} </p>
                            :
                            heroe.result.properties.passengers ?
                                <p>Passengers: {heroe.result.properties.passengers} </p>
                                : "..."
                    : " ..."
                }
                </p>
                <p className="card-text">{heroe.result ?
                    heroe.result.properties.hair_color ?
                        <p>Hair Color: {heroe.result.properties.hair_color} </p>
                        :
                        heroe.result.properties.climate ?
                            <p>Climate: {heroe.result.properties.climate} </p>
                            :
                            heroe.result.properties.vehicle_class ?
                                <p>Vehicle Class: {heroe.result.properties.vehicle_class} </p>
                                : "..."
                    : " ..."
                }
                </p>
                <p className="card-text">{heroe.result ?
                    heroe.result.properties.eye_color ?
                        <p>Eye Color: {heroe.result.properties.eye_color}</p>
                        : ""
                    : ""
                }
                </p>
            </div>
            <div className="card-footer d-flex" >
                <Link exact to={`/information/${title}${list.uid}`} className="navlink" >
                    <button type="button" className="btn btn-outline-primary button">Learn more!</button>
                </Link>
                {(store.favorites.find(element => element.name === list.name)) ?
                    <FontAwesomeIcon
                        icon={faHeart}
                        className="favorites"
                        onClick={() => Addfavorites()}
                    />
                    :
                    <FontAwesomeIcon
                        icon={faHeartBroken}
                        className="favorites"
                        onClick={() => Addfavorites()}
                    />
                }
            </div>
        </div>
    );
}

export default Card;