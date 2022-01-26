import React from 'react';
import './stylesheet.css'

function Stylesheet(props) {

    let className = props.primary ? 'primary' : 'secondary'

    return <div className='secondary font-xl'>Hello World</div>;
}

export default Stylesheet;
