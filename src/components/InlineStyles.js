import React from 'react';

const heading = {
    fontSize: '72px',
    color: 'red',
    textDecoration:'underline'
}

function InlineStyles() {
    return <div style={heading} >Hello World</div>;
}

export default InlineStyles;
