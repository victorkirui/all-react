import React from 'react';

function Greet(props){
    const {name,age} = props;
    return (
        <div>
            <h1>Hello { name}, you are {age} years old!</h1>
            { props.children }
        </div>
    )
    
}

export default Greet;