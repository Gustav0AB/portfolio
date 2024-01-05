import React, { useState, useEffect, createRef } from 'react';

export const TodoListComponent = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [isAdded, setIsAdded]  = useState(false);
    const [persons, setPersons] = useState([]);

    const handler = () => {
        const url = 'http://127.0.0.2:4000/api/post/names';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                lastname: lastname
            }),
        };

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data); 
            setPersons(data.content);
        });
    }

    useEffect(() => {
        const url = 'http://127.0.0.2:4000/api/get/names';
        const requestOptions = {
            method: 'GET'
        };

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            if(!data)
                setPersons(data.content);
        });

    },[])

    return (    
        <>
            <div>
                <label>Nombre: <input type="text" value={name} onChange={e => setName(e.target.value)} /></label>
                <label>Apellido: <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} /></label>
                <button onClick={handler}>submit </button>
            </div>

            
            {
                persons.map( element => (
                    <p >{element.name}</p>
                ))
            }
        </>
    );
}