import React from 'react';

function ChildComponent(props) {

    const { greetHandler } = props;

    return <button onClick = { () => greetHandler('child') }>Greet Parent</button>;
}

export default ChildComponent;
