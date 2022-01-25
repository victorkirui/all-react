import React, { Component } from 'react';

class EventBind extends Component {

    constructor(){
        super()

        this.state = {
            message: "Hello Vegass"
        }

        // this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage = () => {
        this.setState({
            message: "Newyork"
        })
    }

  render() {
    return (
    <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={ ()=> this.changeMessage() }>Click Me</button> */}

        {/* <button onClick={ this.changeMessage.bind(this) }>Click Me</button> */}

        <button onClick={ this.changeMessage }>Click Me</button>

    </div>)
  }
}

export default EventBind;
