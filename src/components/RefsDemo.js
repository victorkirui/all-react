import React, { Component } from 'react';

class RefsDemo extends Component {

    constructor(){
        super()
        this.inputRef = React.createRef()

        this.cbRef = null

        this.setCbRef = element => {
            this.cbRef = element
        }

        this.inputRefHandler = this.inputRefHandler.bind(this)
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    inputRefHandler(){
        console.log(this.inputRef.current.value);
    }

    render() {
        return (
        <div>
            <input type="text" ref = {this.inputRef } />
            <input type="text" ref = {this.setCbRef } />
            <button onClick={this.inputRefHandler}>Log Input Value</button>
        </div>
        )
    }
}

export default RefsDemo;
