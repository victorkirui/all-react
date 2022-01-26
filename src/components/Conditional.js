import React, { Component } from 'react'

class Conditional extends Component {

    constructor(){
        super()

        this.state = {
            isLoggedIn:false
        }
    }

    render(){

        // Ternery operator

        // return this.state.isLoggedIn ? <div>Welcome JEff</div> : <div> Welcome Guest</div>

        // Short circuit operator

        return this.state.isLoggedIn && <div>WELCOME AVINA</div>

        // //Element variables

        // let greeting

        // if(this.state.isLoggedIn){
        //     greeting = <div>Hello victor</div>
        // }else{
        //     greeting = <div>Welcome Guest</div>
        // }

        // return <div>{ greeting }</div>

        // // if else
        // if(this.state.isLoggedIn){
        //     return <div>Hello Victor</div>
        // }else{
        //     return <div>Hello Guest</div>
        // }
    }
}

export default Conditional;