import React, { Component } from 'react';
import MemoComponent from './MemoComponent';

class ParentComp extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: 'Victor'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'victor'
            })
        },2000)
    }

    render() {
        console.log('***********ParentComp********');
        return (
            <div>
                Parent Component
                <MemoComponent />
            </div>
        )
    }
}

export default ParentComp;
