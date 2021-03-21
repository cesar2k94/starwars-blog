import React, { useEffect, useState } from 'react';
//import { Context} from '../store/appContext';
import { useParams } from 'react-router-dom';

const Information = () => {

    const { title, id } = useParams();
    //const {store, actions}= useContext(Context);
    const [warrior, setWarrior] = useState({})

    useEffect(() => {
        fetch("https://www.swapi.tech/api/" + title + "/" + id)
            .then(resp => resp.json())
            .then(data => setWarrior(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal information-general">
                                <div className="img-square-wrapper">
                                    <img className="" src="http://via.placeholder.com/300x180" alt="Card image cap" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{warrior.result ? warrior.result.properties.name : " Cargando..."}</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card-footer d-flex information-total">
                                <div className="information">
                                    <p>Name</p>
                                    <p>{warrior.result ? warrior.result.properties.name : " Cargando..."}</p>
                                </div>
                                <div className="information">
                                    {warrior.result ?
                                        warrior.result.properties.birth_year ?
                                            <>
                                                <p>Birth Year</p>
                                                <p>{warrior.result.properties.birth_year}</p>
                                            </>
                                            :
                                            warrior.result.properties.climate ?
                                                <>
                                                    <p>Climate</p>
                                                    <p>{warrior.result.properties.climate}</p>
                                                </>
                                                :
                                                warrior.result.properties.vehicle_class ?
                                                    <>
                                                        <p>Vehicle Class</p>
                                                        <p>{warrior.result.properties.vehicle_class}</p>
                                                    </>
                                                    :"..."
                                        :
                                        "Cargando..."
                                    }
                                </div>
                                <div className="information">
                                    {warrior.result ?
                                        warrior.result.properties.gender ?
                                            <>
                                                <p>Gender</p>
                                                <p>{warrior.result.properties.gender}</p>
                                            </>
                                            :
                                            warrior.result.properties.population ?
                                                <>
                                                    <p>Population</p>
                                                    <p>{warrior.result.properties.population}</p>
                                                </>
                                                :
                                                warrior.result.properties.passengers ?
                                                    <>
                                                        <p>Passengers</p>
                                                        <p>{warrior.result.properties.passengers}</p>
                                                    </>
                                                    :"..."
                                        :
                                        "Cargando..."
                                    }
                                </div>
                                <div className="information">
                                    {warrior.result ?
                                        warrior.result.properties.height ?
                                            <>
                                                <p>Height</p>
                                                <p>{warrior.result.properties.height}</p>
                                            </>
                                            :
                                            warrior.result.properties.orbital_period ?
                                                <>
                                                    <p>Orbital Period</p>
                                                    <p>{warrior.result.properties.orbital_period}</p>
                                                </>
                                                :
                                                warrior.result.properties.cargo_capacity ?
                                                    <>
                                                        <p>Cargo Capacity</p>
                                                        <p>{warrior.result.properties.cargo_capacity}</p>
                                                    </>
                                                    :"..."
                                        :
                                        "Cargando..."
                                    }                                
                                </div>
                                <div className="information">
                                    {warrior.result ?
                                        warrior.result.properties.skin_color ?
                                            <>
                                                <p>Skin Color</p>
                                                <p>{warrior.result.properties.skin_color}</p>
                                            </>
                                            :
                                            warrior.result.properties.rotation_period?
                                                <>
                                                    <p>Rotation Period</p>
                                                    <p>{warrior.result.properties.rotation_period}</p>
                                                </>
                                                :
                                                warrior.result.properties.consumables ?
                                                    <>
                                                        <p>Consumables</p>
                                                        <p>{warrior.result.properties.consumables}</p>
                                                    </>
                                                    :"..."
                                        :
                                        "Cargando..."
                                    }
                                </div>
                                <div className="information">
                                    {warrior.result ?
                                        warrior.result.properties.eye_color ?
                                            <>
                                                <p>Eye Color</p>
                                                <p>{warrior.result.properties.eye_color}</p>
                                            </>
                                            :
                                            warrior.result.properties.diameter?
                                                <>
                                                    <p>Diameter</p>
                                                    <p>{warrior.result.properties.diameter}</p>
                                                </>
                                                : ""
                                        :
                                        "Cargando..."
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;