import React from 'react';

function FunctionClick(){

    const clickHandler = () => {
        return console.log('clicked');
    }

    return <button onClick = { clickHandler }>Click Me</button>
}

export default FunctionClick;