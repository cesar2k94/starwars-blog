import React, {  useEffect, useState } from 'react';
//import { Context} from '../store/appContext';
import {useParams} from 'react-router-dom';

const Information = () => {

    const {id} = useParams();
    //const {store, actions}= useContext(Context);
    const [warrior, setWarrior] = useState({})

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + id)
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
                                    <p>Birth Year</p>
                                    <p>{warrior.result ? warrior.result.properties.birth_year : " Cargando..."}</p>
                                </div>
                                <div className="information">
                                    <p>Gender</p>
                                    <p>{warrior.result ? warrior.result.properties.gender : " Cargando..."}</p>
                                </div>
                                <div className="information">
                                    <p>Height</p>
                                    <p>{warrior.result ? warrior.result.properties.height : " Cargando..."}</p>
                                </div>
                                <div className="information">
                                    <p>Skin Color</p>
                                    <p>{warrior.result ? warrior.result.properties.skin_color : " Cargando..."}</p>
                                </div>
                                <div className="information">
                                    <p>Eye Color</p>
                                    <p>{warrior.result ? warrior.result.properties.eye_color : " Cargando..."}</p>
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