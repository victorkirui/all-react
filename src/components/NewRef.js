import React, { Component } from 'react';

class NewRef extends Component {

    constructor(){
        super()
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref = {this.inputRef} />
            </div>
        )
    }
}

export default NewRef;
