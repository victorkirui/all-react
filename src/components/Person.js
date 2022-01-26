import React from 'react';

function Person({person}) {
    return (
        <div>
            <h2>My name is {person.name} and I am {person.age} years.</h2>
        </div>
    )
}

export default Person;
