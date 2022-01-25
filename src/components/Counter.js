import React, { Component } from 'react';

export class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    handleIncrement(){

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        
    }
    
    handleIncrementFive(){
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
    }

    render() {
    return (
        <div>
            <h1>Count is : { this.state.count }</h1>
            <button onClick={ () => this.handleIncrementFive()}>Increment Five</button>
        </div>
    )
}

}
