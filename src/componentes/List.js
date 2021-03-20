import React, { useState, useEffect } from 'react';
import Card from './Card';

const List = () => {

    const [people, setPeople] = useState({});
    const [planets, setPlanets] = useState({});

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then(resp => resp.json())
            .then(data => setPeople(data))
            .catch(error => console.log(error));
        fetch("https://www.swapi.tech/api/planets")
            .then(resp => resp.json())
            .then(data => setPlanets(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <h2 className="title">People</h2>
            <div className="card-deck">
                {people.results ?
                    people.results.map((list, index) => <Card list={list} index={index + 1} title={"people/"}/>)
                    :
                    <h1>Cargando...</h1>
                }
            </div>
            <h2 className="title2">Planets</h2>
            <div className="card-deck">
                {planets.results ?
                    planets.results.map((list, index) => <Card list={list} index={index + 1} title={"planets/"} />)
                    :
                    <h1>Cargando...</h1>
                }
            </div>
            <h2 className="title2">Vehicles</h2>
            <div className="card-deck">
                {people.results ?
                    people.results.map((list, index) => <Card list={list} index={index + 1} title={"people/"}/>)
                    :
                    <h1>Cargando...</h1>
                }
            </div>
        </>
    );
}

export default List;