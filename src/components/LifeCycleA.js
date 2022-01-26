// MOUNTING PHASE 

import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(){
        super()
        this.state = {
            name: 'vic'
        }
        console.log('A constructor');

        this.handleState = this.handleState.bind(this)
    }

    static getDerivedStateFromProps(props,state){
        console.log('A getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('A componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('A shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('A getSnapShotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('A componentDidUpdate');
    }

    handleState(){
        this.setState({
            name:'kirui'
        })
    }

    render() {
        console.log('A render');
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={ this.handleState }>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA;
