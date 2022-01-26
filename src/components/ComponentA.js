import React, { Component } from 'react';
import ComponentB from './ComponentC';

class ComponentA extends Component {
  render() {
    return (
        <div>
            <ComponentB />
        </div>
    )
  }
}

export default ComponentA;