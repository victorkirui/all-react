import React from 'react';
import ReactDom from 'react-dom';

const portal = document.querySelector('#portal-root');

function Portals() {
  return ReactDom.createPortal(
    <div>
        React Portals
    </div>,
    portal
    )
}

export default Portals;
