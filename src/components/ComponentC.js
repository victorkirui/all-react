import React, { Component } from 'react';
import { USerConsumer } from './UserContext'

class ComponentC extends Component {
  render() {
    return (
        <USerConsumer>
            {
                (user)=>{
                    return <div>Hello {user}</div>
                }
            }
            
        </USerConsumer>
    )
 }
}

export default ComponentC;
