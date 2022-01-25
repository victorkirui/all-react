import React, { Component } from 'react';

class Welcome extends Component {

    render() {

        const { concept } = this.props;
        return <h2>Class Component - { concept }</h2>
    }
}

export default Welcome;


