import React, { Component } from 'react';

class ClassClick extends Component {

    clickHandler(){
        return console.log('Hello World!!');
        
    }

  render() {
    return <button onClick={ this.clickHandler }>Click Me Too</button>;
  }
}

export default ClassClick;
