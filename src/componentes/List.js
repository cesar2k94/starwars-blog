import React, { useState, useEffect } from 'react';
import Card from './Card';

const List = () => {

    const [people, setPeople] = useState({});

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then(resp => resp.json())
            .then(data => setPeople(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="card-deck">
            {people.results ?
                people.results.map((list, index) => <Card list={list} index={index + 1} />)
                :
                <h1>Cargando...</h1>
            }
        </div>
    );
}

export default List;