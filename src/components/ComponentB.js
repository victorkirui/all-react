import React, { Component } from 'react';
import ComponentC from './ComponentC';
import UserContext from './UserContext';

class ComponentB extends Component {

    static contextType = UserContext;

  render() {
    return (
        <div>
            <h2>ComponentB context {this.context}</h2>
            <ComponentC />
        </div>
    )
  }
}

export default ComponentB;
