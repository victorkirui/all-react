// MOUNTING PHASE 

import React, { Component } from 'react';

class LifeCycleB extends Component {

    constructor(){
        super()
        this.state = {
            name: 'vic'
        }
        console.log('B constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('B getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('B componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('B shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('B getSnapShotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('B componentDidUpdate');
    }

    render() {
        console.log('B render');
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifeCycleB;
