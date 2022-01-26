import React, { Component } from 'react';
import Input from './Input';

class FocusInput extends Component {

    constructor(){
        super()
        this.focusRef = React.createRef();

        this.handleFocus = this.handleFocus.bind(this)
    }

    handleFocus(){
        this.focusRef.current.focusInput()
    }

  render() {
    return (
    <div>
        <Input ref = {this.focusRef} />
        <button onClick={this.handleFocus}>Focus Input</button>
    </div>
    )
  }
}

export default FocusInput;
