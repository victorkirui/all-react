import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParent extends Component {

    constructor(){
        super()
        this.inputRef = React.createRef()

        this.focusHandler = this.focusHandler.bind(this)
    }

    focusHandler(){
        this.inputRef.current.focus()
    }

  render() {
    return (<div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.focusHandler}>Focus Input</button>
    </div>)
  }
}

export default FRParent;
